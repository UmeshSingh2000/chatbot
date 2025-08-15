// import { GoogleGenAI } from '@google/genai'
import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);


export const POST = async (req: Request) => {
    try {
        const { prompt } = await req.json();
        const model = ai.getGenerativeModel({ model: "gemini-2.5-flash" });

        const result = await model.generateContent(prompt)
        const response = result.response;
        const text = response.text();

        return new NextResponse(JSON.stringify({ text }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error generating content:", error);
        return new NextResponse(JSON.stringify({ error: "Failed to generate content" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}