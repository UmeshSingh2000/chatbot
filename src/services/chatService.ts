import { api } from "@/lib/axios";

export const generateChatResponse = async (prompt: string) => {
    const response = await api.post('/generate', { prompt });

    if (response.status !== 200) {
        throw new Error('Failed to generate chat response');
    }

    // console.log(response);
    return response.data.text
};