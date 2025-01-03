import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { corsHeaders } from '../_shared/cors.ts'

const REDIRECT_URI = 'https://lovable.dev/projects/1a743f9a-0020-4171-81de-f43722343ab2/auth/callback'

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { platform } = await req.json()
    let url = ''

    switch (platform) {
      case 'instagram':
        const instagramClientId = Deno.env.get('INSTAGRAM_CLIENT_ID')
        console.log('Facebook/Instagram OAuth URL Generation:', {
          clientId: instagramClientId,
          redirectUri: REDIRECT_URI,
          scope: ['instagram_basic', 'instagram_content_publish', 'pages_show_list', 'pages_read_engagement'].join(',')
        })
        
        if (!instagramClientId) {
          throw new Error('Instagram Client ID is not configured')
        }
        
        url = `https://www.facebook.com/v18.0/dialog/oauth?` +
          `client_id=${instagramClientId}&` +
          `redirect_uri=${encodeURIComponent(REDIRECT_URI)}&` +
          `scope=instagram_basic,instagram_content_publish,pages_show_list,pages_read_engagement&` +
          `response_type=code&` +
          `state=instagram`
        break
      case 'tiktok':
        url = `https://open-api.tiktok.com/platform/oauth/connect?client_key=${Deno.env.get('TIKTOK_SANDBOX_CLIENT_KEY')}&redirect_uri=${REDIRECT_URI}&scope=user.info.basic&response_type=code&state=tiktok`
        break
      case 'snapchat':
        url = `https://accounts.snapchat.com/login/oauth2/authorize?client_id=${Deno.env.get('SNAPCHAT_CLIENT_ID')}&redirect_uri=${REDIRECT_URI}&scope=snapchat.user.display_name&response_type=code`
        break
      default:
        throw new Error('Invalid platform')
    }

    console.log(`Generated OAuth URL for ${platform}:`, url)

    return new Response(
      JSON.stringify({ url }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    console.error('Error generating OAuth URL:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      },
    )
  }
})