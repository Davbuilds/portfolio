import emailjs from "emailjs-com";

export interface EmailPayload {
  name: string;
  email: string;
  reason: string;
  message: string;
}

export async function sendEmail(payload: EmailPayload): Promise<void> {
  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error("Email service not configured. Please set env variables.");
  }

  await emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    { ...payload, reply_to: payload.email },
    PUBLIC_KEY
  );
}
