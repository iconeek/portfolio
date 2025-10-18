"use server";

import { EmailTemplate } from "@/components/globals/email-template";
import { Resend } from "resend";
import { EmailSchema } from "@/schema/emailSchema";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function send(values: EmailSchema) {
  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["nikatwork365@gmail.com"],
    subject: "Your Portfolio Qoogle Form",
    react: EmailTemplate({ values }),
  });

  if (error) {
    return data;
  }
}
