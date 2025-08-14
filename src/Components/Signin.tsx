import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

const Signin = () => {
    return (
        <>
            <form className='flex flex-col space-y-4'>
                <Input className='w-full' type='email' placeholder='Email address' />
                <Input className='w-full' placeholder='Password' />
                <p className='text-end text-sm cursor-pointer text-gray-500'>Forget Password?</p>
                <Button type='submit' className='cursor-pointer'>Sign In</Button>
                <p className='text-center text-sm text-gray-500'>Don't have an account? <span className='text-blue-500 cursor-pointer'>Sign Up</span></p>
            </form>
        </>
    )
}

export default Signin
