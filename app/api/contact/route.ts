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
      reply_to: email,
      text: `
Name: ${name}
Company: ${company}
Email: ${email}

Message:
${message}
`,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false });
  }
}