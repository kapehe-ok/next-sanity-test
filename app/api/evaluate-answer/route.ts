import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const runtime = "edge";

export async function POST(req: Request) {
  const { question, userAnswer } = await req.json();
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: [
      {
        role: "system",
        content:
          'You are an evaluator. Start your feedback with "Correct!" or "Wrong", followed by a short motivational sentence. If the answer is incorrect, briefly  why.',
      },
      { role: "user", content: `Question: ${question}\nAnswer: ${userAnswer}` },
    ],
  });

  const stream = OpenAIStream(response);

  return new StreamingTextResponse(stream);
}
