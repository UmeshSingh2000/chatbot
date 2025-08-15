'use client'

import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { getCookie } from 'cookies-next'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const Page = () => {
    const router = useRouter()

    useEffect(() => {
        const token = getCookie('authToken')
        if (!token) {
            router.push('/')
        }
    }, [router])

    return (
        <div className="grid h-screen grid-cols-[260px_1fr] text-white bg-[#181818]">
            {/* Sidebar */}
            <aside className="bg-[#181818] p-4 flex flex-col">
                <h2 className="text-xl font-bold mb-6">My Chat</h2>

            </aside>

            {/* Main Chat Area */}
            <main className="flex flex-col bg-[#212121]">
                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                    <div className='flex justify-center items-center h-full'>
                        <h1 className='text-4xl'>What can I help with?</h1>
                    </div>
                </div>

                {/* Input Bar */}
                <footer className="bg-[#303030] p-3 flex space-x-3">
                    <Input
                        className="flex-1 bg-[#1e1e1e] border-none text-white focus-visible:ring-0 focus-visible:ring-offset-0"
                        placeholder="Type your message..."
                    />
                    <Button className=" cursor-pointer">Send</Button>
                </footer>
            </main>
        </div>
    )
}

export default Page
