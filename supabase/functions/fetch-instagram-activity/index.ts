import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { socialAccountId } = await req.json()
    console.log('Fetching activity for social account:', socialAccountId)
    
    // Create Supabase client with admin privileges
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false
        }
      }
    )

    const { data: tokenData, error: tokenError } = await supabaseAdmin
      .from('social_tokens')
      .select('access_token')
      .eq('social_account_id', socialAccountId)
      .maybeSingle()

    if (tokenError) {
      console.error('Error fetching token:', tokenError)
      throw new Error('Failed to fetch access token')
    }

    if (!tokenData) {
      console.error('No token found for social account:', socialAccountId)
      throw new Error('No valid token found for this account')
    }

    console.log('Successfully retrieved access token')

    // Fetch user's recent media
    const mediaResponse = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,timestamp&access_token=${tokenData.access_token}`
    )

    if (!mediaResponse.ok) {
      const errorData = await mediaResponse.text()
      console.error('Instagram API error:', errorData)
      throw new Error('Failed to fetch Instagram media')
    }

    const mediaData = await mediaResponse.json()
    console.log('Fetched Instagram media:', mediaData)

    // Create activity logs for each media item
    for (const item of mediaData.data) {
      await supabaseAdmin
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
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    )
  } catch (error) {
    console.error('Error fetching Instagram activity:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        },
        status: 400 
      }
    )
  }
})