import React from 'react'
import Link from "next/link"
import { getPages } from '@/sanity/sanity-utils';
import { ModeToggle } from './mode-toggle';

export default async function Header() {
    const pages = await getPages();

    return (
        <div>
            <header className="flex items-center justify-between">
                <Link href="/" className="">Alvaro Peña</Link>
                <div className="flex items-center gap-5 text-sm text-gray-600">
                    {pages.map((page) => (
                        <Link key={page._id} href={`/${page.slug}`} className="hover:underline">{page.title}</Link>
                    ))}
                </div>
                <Link href="/projects">Projects</Link>
                <Link href="/essays">Essays</Link>
                <ModeToggle />
            </header>
        </div>
    )
}