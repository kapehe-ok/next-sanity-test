"use client"

import React, { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'

export default function ContactForm() {
    const { toast } = useToast()
    // State for form fields
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    // Update form state
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName: formData.name, // Assuming firstName is the correct field
                    email: formData.email,
                    message: formData.message,
                }),
            });

            toast({
                title: "Uh oh! Something went wrong.",
                description: "There was a problem with your request.",
            })


            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Handle success (e.g., clear form, show message)
            console.log('Email sent successfully');
        } catch (error) {
            console.error('Failed to send email:', error);
        }
    };

    return (
        <section className="py-6 lg:py-12" id="contact">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Have a question or want to connect? Fill out the form below and I&apos;ll get back to you as soon as
                            possible.
                        </p>
                    </div>
                </div>
                <div className="mx-auto max-w-[600px] space-y-8">
                    <form className="grid gap-4" onSubmit={handleSubmit}>
                        <div className="grid gap-2">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" name="name" required onChange={handleChange} value={formData.name} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" name="email" required type="email" onChange={handleChange} value={formData.email} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="message">Message</Label>
                            <Textarea id="message" name="message" required onChange={handleChange} value={formData.message} />
                        </div>
                        <Button type="submit">Submit</Button>
                    </form>
                </div>
            </div>
        </section>
    )
}
