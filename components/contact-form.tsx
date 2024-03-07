import React from 'react'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function ContactForm() {
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
                    <form className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" required />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" required type="email" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="message">Message</Label>
                            <Textarea id="message" required />
                        </div>
                        <Button type="submit">Submit</Button>
                    </form>
                </div>
            </div>
        </section>
    )
}
