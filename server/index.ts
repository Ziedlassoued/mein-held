import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import router from './utils/router';
import path from 'path';
import { connectDatabase } from './utils/database';

if (!process.env.MONGODB_URI) {
  throw new Error('No MongoDB URI dotenv variable');
}

const { PORT = 3001 } = process.env;

const app = express();

// Middleware that parses json and looks at requests where the Content-Type header matches the type option.
app.use(express.json());

// Serve API requests from the router
app.use('/api', router);

// Serve storybook production bundle
app.use('/storybook', express.static('dist/storybook'));

// Serve app production bundle
app.use(express.static('dist/app'));

// Handle client routing, return all requests to the app
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'app/index.html'));
});

connectDatabase(process.env.MONGODB_URI).then(() =>
  app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
  })
);
