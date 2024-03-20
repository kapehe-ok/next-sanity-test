import React from 'react'
import { Button } from './ui/button'
import { ArrowRightIcon } from '@radix-ui/react-icons'

export default function AboutMe() {
    return (
        <section className="py-6 lg:py-12" id="about">
            <div className="container px-4 md:px-6">
                <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-12">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-6xl/none">Machine Learning Engineer</h2>
                            <p className="">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </div>
                        <div>
                            <p>More than 500 hours coding!</p>
                        </div>
                        <Button>
                            Let&apos;s Talk
                            <ArrowRightIcon />
                        </Button>
                    </div>
                    <div>
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/UOPsH4yJqps?si=56h8LWQCzWOquEQe"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}


