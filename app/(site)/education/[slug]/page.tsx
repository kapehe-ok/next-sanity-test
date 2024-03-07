"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { FeedbackDialog } from '@/components/feedback-dialog';

export default function Page() {
    const pathname = usePathname();
    const slug = decodeURIComponent(pathname.split('/').pop() ?? '');
    const [currentQuestion, setCurrentQuestion] = useState('');
    const [userAnswer, setUserAnswer] = useState('');
    const [feedback, setFeedback] = useState('');
    const [loading, setLoading] = useState(true);
    const [interactionState, setInteractionState] = useState('answering');
    const [progress, setProgress] = useState(0);

    // Memoize fetchQuestion using useCallback
    const fetchQuestion = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch('https://api.alvropena.com/generate-question/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    messages: [
                        {
                            role: "system",
                            content: `Generate a compelling quiz question about ${slug}. You are a creative and helpful question and answer generator. Create a single multiple-choice question about ${slug} that's engaging and interesting for those interested in learning about the topic. Ensure the question format is concise, clear, and entertaining. Provide four options (A, B, C, D) without revealing the correct answer. Aim for questions that provoke thought and interest. Do not include "" in the next nor /n for indentation, retrieve it as a sentence with the options.`,
                        },
                        {
                            role: "user",
                            content: `Generate a compelling quiz question about ${slug}.`,
                        },
                    ],
                })
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const textResponse = await response.text();
            setCurrentQuestion(textResponse);
        } catch (error) {
            console.error("Failed to fetch question:", error);
        }
        setLoading(false);
    }, [slug]);

    // Use fetchQuestion in useEffect without warning
    useEffect(() => {
        fetchQuestion();
    }, [fetchQuestion]);

    const handleContinue = async () => {
        if (interactionState === 'answering') {
            // User has answered, fetch feedback
            setLoading(true);
            try {
                const response = await fetch('https://api.alvropena.com/evaluate-answer/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        messages: [
                            {
                                role: "system",
                                content: `Question: ${currentQuestion}\nAnswer: ${userAnswer}. You are an evaluator. Start your feedback with "Correct!" or "Wrong", followed by a short motivational sentence. If the answer is incorrect, briefly  why.`,
                            },
                            {
                                role: "user",
                                content: `Question: ${currentQuestion}\nAnswer: ${userAnswer}`,
                            },
                        ],
                    })
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const textResponse = await response.text();
                setFeedback(textResponse);
                setInteractionState('reviewing');
            } catch (error) {
                console.error("Failed to evaluate answer:", error);
            }
            setLoading(false);
        } else if (interactionState === 'reviewing') {
            // User has reviewed feedback, fetch next question
            fetchQuestion();
            setInteractionState('answering');
            setFeedback('');
            setUserAnswer('');
            setProgress((prevProgress) => Math.min(100, prevProgress + 10));
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="visually-hidden">Loading...</span>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-5">
            <Progress value={progress} className='w-1/4 mx-auto mb-5' />
            <Button variant="link">
                <Link href="/education" className="flex flex-row items-center justify-center gap-1">
                    <ArrowLeft size={16} />
                    <p className="text-md">Return</p>
                </Link>
            </Button>



            <p className="text-xl">You are currently learning <strong>{slug}</strong>.</p>
            <div className="text-lg mt-5 text-center">{currentQuestion || 'Loading question...'}</div>

            <div className="my-5 space-x-4">
                {['A', 'B', 'C', 'D'].map((option) => (
                    <Button
                        key={option}
                        onClick={() => setUserAnswer(option)}
                        variant="secondary"
                        className={`w-20 ${userAnswer === option ? 'bg-black text-white' : 'bg-gray-200 text-black'}`}
                    >
                        {option}
                    </Button>
                ))}
            </div>

            {feedback && <div className="text-blue-500 mb-5 text-center">{feedback}</div>}
            <Button onClick={handleContinue} disabled={interactionState === 'answering' && !userAnswer} className="w-40">
                Continue
            </Button>
            <FeedbackDialog />
        </div>
    );
}
