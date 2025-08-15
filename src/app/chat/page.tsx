'use client'

import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { getCookie } from 'cookies-next'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { generateChatResponse } from '@/services/chatService'
import Markdown from 'react-markdown'

type Message = {
    role: 'user' | 'ai',
    text: string
}

const Page = () => {
    const router = useRouter()
    const [prompt, setPrompt] = useState<string>('')
    const [chats, setChats] = useState<Message[]>([])
    const [responseLoading,setResponseLoading] = useState<boolean>(false)

    useEffect(() => {
        const token = getCookie('authToken')
        if (!token) {
            router.push('/')
        }
    }, [router])

    const handleSend = async () => {
        if (!prompt.trim()) return;

        setChats((prev) => [...prev, { role: 'user', text: prompt }])
        const currentPrompt = prompt
        setPrompt('')
        setResponseLoading(true)
        try {
            const response = await generateChatResponse(currentPrompt)
            setChats((prev) => [...prev, { role: 'ai', text: response }])
        } catch (error) {
            console.error('Error sending message:', error)
        }
        finally {
            setResponseLoading(false)
        }
    }

    return (
        <div className="grid h-screen grid-cols-[260px_1fr] text-white bg-[#181818]">
            {/* Sidebar */}
            <aside className="bg-[#181818] p-4 flex flex-col border-r sticky top-0 border-gray-800">
                <h2 className="text-xl font-bold mb-6">My Chat</h2>
            </aside>

            {/* Main Chat Area */}
            <main className="flex flex-col bg-[#212121]">
                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto p-6 flex flex-col space-y-4">
                    {chats.length === 0 ? (
                        <div className="flex justify-center items-center h-full">
                            <h1 className="text-4xl text-gray-400">What can I help with?</h1>
                        </div>
                    ) : (
                        chats.map((msg, index) => (
                            <div
                                key={index}
                                className={`p-3 rounded-2xl inline-block break-words shadow-md ${
                                    msg.role === 'user'
                                        ? 'bg-blue-600 text-white self-end ml-auto rounded-br-none'
                                        : 'bg-gray-700 text-white self-start mr-auto rounded-bl-none'
                                }`}
                                style={{ maxWidth: '70%' }}
                            >
                                <Markdown>{msg.text}</Markdown>
                            </div>
                        ))
                    )}
                    {responseLoading && (
                        <div className="p-3 rounded-2xl bg-gray-700 text-white self-start mr-auto">
                            <Markdown>Generating response...</Markdown>
                        </div>
                    )}
                </div>

                {/* Input Bar */}
                <footer className="bg-[#303030] p-3 flex sticky bottom-0 space-x-3 border-t border-gray-800">
                    <Input
                        className="flex-1 bg-[#1e1e1e] border-none text-white focus-visible:ring-0 focus-visible:ring-offset-0"
                        placeholder="Type your message..."
                        onChange={(e) => setPrompt(e.target.value)}
                        value={prompt}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    />
                    <Button onClick={handleSend} className="cursor-pointer">
                        Send
                    </Button>
                </footer>
            </main>
        </div>
    )
}

export default Page
