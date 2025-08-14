'use client'
import React from 'react'
import { Switch } from './ui/switch'
import { Label } from './ui/label'

const Navbar = () => {
    return (
        <nav className='flex justify-between px-10 sticky top-0 pt-3'>
            <h1 className='text-xl'>Chat Bot</h1>
            <div className='flex items-center space-x-1'>
                <Label htmlFor="theme">Light</Label>
                <Switch id="theme" />
                <Label htmlFor="theme">Dark</Label>
            </div>
        </nav>
    )
}

export default Navbar
