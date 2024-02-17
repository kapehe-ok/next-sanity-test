import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const runtime = "edge";

export async function POST(req) {
  try {
    const { topic } = req.body;

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      stream: true,
      messages: [
        {
          role: "system",
          content: `Generate a compelling quiz question about ${topic}. You are a creative and helpful question and answer generator. Create a single multiple-choice question about ${topic} that's engaging and interesting for those interested in learning about the topic. Ensure the question format is concise, clear, and entertaining. Provide four options (A, B, C, D) without revealing the correct answer. Aim for questions that provoke thought and interest.`,
        },
        {
          role: "user",
          content: `Generate a compelling quiz question about ${topic}.`,
        },
      ],
    });

    const stream = OpenAIStream(response);

    return new StreamingTextResponse(stream);
  } catch (error) {
    console.error(error);
    throw error;
  }
}
