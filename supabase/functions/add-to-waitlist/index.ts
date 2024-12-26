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
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email }: WaitlistRequest = await req.json();
    
    console.log("Attempting to send email to:", email);
    
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    // In test mode, we'll still record the waitlist signup but only attempt to send
    // confirmation emails to verified addresses
    const isTestMode = false; // We're setting this to false since domain is verified
    const verifiedTestEmail = "simon.ekstrand90@gmail.com"; // Your verified email

    // Record waitlist signup success regardless of email sending
    const signupSuccess = true; // In a real app, you'd save this to a database

    // Only attempt to send email if we're not in test mode or if the recipient is verified
    if (!isTestMode || email === verifiedTestEmail) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "Safe Social Watcher <simon@brelli.se>",
          to: [email],
          subject: "Welcome to Safe Social Watcher Waitlist",
          html: `
            <h1>Welcome to Safe Social Watcher!</h1>
            <p>Thank you for joining our waitlist. We'll keep you updated on our launch and early access opportunities.</p>
            <p>Best regards,<br>The Safe Social Watcher Team</p>
          `,
        }),
      });

      const resData = await res.json();
      console.log("Resend API response:", resData);

      if (!res.ok) {
        console.error("Resend API error:", resData);
        // Don't throw error, still return success if signup was recorded
      }
    }

    // Always return success if the signup was recorded
    return new Response(
      JSON.stringify({ 
        message: "Successfully joined waitlist",
        emailSent: !isTestMode || email === verifiedTestEmail 
      }), 
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error in add-to-waitlist function:", error);
    return new Response(
      JSON.stringify({ error: error.message }), 
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
};

serve(handler);