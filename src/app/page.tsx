//login page
'use client'
import AuthButton from '@/Components/AuthButton'
import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import Signin from '@/Components/Signin';
import Signup from '@/Components/Signup';
import React, { useEffect, useState } from 'react'

const page = () => {
  const [activePage, setActivePage] = useState('signin');

  return (
    <div>
      <Navbar />
      <main className='flex flex-col justify-center items-center h-screen'>
        <div className=''>
          <header className='mb-8 flex flex-col items-center'>
            <h1 className='font-bold text-4xl text-center'>{activePage === 'signin' ? 'Welcome back!' : 'Create an account'}</h1>
            <p className='text-md text-gray-400 text-center'>{activePage === 'signin' ? 'Sign in to your account' : 'Sign up for a new account'}</p>
            <div className='flex '>
              <AuthButton value={activePage} onClick={setActivePage} />
            </div>
          </header>
          <section className=''>
            {activePage === 'signin' ? <Signin /> : <Signup onSuccess={setActivePage} />}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default page
