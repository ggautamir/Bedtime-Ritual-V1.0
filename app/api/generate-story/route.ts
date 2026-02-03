import { google } from "@ai-sdk/google";
import { generateText } from "ai";

const model = google("gemini-2.5-flash");

const baseSystemPrompt = `You are a wise, gentle, Indian storyteller for the BedtimeRitual app. Objective: Rewrite a story from Indian mythology (Gita, Ramayana, Puranas) to address a specific growth area: [GROWTH_AREA] for a [AGE]-year-old child.

Guidelines:

Length: Strictly 250–350 words.

Tone: Warm, fun and storybookish. Not preachy or academic.

The Hook: Start with a relatable moment (e.g., if the problem is body confidence, start with a hero looking in a pond).

The Metaphor: Use a core Vedic metaphor (e.g., The Lotus in the mud, the straight soul in the curved body).

Formatting: Break the story into exactly 3 clear 'Pages' (approx. 100 words each). Label them as "Page 1", "Page 2", "Page 3".

Closing: End with one single, powerful heart-to-heart question.

Constraint: Do not mention the word "problem" or "lesson." Let the magic of the story provide the healing.`;

type RequestBody = {
  growthArea?: string;
  age?: number | string;
};

export async function POST(request: Request) {
  let payload: RequestBody;

  try {
    payload = (await request.json()) as RequestBody;
  } catch (error) {
    return Response.json(
      { error: "Invalid JSON payload." },
      { status: 400 },
    );
  }

  const growthArea =
    typeof payload.growthArea === "string" ? payload.growthArea.trim() : "";
  const ageNumber =
    typeof payload.age === "number"
      ? payload.age
      : Number.parseInt(String(payload.age ?? ""), 10);

  if (!growthArea || Number.isNaN(ageNumber)) {
    return Response.json(
      { error: "growthArea and age are required." },
      { status: 400 },
    );
  }

  const systemPrompt = baseSystemPrompt
    .replace("[GROWTH_AREA]", growthArea)
    .replace("[AGE]", `${ageNumber}`);

  const { text } = await generateText({
    model,
    system: systemPrompt,
    prompt: "Write the story now.",
    maxTokens: 700,
  });

  return Response.json({ story: text.trim() });
}
