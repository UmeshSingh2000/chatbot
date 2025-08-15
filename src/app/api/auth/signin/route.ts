import User from '@/models/userModel'
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs'
import { connectDb } from '@/lib/connection';
import jwt from 'jsonwebtoken';
export const POST = async (req: Request) => {
    try {
        await connectDb();

        const body = await req.json();

        const { email, password } = body
        if (!email || !password) {
            return new NextResponse('Missing required fields', { status: 400 })
        }
        const user = await User.findOne({ email })
        if (!user) {
            return new NextResponse('User not found', { status: 404 })
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return new NextResponse('Invalid credentials', { status: 401 })
        }

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET!,
            { expiresIn: '1h' }
        )

        const response = NextResponse.json(
            { message: 'Signin successful' },
            { status: 200 }
        );
        response.cookies.set('authToken',token,{
            httpOnly: false,
            sameSite: 'strict',
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 1000, // 1 hour
            path: '/'
        })


        return response

    } catch (error) {
        return new NextResponse('Internal Server Error', { status: 500 })
    }
}