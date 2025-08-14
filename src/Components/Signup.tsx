import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Checkbox } from './ui/checkbox'
import { Label } from './ui/label'

const Signup = () => {
    return (
        <>
            <form className='flex flex-col space-y-4'>
                <div className='flex space-x-1'>
                    <Input className='w-full' placeholder='First Name' />
                    <Input className='w-full' placeholder='Last Name' />
                </div>
                <Input className='w-full' type='email' placeholder='Email address' />
                <Input className='w-full' type='password' placeholder='Password' />
                <Input className='w-full' type='password' placeholder='Confirm Password' />
                <div className="flex items-start gap-3">
                    <Checkbox id="terms-1" defaultChecked />
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
