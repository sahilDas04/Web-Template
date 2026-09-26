import { NextResponse } from "next/server";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MAX_LENGTH = 5000;

type Payload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  projectType?: unknown;
  message?: unknown;
};

const asText = (value: unknown) =>
  typeof value === "string" ? value.trim().slice(0, MAX_LENGTH) : "";

export async function POST(request: Request) {
  let body: Payload;

  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const name = asText(body.name);
  const email = asText(body.email);
  const company = asText(body.company);
  const projectType = asText(body.projectType);
  const message = asText(body.message);

  if (!name || !projectType || !message) {
    return NextResponse.json(
      { error: "Name, project type and message are required" },
      { status: 400 },
    );
  }

  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json(
      { error: "A valid email address is required" },
      { status: 400 },
    );
  }

  console.log("[contact] enquiry received", {
    name,
    email,
    company,
    projectType,
    messageLength: message.length,
  });

  return NextResponse.json({ ok: true });
}
