import mongoose from "mongoose";
const uri = process.env.MONGO_URI as string
let isConnected = false
export const connectDb = async () => {
    try {
        if (isConnected) {
            console.log('MongoDB is already connected');
            return;
        } else {
            await mongoose.connect(uri);
            isConnected = true
            console.log('MongoDB connected');
        }
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
}