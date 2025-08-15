'use client'
import React, { useEffect, useState } from 'react'

import { Checkbox } from './ui/checkbox'
import { Label } from './ui/label'
import { signup } from '@/services/authService'
import toast from 'react-hot-toast'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"


interface PropsTypes {
    onSuccess: (value: string) => void
}

const Signup = ({ onSuccess }: PropsTypes) => {
    const [userData, setUserData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        isChecked: true
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    }

    const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res = await signup(userData);
            if (res?.status === 201) {
                toast.success("Signup successful!");
                onSuccess("signin");
            }
        }
        catch (err) {
            toast.error(err instanceof Error ? err.message : "An error occurred during signup");
            console.error("Error signing up:", err)
        }
    }


    return (
        <>
            <form onSubmit={handleSignup} className='flex flex-col space-y-4'>
                <div className='flex space-x-1'>
                    <Input onChange={handleInputChange} name='firstName' className='w-full' placeholder='First Name' />
                    <Input onChange={handleInputChange} name='lastName' className='w-full' placeholder='Last Name' />
                </div>
                <Input onChange={handleInputChange} name='email' className='w-full' type='email' placeholder='Email address' />
                <Input onChange={handleInputChange} name='password' className='w-full' type='password' placeholder='Password' />
                <Input onChange={handleInputChange} name='confirmPassword' className='w-full' type='password' placeholder='Confirm Password' />
                <div className="flex items-start gap-3">
                    <Checkbox id="terms-1" defaultChecked name='isChecked' onClick={() => setUserData({ ...userData, isChecked: !userData.isChecked })} />
                    <div className="grid gap-2">
                        <Label htmlFor="terms-1">Accept terms and conditions</Label>
                        <p className="text-muted-foreground text-sm">
                            By clicking this checkbox, you agree to the terms and conditions.
                        </p>
                    </div>
                </div>
                <Button type='submit' className='cursor-pointer'>Sign Up</Button>
            </form>
        </>
    )
}

export default Signup
