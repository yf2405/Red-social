import mongoose from 'mongoose';

let isConnected = false;

const connectWithRetry = async (retries = 5, delay = 3000) => {
    while (retries > 0) {
        try {
            await mongoose.connect(process.env.MONGODB_URL!);
            isConnected = true;
            console.log('Connected to MongoDB');
            return;
        } catch (error) {
            console.error('Error connecting to MongoDB, retrying...', error);
            retries--;
            if (retries === 0) throw error;
            await new Promise(res => setTimeout(res, delay));
        }
    }
};

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (!process.env.MONGODB_URL) {
        console.log('MONGODB_URL NOT FOUND');
        return;
    }
    if (isConnected) {
        console.log('Already connected to MongoDB');
        return;
    }

    await connectWithRetry();
};