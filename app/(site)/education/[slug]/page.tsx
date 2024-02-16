"use client";
import React, { useState, useEffect } from 'react';
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
    {/*
    // Fetch the question from your API
    const fetchQuestion = async () => {
        setLoading(true);
        const response = await fetch('/api/question', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ action: 'generateQuestion', topic: slug }),
        });
        const data = await response.json();
        setCurrentQuestion(data.question || '');
        setLoading(false);
    };

    useEffect(() => {
        if (slug) {
            fetchQuestion();
        }
    }, [slug]);

    // Submit the answer to your API for evaluation
    const handleSubmitAnswer = async () => {
        setLoading(true);
        const response = await fetch('/api/question', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ action: 'evaluateAnswer', question: currentQuestion, userAnswer }),
        });
        const data = await response.json();
        setFeedback(data.evaluation || '');
        setUserAnswer('');
        setInteractionState('viewingFeedback');
        setLoading(false);
    };

    const handleContinue = async () => {
        if (interactionState === 'viewingFeedback') {
            setLoading(true);
            await fetchQuestion();
        } else {
            await handleSubmitAnswer();
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="visually-hidden">Loading...</span>
            </div>
        );
    }
*/}
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-5">
            <Button variant="link">
                <Link href="/education" passHref className="flex flex-row items-center justify-center gap-1">
                    <ArrowLeft size={16} />
                    <p className="text-md">Return</p>
                </Link>
            </Button>
            <p className="text-xl">You are currently learning about <strong>{slug}</strong>.</p>
            {/*
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
                */}
            {feedback && <div className="text-blue-500 mb-5 text-center">{feedback}</div>}
            <Button onClick={() => { }} disabled={interactionState === 'answering' && !userAnswer} className="w-40">
                Continue
            </Button>
            <FeedbackDialog />
        </div>
    );
}
