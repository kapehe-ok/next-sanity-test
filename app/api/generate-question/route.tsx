import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      stream: true,
      messages,
    });

    const stream = OpenAIStream(response);
    return new StreamingTextResponse(stream);
  } catch (error) {
    console.error(error);
    throw error;
  }
}
