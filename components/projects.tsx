import React from 'react';
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Card, CardTitle, CardDescription, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, Code, FilterIcon } from 'lucide-react';
import Link from 'next/link';

// ProjectCard component
function ProjectCard({ title, description, onViewClick, commitMessage, lastUpdated, branchName }) {
    return (
        <Card>
            <CardHeader className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-center gap-4">
                    <Code className="w-6 h-6" />
                    <div>
                        <CardTitle>{title}</CardTitle>
                        <CardDescription>{description}</CardDescription>
                    </div>
                </div>
                <Button className="rounded-full ml-auto" size="icon" variant="ghost">
                    <ArrowRightIcon className="w-4 h-4" />
                    <span className="sr-only">View project</span>
                </Button>
            </CardHeader>
            <CardContent className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                        <GithubIcon className="w-4 h-4" />
                        <span>{lastUpdated}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <GitBranchIcon className="w-4 h-4" />
                        <span>{branchName}</span>
                    </div>
                </div>
                <Link href={''}>Source</Link>
            </CardContent>
        </Card>
    );
}


export default function Projects() {
    // Example data for projects, you might fetch this data from an API or define it elsewhere
    const projects = [
        { title: "famtalk", description: "A blog using Next.js, MDX, and Tailwind CSS", lastUpdated: "3h ago", branchName: "main", commitMessage: "feat: initial commit" },
        { title: "managent", description: "A blog using Next.js, MDX, and Tailwind CSS", lastUpdated: "3h ago", branchName: "main", commitMessage: "feat: initial commit" },
        { title: "bhuma ai", description: "A blog using Next.js, MDX, and Tailwind CSS", lastUpdated: "3h ago", branchName: "main", commitMessage: "feat: initial commit" },
        { title: "dudda", description: "A blog using Next.js, MDX, and Tailwind CSS", lastUpdated: "3h ago", branchName: "main", commitMessage: "feat: initial commit" },


    ];

    return (
        <section className="w-full py-6 md:py-12 xl:py-16">
            <div className="container grid items-start gap-4 px-4 text-center md:gap-6 md:px-6 lg:gap-10">
                {/* Section Title */}
                <div className="space-y-3">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
                    <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        Check out some of my recent work.
                    </p>
                </div>
                {/* Projects Filter */}
                <div className="flex flex-col min-[400px]:flex-row gap-4">
                    <div className="w-full flex items-center gap-2 md:gap-4">
                        <Label className="min-w-[100px]" htmlFor="filter">
                            <FilterIcon />
                            Filter
                        </Label>
                        <Select id="filter" placeholder="Technology">
                            <option>Web</option>
                            <option>Mobile</option>
                            <option>ML/AI</option>
                        </Select>
                    </div>
                </div>
                {/* Projects Grid */}
                <div className="grid gap-6 md:grid-cols-2 max-w-6xl w-full mx-auto">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            lastUpdated={project.lastUpdated}
                            branchName={project.branchName}
                            commitMessage={project.commitMessage}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function CodeIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
        </svg>
    )
}


function GitBranchIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="6" x2="6" y1="3" y2="15" />
            <circle cx="18" cy="6" r="3" />
            <circle cx="6" cy="18" r="3" />
            <path d="M18 9a9 9 0 0 1-9 9" />
        </svg>
    )
}


function GithubIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
    )
}


function PlusIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
        </svg>
    )
}

function UsersIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    )
}