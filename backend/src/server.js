import express from 'express';
import {connectDB} from './config/db.js';
import {ENV} from './config/env.js';

const app = express();

app.get('/', (req, res) => res.send('Hello from Server'));

const startServer = async () => {
	try {
		await connectDB();
		app.listen(ENV.PORT, () =>
			console.log('⭐ Server is up and running on port: ', ENV.PORT),
		);
	} catch (error) {
		console.error('❌ Failed to start the server:', error);
		process.exit(1);
	}
};

startServer();
