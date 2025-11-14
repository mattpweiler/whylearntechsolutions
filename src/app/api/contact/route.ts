import { NextResponse } from "next/server";

const PROJECT_TYPES = new Set([
  "custom-gpt",
  "internal-tool",
  "website",
  "advisory",
  "other",
]);

const BUDGET_RANGES = new Set(["<1000", "1000-5000", "5000-1000", ">10000"]);

const TIMELINES = new Set(["asap", "1-3", "3-6", "flexible"]);

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  details?: string;
  howHeard?: string;
};

export async function POST(request: Request) {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceKey) {
    return NextResponse.json(
      { error: "Missing Supabase credentials" },
      { status: 500 },
    );
  }

  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const name = payload.name?.toString().trim();
  const email = payload.email?.toString().trim();
  const details = payload.details?.toString().trim();
  const projectType = payload.projectType?.toString().trim();
  const budget = payload.budget?.toString().trim() || null;
  const timeline = payload.timeline?.toString().trim() || null;
  const company = payload.company?.toString().trim() || null;
  const howHeard = payload.howHeard?.toString().trim() || null;

  if (!name || !email || !details || !projectType) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 },
    );
  }

  if (!PROJECT_TYPES.has(projectType)) {
    return NextResponse.json(
      { error: "Invalid project type" },
      { status: 400 },
    );
  }

  if (budget && !BUDGET_RANGES.has(budget)) {
    return NextResponse.json(
      { error: "Invalid budget range" },
      { status: 400 },
    );
  }

  if (timeline && !TIMELINES.has(timeline)) {
    return NextResponse.json(
      { error: "Invalid timeline" },
      { status: 400 },
    );
  }

  const record = {
    name,
    email,
    company,
    project_type: projectType,
    budget_range: budget,
    timeline,
    details,
    how_heard: howHeard,
  };

  const response = await fetch(`${supabaseUrl}/rest/v1/project_inquiries`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: supabaseServiceKey,
      Authorization: `Bearer ${supabaseServiceKey}`,
      Prefer: "return=representation",
    },
    body: JSON.stringify([record]),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    return NextResponse.json(
      { error: "Failed to save inquiry", details: errorBody },
      { status: 500 },
    );
  }

  return NextResponse.json({ success: true });
}
