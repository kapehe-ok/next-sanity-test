import OpenAI from 'openai'

const openai = new OpenAI({
    apiKey: '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'
});

export const generateQuestion = async (topic: string) => {
    try {
        const completion = await openai.chat.completions.create({
            messages: [
                { "role": "system", "content": "You are a helpful question and answer generator. Never display the answer. Only generate one question and show the multiple options, but don't display the correct answer." },
                { "role": "user", "content": `Generate a quiz question about ${topic}. Make sure each question is different from the previous one.` }
            ],
            model: "gpt-4-1106-preview"
        });
        console.log(completion.choices[0])
        return completion.choices[0].message.content
    } catch (error) {
        console.error("Error generating question:", error)
        return null;
    }

}

export const evaluateAnswer = async (question: string, userAnswer: string) => {
    try {
        const completion = await openai.chat.completions.create({
            messages: [
                { "role": 'system', "content": 'You are responsible of evaluating if this response is correct.' },
                { "role": "user", "content": `Question: ${question}\nAnswer: ${userAnswer}\n` }
            ],
            model: 'gpt-4-1106-preview'
        })

        return completion.choices[0].message.content
    } catch (error) {
        console.error('Error evaluating answer:', error);
        return "Error evaluating answer";
    }
};
