import {clerkMiddleware} from '@clerk/express';
import cors from 'cors';
import express from 'express';
import {connectDB} from './config/db.js';
import {ENV} from './config/env.js';
import userRoutes from './routes/user.route.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

app.get('/', (res) => res.send('Hello from Server'));

app.use('/api/users', userRoutes);

const startServer = async () => {
	try {
		await connectDB();
		app.listen(ENV.PORT, () =>
			console.log('⭐ Server is up and running on port: ', ENV.PORT),
		);
	} catch (error) {
		console.error('❌ Failed to start the server: ', error);
		process.exit(1);
	}
};

startServer();
