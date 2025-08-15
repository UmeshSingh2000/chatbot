import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken'
export function middleware(req: NextRequest) {
    const token = req.cookies.get('authToken')?.value;

    if (!token) {
        return NextResponse.redirect(new URL("/", req.url));
    }

    try {
        jwt.verify(token, process.env.JWT_SECRET!);
        return NextResponse.next()
    } catch (error) {
        const res = NextResponse.redirect(new URL("/", req.url));
        res.cookies.set("authToken", "", { maxAge: 0 });
        return res;
    }
}

export const config = {
    matcher:["/chat"]
}