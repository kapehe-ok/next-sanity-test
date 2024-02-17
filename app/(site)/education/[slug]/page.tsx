"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { FeedbackDialog } from '@/components/feedback-dialog';

export default function SlugPage() {
    const pathname = usePathname();
    const slug = pathname.split('/').pop() ?? '';
    const [currentQuestion, setCurrentQuestion] = useState('');
    const [userAnswer, setUserAnswer] = useState('');
    const [feedback, setFeedback] = useState('');
    const [loading, setLoading] = useState(true);
    const [interactionState, setInteractionState] = useState('answering');

    // Memoize fetchQuestion using useCallback
    const fetchQuestion = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch('/api/generate-question', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ topic: slug })
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
    }, [slug]); // slug is a dependency of fetchQuestion

    // Use fetchQuestion in useEffect without warning
    useEffect(() => {
        fetchQuestion();
    }, [fetchQuestion]); // Now it's safe to include fetchQuestion as a dependency

    const handleContinue = async () => {
        if (interactionState === 'answering') {
            // User has answered, fetch feedback
            setLoading(true);
            try {
                const response = await fetch('/api/evaluate-answer', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        question: currentQuestion,
                        userAnswer: userAnswer,
                    })
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const textResponse = await response.text();
                setFeedback(textResponse);
                setInteractionState('reviewing'); // Move to reviewing state to show feedback
            } catch (error) {
                console.error("Failed to evaluate answer:", error);
            }
            setLoading(false);
        } else if (interactionState === 'reviewing') {
            // User has reviewed feedback, fetch next question
            fetchQuestion(); // Reuse fetchQuestion function
            setInteractionState('answering'); // Reset to answering state for the next question
            setFeedback(''); // Clear feedback for the next round
            setUserAnswer(''); // Clear the previous answer
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
