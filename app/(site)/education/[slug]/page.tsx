"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { generateQuestion, evaluateAnswer } from '@/lib/ai-generation';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { FeedbackDialog } from '@/components/feedback-dialog';

export default function SlugPage() {
    const pathname = usePathname();
    const slug = pathname.split('/').pop() ?? '';
    const [currentQuestion, setCurrentQuestion] = useState<string>('');
    const [nextQuestion, setNextQuestion] = useState<string>('');
    const [userAnswer, setUserAnswer] = useState<string>('');
    const [feedback, setFeedback] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
    const [interactionState, setInteractionState] = useState<'answering' | 'viewingFeedback'>('answering');
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [userFeedback, setUserFeedback] = useState<string>('');

    const loadQuestions = useCallback(async () => {
        const question1 = await generateQuestion(slug) || '';
        const question2 = await generateQuestion(slug) || '';
        setCurrentQuestion(question1);
        setNextQuestion(question2);
        setLoading(false);
    }, [slug]);

    useEffect(() => {
        if (slug) loadQuestions();
    }, [slug, loadQuestions]);

    const handleSubmitAnswer = async () => {
        setLoading(true);
        const evaluation = await evaluateAnswer(currentQuestion, userAnswer);
        setFeedback(evaluation || '');
        setUserAnswer('');
        setLoading(false);
        setInteractionState('viewingFeedback');
    };

    const handleContinue = async () => {
        if (interactionState === 'viewingFeedback') {
            setCurrentQuestion(nextQuestion);
            setFeedback('');
            setUserAnswer('');
            setInteractionState('answering');
            const newNextQuestion = await generateQuestion(slug);
            setNextQuestion(newNextQuestion || '');
        } else {
            await handleSubmitAnswer();
        }
    };

    const handleOpenDialog = () => {
        setModalVisible(true);
    };

    const handleCloseDialog = () => {
        setModalVisible(false);
    };

    const handleSubmitFeedback = () => {
        console.log(userFeedback);
        setUserFeedback('');
        handleCloseDialog();
    };


    if (loading && !currentQuestion) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="visually-hidden">Loading...</span>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-5">
            <Button variant={'link'}>
                <Link href="/education" className='flex flex-row items-center justify-center gap-1'>
                    <ArrowLeft size={16} />
                    <p className="text-md">Return</p>
                </Link>

            </Button>
            <p className='text-xl'>You are currently learning about <strong>{slug}</strong>.</p>

            <div className="text-lg mt-5 text-center">{currentQuestion || 'Loading question...'}</div>
            <div className="my-5 space-x-4">
                {['A', 'B', 'C', 'D'].map((option) => (
                    <Button
                        key={option}
                        onClick={() => setUserAnswer(option)}
                        variant={'secondary'}
                        className='w-20'
                    >
                        {option}
                    </Button>
                ))}
            </div>
            {feedback && <div className="text-blue-500 mb-5 text-center">{feedback}</div>}
            <Button
                onClick={handleContinue}
                disabled={(interactionState === 'answering' && !userAnswer) || loading}
                className='w-40'
            >
                Continue
            </Button>
            <FeedbackDialog />
        </div>
    );
}