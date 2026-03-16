import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, company, email, message } = await req.json();

    await resend.emails.send({
      from: "Eco Firma Advisors <contact@ecofirmaadvisors.com>",
      to: ["jesse@ecofirmaadvisors.com"],
      cc: ["info@ecofirmaadvisors.com"],
      subject: `Eco Firma Advisors Inquiry${company ? ` - ${company}` : ""}`,
      replyTo: email || "info@ecofirmaadvisors.com",
      text: `Name: ${name || "N/A"}
Company: ${company || "N/A"}
Email: ${email || "N/A"}

Message:
${message || "N/A"}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email." },
      { status: 500 }
    );
  }
}