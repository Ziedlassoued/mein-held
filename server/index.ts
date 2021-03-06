import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import path from 'path';
import { connectDatabase, getUserCollection } from './utils/database';
import cookieParser from 'cookie-parser';

const { PORT = 3001 } = process.env;
const app = express();
app.use(cookieParser());

if (!process.env.MONGODB_URI) {
  throw new Error('No MongoDB URI dotenv variable');
}

app.get('/api/hello', (_request, response) => {
  response.json({ message: 'Hello from server' });
});

// Serve app production bundle
app.use(express.static('dist/app'));

// Middleware that parses json and looks at requests where the Content-Type header matches the type option.
app.use(express.json());

// Get all Users from MongoDB
app.get('/api/users', async (_request, response) => {
  const userDocuments = await getUserCollection().find().toArray();
  response.status(200).send(userDocuments);
});

// Get Users by category from Mongodb
app.get('/api/users/:category', async (request, response) => {
  const category = request.params.category;
  const existingUser = await getUserCollection().find({
    category: category,
  });
  if (existingUser) {
    response.status(200).send(existingUser);
  } else {
    response.status(404).send('Zur Zeit gibt es keine Einträge!');
  }
});

// Login user
app.post('/api/login', async (request, response) => {
  const logedUser = request.body;
  const userCollection = getUserCollection();

  const existingUser = await userCollection.findOne({
    companyName: logedUser.companyName,
    email: logedUser.email,
    password: logedUser.password,
  });
  if (existingUser) {
    response.setHeader('Set-Cookie', `name=${logedUser.companyName}`);
    response.status(200).send('login successful');
  } else {
    response
      .status(401)
      .send('Login failed. Check if email and password are correct');
  }
});

app.get('/api/me', async (request, response) => {
  const companyName = request.cookies.companyName;
  const usersCollection = getUserCollection();
  const loggedUser = await usersCollection.findOne({
    companyName: companyName,
  });

  if (loggedUser) {
    response.status(200).send(loggedUser);
  } else {
    response.status(404).send('User not found');
  }
});

//Post new User to MongoDB
app.post('/api/users', async (request, response) => {
  const newUser = request.body;
  if (
    typeof newUser.companyName !== 'string' ||
    typeof newUser.owner !== 'string' ||
    typeof newUser.email !== 'string' ||
    typeof newUser.phonNumber !== 'string'
  ) {
    response.status(400).send('Bitte Pflichtfelder ausfüllen!');
    return;
  }
  const userCollection = getUserCollection();
  const existingUser = await userCollection.findOne({
    email: newUser.email,
  });

  if (!existingUser) {
    const insertedUser = await userCollection.insertOne(newUser);
    response.send(
      `${newUser.email} wurde hinzugefügt. Ihre ID lautet: ${insertedUser.insertedId}`
    );
  } else {
    response.status(409).send('bereit registriert');
  }
});

// Handle client routing, return all requests to the app
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'app/index.html'));
});

connectDatabase(process.env.MONGODB_URI).then(() =>
  app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
  })
);
