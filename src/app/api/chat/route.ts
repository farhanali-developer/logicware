import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are Logicware Assistant. Answer only questions about Logicware LLC, our dental billing services, claim submission, denial management, credentialing, reporting, HIPAA compliance, our contact process, or our team. Do not answer questions unrelated to Logicware and its services. If the user asks about anything outside our business, respond with: "I’m here to help with Logicware services only. For other topics, please use a different resource."`;

const OFF_TOPIC_PATTERNS = [
  /weather/i,
  /sports/i,
  /politics/i,
  /movie/i,
  /music/i,
  /recipe/i,
  /horoscope/i,
  /dating/i,
  /medical advice/i,
  /legal advice/i,
  /philosophy/i,
  /programming/i,
  /school/i,
  /homework/i,
  /travel/i,
  /news/i,
  /stock/i,
  /game/i,
  /celebrity/i,
  /fashion/i,
  /religion/i,
  /health advice/i,
];

const isOffTopic = (text: string) =>
  OFF_TOPIC_PATTERNS.some((pattern) => pattern.test(text));

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();
    if (typeof message !== "string" || !message.trim()) {
      return NextResponse.json({ error: "Invalid message" }, { status: 400 });
    }

    const sanitizedInput = message.trim();

    if (isOffTopic(sanitizedInput)) {
      return NextResponse.json({ answer: "I’m here to help with Logicware services only. For other topics, please use a different resource." });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "OpenAI API key not configured" }, { status: 500 });
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: sanitizedInput },
        ],
        temperature: 0.1,
        max_tokens: 450,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Chat API error:", errorText);
      return NextResponse.json({ error: "Failed to get answer from API" }, { status: 500 });
    }

    const data = await response.json();
    const answer = data?.choices?.[0]?.message?.content;
    if (!answer) {
      return NextResponse.json({ error: "No answer returned from API" }, { status: 500 });
    }

    return NextResponse.json({ answer });
  } catch (error) {
    console.error("Chat handler error:", error);
    return NextResponse.json({ error: "Chat service is unavailable" }, { status: 500 });
  }
}
