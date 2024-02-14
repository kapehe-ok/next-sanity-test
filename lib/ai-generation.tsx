import OpenAI from 'openai'

const openai = new OpenAI();

export const generateQuestion = async (topic: string) => {
    try {
        const completion = await openai.chat.completions.create({
            messages: [
                { "role": "system", "content": "You are a creative and helpful question and answer generator. Create a single multiple-choice question on a given topic that's engaging and interesting for those interested in the topic. Ensure the question format is concise and clear. Provide four options (A, B, C, D) without revealing the correct answer. Aim for questions that provoke thought and interest." },
                { "role": "user", "content": `Generate a compelling quiz question about ${topic}.` }
            ],
            model: "gpt-4-1106-preview"
        });
        console.log(completion.choices[0].message.content);
        return completion.choices[0].message.content;
    } catch (error) {
        console.error("Error generating question:", error);
        return null;
    }
};

export const evaluateAnswer = async (question: string, userAnswer: string) => {
    try {
        const completion = await openai.chat.completions.create({
            messages: [
                { "role": 'system', "content": 'You are an evaluator. Start your feedback with "Correct!" or "Wrong", followed by a short motivational sentence. If the answer is incorrect, briefly  why.' },
                { "role": "user", "content": `Question: ${question}\nAnswer: ${userAnswer}` }
            ],
            model: 'gpt-4-1106-preview'
        });

        return completion.choices[0].message.content;
    } catch (error) {
        console.error('Error evaluating answer:', error);
        return "Error evaluating answer";
    }
};
