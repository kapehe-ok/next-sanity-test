import React from 'react'
import Link from 'next/link'
import { ModeToggle } from './mode-toggle'

const Header = () => {
    return (
        <div>
            <header className="flex items-center justify-between">
                <Link href="/" className="font-semibold text-2xl">Alvaro Peña</Link>
                <div className='flex flex-row gap-6 items-center'>
                    <Link href="/projects">Projects</Link>
                    <Link href="/essays">Essays</Link>
                    <a href='https://www.x.com/alvropenaa' className='text-2xl' target='_blank' rel='noopener noreferrer'>𝕏</a>
                    <ModeToggle />
                </div>
            </header>
        </div>
    )
}

export default Header