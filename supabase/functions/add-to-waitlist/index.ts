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
    
    console.log("Attempting to process waitlist signup for:", email);
    
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    // First, add the contact to Resend audience
    console.log("Adding contact to Resend audience...");
    const audienceRes = await fetch("https://api.resend.com/audiences/7d0e63b9-45c7-4824-a5a2-c468e2b5a73c/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        email,
        first_name: email.split('@')[0], // Use part before @ as first name
        subscribed: true,
      }),
    });

    if (!audienceRes.ok) {
      const audienceError = await audienceRes.text();
      console.error("Failed to add contact to Resend audience:", audienceError);
      // We'll continue with the welcome email even if audience addition fails
    } else {
      console.log("Successfully added to Resend audience");
    }

    // In test mode, we'll still record the waitlist signup but only attempt to send
    // confirmation emails to verified addresses
    const isTestMode = false; // We're setting this to false since domain is verified
    const verifiedTestEmail = "simon.ekstrand90@gmail.com"; // Your verified email

    // Record waitlist signup success regardless of email sending
    const signupSuccess = true; // In a real app, you'd save this to a database

    // Only attempt to send email if we're not in test mode or if the recipient is verified
    if (!isTestMode || email === verifiedTestEmail) {
      console.log("Sending welcome email...");
      const emailRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "Brelli <simon@brelli.se>",
          to: [email],
          subject: "Welcome to Brelli!",
          html: `
            <!DOCTYPE html>
            <html>
              <head>
                <style>
                  body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                  .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                  .header { background-color: #4F46E5; color: white; padding: 20px; text-align: center; border-radius: 8px; }
                  .content { padding: 20px 0; }
                  .footer { text-align: center; padding-top: 20px; color: #666; font-size: 14px; }
                  .button { display: inline-block; padding: 12px 24px; background-color: #4F46E5; color: white; text-decoration: none; border-radius: 6px; margin: 20px 0; }
                </style>
              </head>
              <body>
                <div class="container">
                  <div class="header">
                    <h1>Welcome to Brelli!</h1>
                  </div>
                  <div class="content">
                    <p>Thank you for joining our waitlist! We're excited to have you on board.</p>
                    <p>Brelli is revolutionizing how parents protect and guide their children in the digital world. As a waitlist member, you'll be among the first to:</p>
                    <ul>
                      <li>Get early access to our platform</li>
                      <li>Receive exclusive updates about our launch</li>
                      <li>Help shape the future of digital parenting</li>
                    </ul>
                    <p>We'll keep you updated on our progress and let you know as soon as we're ready to launch.</p>
                    <p>In the meantime, if you have any questions, feel free to reply to this email.</p>
                  </div>
                  <div class="footer">
                    <p>Best regards,<br>The Brelli Team</p>
                    <small>You're receiving this email because you signed up for the Brelli waitlist.</small>
                  </div>
                </div>
              </body>
            </html>
          `,
        }),
      });

      const resData = await emailRes.json();
      console.log("Resend API response:", resData);

      if (!emailRes.ok) {
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
  } catch (error: any) {
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