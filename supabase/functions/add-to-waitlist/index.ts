import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface WaitlistRequest {
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email }: WaitlistRequest = await req.json();

    // Send confirmation email
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Brelli <onboarding@resend.dev>",
        to: [email],
        subject: "Welcome to Brelli Waitlist",
        html: `
          <h1>Welcome to Brelli!</h1>
          <p>Thank you for joining our waitlist. We'll keep you updated on our launch and early access opportunities.</p>
          <p>Best regards,<br>The Brelli Team</p>
        `,
      }),
    });

    if (!res.ok) {
      throw new Error("Failed to send confirmation email");
    }

    return new Response(JSON.stringify({ message: "Successfully joined waitlist" }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
};

serve(handler);