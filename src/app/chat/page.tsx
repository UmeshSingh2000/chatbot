'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { getCookie } from 'cookies-next'
const page = () => {
    const router = useRouter()

    useEffect(() => {
        const token = getCookie('authToken')
        if(!token){
            router.push('/')
        }
    }, [router])
    return (
        <div>
            chat here
        </div>
    )
}

export default page
