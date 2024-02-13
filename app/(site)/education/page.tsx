import React from 'react'
import { Input } from '@/components/ui/input'

function Page() {
    return (
        <div className="flex flex-col min-h-screen justify-center items-center space-y-4 px-4 lg:px-20 mx-auto">
            <h1 className="text-2xl font-bold">What do you want to learn today?</h1>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">For example, type &apos;cars&apos;.</p>
            <Input placeholder="Type here..." type="search" />
        </div>
    )
}

export default Page
