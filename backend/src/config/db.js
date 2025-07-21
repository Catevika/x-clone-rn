import mongoose from 'mongoose';
import {ENV} from './env.js';

export const connectDB = async () => {
	if (!ENV.MONGODB_URI) {
		throw new Error('MongoDB URI is not defined');
	}

	try {
		await mongoose.connect(ENV.MONGODB_URI);
		console.log('✅ Connected to MongoDB successfully');
	} catch (error) {
		console.error('❌ Error connecting to MongoDB:', error);
		process.exit(1);
	}
};
