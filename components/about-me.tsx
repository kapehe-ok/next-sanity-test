import React from 'react'

export default function AboutMe() {
    return (
        <section className="py-6 lg:py-12" id="about">
            <div className="container px-4 md:px-6">
                <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-12">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none">About Me</h2>
                            <p className="">
                                I&apos;m a software engineer with a love for clean code and elegant solutions. My journey in
                                tech started with a curiosity about how things work, and it has led me to become a dedicated
                                developer who is always seeking to learn and grow.
                            </p>
                        </div>
                        <div className="grid gap-1">

                            <p className="text-sm">
                                <>Languages</> JavaScript, Python, C++, Swift
                            </p>

                            <p className="text-sm">
                                Frameworks: React, FastAPI
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


