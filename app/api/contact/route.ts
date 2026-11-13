import { NextResponse } from "next/server";

/**
 * Contact enquiry endpoint.
 * Validates server-side, then hands off to storage/notification.
 * TODO: connect to Supabase (insert into an `enquiries` table) or an email service.
 */
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const str = (k: string, max = 2000) => (typeof body[k] === "string" ? (body[k] as string).trim().slice(0, max) : "");
  const data = {
    name: str("name", 120),
    organisation: str("organisation", 160),
    email: str("email", 200),
    phone: str("phone", 30),
    interest: str("interest", 120),
    message: str("message", 5000),
    consent: body.consent === true,
  };

  const errors: string[] = [];
  if (data.name.length < 2) errors.push("name");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email)) errors.push("email");
  if (!data.interest) errors.push("interest");
  if (data.message.length < 20) errors.push("message");
  if (!data.consent) errors.push("consent");
  if (errors.length) return NextResponse.json({ error: "Validation failed", fields: errors }, { status: 422 });

  // Placeholder hand-off until a backend is connected.
  console.info("[contact] new enquiry", { interest: data.interest, at: new Date().toISOString() });

  return NextResponse.json({ ok: true });
}
