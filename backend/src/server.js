import { clerkMiddleware } from '@clerk/express';
import cors from 'cors';
import express from 'express';
import { connectDB } from './config/db.js';
import { ENV } from './config/env.js';
import commentRoutes from './routes/comment.route.js';
import postRoutes from './routes/post.route.js';
import userRoutes from './routes/user.route.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

app.get('/', (res) => res.send('Hello from Server'));

app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);

app.use((err, res, next) => {
	console.error('❌ Unhandled error: ', err);
	res.status(500).json({error: err.message || 'Internal Server Error'});
	next();
});

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
