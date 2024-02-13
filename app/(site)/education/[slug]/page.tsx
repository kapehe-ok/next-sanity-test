"use client";
import React from 'react';
import { usePathname } from 'next/navigation';

export default function SlugPage() {
    const pathname = usePathname();
    const slug = pathname.split('/').pop();

    return (
        <div className="h-screen m-5">
            <h1>You want to learn about: {slug}</h1>
            <div>
                This is where you can add more content or components related to {slug}.
            </div>
            <div>
                Do you have any comments?
            </div>
        </div>
    );
}
