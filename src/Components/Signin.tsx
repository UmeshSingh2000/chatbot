'use client'

import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { signin } from '@/services/authService';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

interface userDataTypes {
    email: string;
    password: string;
}

const Signin = () => {
    const router = useRouter()
    const [userData, setUserData] = useState<userDataTypes>({
        email: '',
        password: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await signin(userData)
            if (response?.status === 200) {
                toast.success('Sign in successful!')
                setTimeout(() => {
                    router.push('/chat');
                }, 100);
            }
        } catch (err) {
            if (err && typeof err === "object" && "response" in err) {
                toast.error((err as any).response?.data || "An error occurred during signin");
            } else {
                toast.error(err instanceof Error ? err.message : "An error occurred during signin");
            }

        }
    }
    return (
        <>
            <form className='flex flex-col space-y-4' onSubmit={handleSubmit}>
                <Input onChange={handleInputChange} className='w-full' name='email' type='email' placeholder='Email address' />
                <Input onChange={handleInputChange} className='w-full' name='password' type='password' placeholder='Password' />
                <p className='text-end text-sm cursor-pointer text-gray-500'>Forget Password?</p>
                <Button type='submit' className='cursor-pointer'>Sign In</Button>
                <p className='text-center text-sm text-gray-500'>Don't have an account? <span className='text-blue-500 cursor-pointer'>Sign Up</span></p>
            </form>
        </>
    )
}

export default Signin
