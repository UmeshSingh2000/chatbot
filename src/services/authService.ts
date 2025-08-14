import { api } from "@/lib/axios"

interface userData {
    email: string,
    password: string,
    confirmPassword: string,
    firstName: string,
    lastName: string,
    isChecked: boolean
}

export const signup = async (userdata: userData) => {
    try {
        const { email, password, confirmPassword, firstName, lastName, isChecked } = userdata

        if (!email.trim() || !password.trim() || !firstName.trim() || !lastName.trim()) {
            throw new Error("All fields are required")
        }

        if (password !== confirmPassword) {
            throw new Error("Passwords do not match")
        }

        if (!isChecked) {
            throw new Error("Please agree to the terms and conditions")
        }

        const data = {
            name: firstName + ' ' + lastName,
            email,
            password
        }

        const response = await api.post('/auth/signup', data)
        if (response.status === 201) {
            return {
                status: response.status,
                data: response?.data?.user
            }
        }
    } catch (error) {
        console.error("Error signing up:", error)
        throw error
    }
}