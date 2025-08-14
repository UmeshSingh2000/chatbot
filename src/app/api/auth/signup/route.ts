import { connectDb } from '@/lib/connection';
import User from '@/models/userModel'
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs'

export const POST = async (req: Request)=>{
    try {
        await connectDb();

        const body = await req.json();

        const { email, password, name } = body
        if (!email || !password || !name) {
            return new NextResponse('Missing required fields', { status: 400 })
        }
        const user = await User.findOne({ email })
        if (user) {
            return new NextResponse('User already exists', { status: 409 })
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new User({ email, password: hashedPassword, name })
        await newUser.save()

        return new NextResponse('Signup successful', { status: 201 })

    } catch (error) {
        return new NextResponse('Internal Server Error', { status: 500 })
    }
}