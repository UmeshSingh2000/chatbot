'use client'
import React, { useState } from 'react'
import classes from '@/app/login.module.css'
import { Button } from './ui/button'

interface PropsTypes {
    value: string,
    onClick: (value: string) => void
}


const AuthButton = ({ value, onClick }: PropsTypes) => {

    return (
      <>
            <Button className={`${classes.button} ${value==='signin' ? 'border-b-2 border-black' : ''}`} onClick={() => onClick('signin')}>Signin</Button>
            <Button className={`${classes.button} ${value==='signup' ? 'border-b-2 border-black' : ''}`} onClick={() => onClick('signup')}>Signup</Button>
        </>
    )
}

export default AuthButton
