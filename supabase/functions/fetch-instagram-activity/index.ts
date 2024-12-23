import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { corsHeaders } from '../_shared/cors.ts'

serve(async (req) => {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { socialAccountId } = await req.json()
    
    // Get the access token for this social account
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const { data: tokenData, error: tokenError } = await supabaseClient
      .from('social_tokens')
      .select('access_token')
      .eq('social_account_id', socialAccountId)
      .single()

    if (tokenError || !tokenData) {
      throw new Error('No valid token found for this account')
    }

    // Fetch user's recent media
    const mediaResponse = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,timestamp&access_token=${tokenData.access_token}`
    )

    if (!mediaResponse.ok) {
      throw new Error('Failed to fetch Instagram media')
    }

    const mediaData = await mediaResponse.json()
    console.log('Fetched Instagram media:', mediaData)

    // Create activity logs for each media item
    for (const item of mediaData.data) {
      await supabaseClient
        .from('activity_logs')
        .insert({
          social_account_id: socialAccountId,
          type: 'post',
          content: item.caption || 'No caption',
          platform: 'instagram',
        })
    }

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Error fetching Instagram activity:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400 
      }
    )
  }
})