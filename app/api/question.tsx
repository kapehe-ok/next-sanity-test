// pages/api/question.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { generateQuestion, evaluateAnswer } from '@/lib/ai-generation';

interface RequestBody {
    topic?: string;
    question?: string;
    userAnswer?: string;
    action: 'generateQuestion' | 'evaluateAnswer'; // Specify the action in the request
}

interface ResponseData {
    question?: string;
    evaluation?: string;
    error?: string;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    if (req.method === 'POST') {
        const { action, topic, question, userAnswer } = req.body as RequestBody;

        try {
            if (action === 'generateQuestion' && topic) {
                const generatedQuestion = await generateQuestion(topic);
                res.status(200).json({ question: generatedQuestion });
            } else if (action === 'evaluateAnswer' && question && userAnswer !== undefined) {
                const evaluation = await evaluateAnswer(question, userAnswer);
                res.status(200).json({ evaluation });
            } else {
                res.status(400).json({ error: 'Invalid request parameters' });
            }
        } catch (error) {
            console.error('API operation failed:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    } else {
        // Handle other methods or return an error
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
