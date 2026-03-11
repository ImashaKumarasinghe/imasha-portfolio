import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {

  const data = await req.json();

  const { name, email, message } = data;

  try {

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      subject: `New message from ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
`,
    });

    return Response.json({ success: true });

  } catch (error) {
    return Response.json({ error: "Email failed" }, { status: 500 });
  }
}