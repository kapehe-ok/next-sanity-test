"use client";
import type { NextApiRequest, NextApiResponse } from "next";
import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Update the function signature to include NextApiRequest and NextApiResponse
export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Extract firstName, email, and message from the request body
    const { firstName, email, message } = req.body;

    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["me@alvropena.com"],
      subject: "Hello world",
      react: EmailTemplate({ firstName, email, message }),
    });

    // Use the res object to send back a JSON response
    res.status(200).json(data);
  } catch (error) {
    // Send back an error status (e.g., 500) and the error message in JSON format
    res.status(500).json({ error: error.message });
  }
}
