import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { corsHeaders } from '../_shared/cors.ts'

const REDIRECT_URI = 'https://lovable.dev/projects/1a743f9a-0020-4171-81de-f43722343ab2/auth/callback'

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { platform, code } = await req.json()
    let tokens = null

    switch (platform) {
      case 'instagram':
        tokens = await exchangeInstagramCode(code)
        break
      case 'tiktok':
        tokens = await exchangeTikTokCode(code)
        break
      case 'snapchat':
        tokens = await exchangeSnapchatCode(code)
        break
      default:
        throw new Error('Invalid platform')
    }

    console.log(`Successfully exchanged ${platform} code for tokens`)

    return new Response(
      JSON.stringify(tokens),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    console.error('Error exchanging OAuth code:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      },
    )
  }
})

async function exchangeInstagramCode(code: string) {
  console.log('Exchanging Instagram code for tokens')
  
  const response = await fetch('https://api.instagram.com/oauth/access_token', {
    method: 'POST',
    body: new URLSearchParams({
      client_id: Deno.env.get('INSTAGRAM_CLIENT_ID') || '',
      client_secret: Deno.env.get('INSTAGRAM_CLIENT_SECRET') || '',
      grant_type: 'authorization_code',
      redirect_uri: REDIRECT_URI,
      code,
    }),
  })

  if (!response.ok) {
    const error = await response.text()
    console.error('Instagram token exchange failed:', error)
    throw new Error('Failed to exchange Instagram code')
  }

  const data = await response.json()
  console.log('Successfully retrieved Instagram tokens')
  
  return data
}

async function exchangeTikTokCode(code: string) {
  console.log('Exchanging TikTok code for tokens')
  
  const response = await fetch('https://open-api.tiktok.com/oauth/access_token/v2/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      client_key: Deno.env.get('TIKTOK_CLIENT_KEY') || '',
      client_secret: Deno.env.get('TIKTOK_CLIENT_SECRET') || '',
      code,
      grant_type: 'authorization_code',
      redirect_uri: REDIRECT_URI,
    }),
  })

  if (!response.ok) {
    const error = await response.text()
    console.error('TikTok token exchange failed:', error)
    throw new Error('Failed to exchange TikTok code')
  }

  const data = await response.json()
  console.log('Successfully retrieved TikTok tokens:', data)
  
  return data
}

async function exchangeSnapchatCode(code: string) {
  const response = await fetch('https://accounts.snapchat.com/login/oauth2/access_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      client_id: Deno.env.get('SNAPCHAT_CLIENT_ID') || '',
      client_secret: Deno.env.get('SNAPCHAT_CLIENT_SECRET') || '',
      grant_type: 'authorization_code',
      code,
      redirect_uri: REDIRECT_URI,
    }),
  })

  if (!response.ok) {
    throw new Error('Failed to exchange Snapchat code')
  }

  return response.json()
}