import express from 'express';
import {connectDB} from './config/db.js';
import {ENV} from './config/env.js';

const app = express();

connectDB();

app.get('/', (req, res) => res.send('Hello from Server'));

app.listen(ENV.PORT, () =>
	console.log('⭐ Server is up and running on port: ', ENV.PORT),
);
