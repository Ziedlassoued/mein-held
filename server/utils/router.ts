import express from 'express';
import { getUserCollection } from './database';

const router = express.Router();

router.get('/users/:category', async (request, response) => {
  const category = request.params.category;
  const existingUser = await getUserCollection().find({ category: category });
  if (existingUser) {
    response.status(200).send(existingUser);
  } else {
    response.status(404).send('Zur Zeit gibt es keine Einträge!');
  }
});

router.post('/users', async (request, response) => {
  const newUser = request.body;
  if (
    typeof newUser.companyName !== 'string' ||
    typeof newUser.owner !== 'string' ||
    typeof newUser.email !== 'string' ||
    typeof newUser.phonNumber !== 'string' ||
    typeof newUser.category !== 'string'
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
export default router;
