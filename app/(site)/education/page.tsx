"use client";
import React, { useState, FormEvent, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation'; // Ensure correct import path
import { Input } from '@/components/ui/input';

const Page: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const router = useRouter();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push(`/education/${encodeURIComponent(inputValue)}`);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    return (
        <div className="flex flex-col min-h-screen justify-center items-center space-y-4 px-4 lg:px-20 mx-auto">
            <h1 className="text-2xl font-bold">What do you want to learn today?</h1>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">For example, type &apos;cars&apos;.</p>
            <form onSubmit={handleSubmit} className="w-full max-w-md">
                <Input
                    value={inputValue}
                    onChange={handleChange}
                    placeholder="Type here..."
                    type="search"
                    className="mb-2" // Assuming you can pass className to style your Input
                />
                <button type="submit" className="hidden">Submit</button> {/* Invisible submit button */}
            </form>
        </div>
    );
}

export default Page;
