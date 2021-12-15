import { ObjectId } from 'bson';

export type User = {
  _id?: ObjectId;
  companyName: string;
  password: string;
};

export async function verifyLogin(user: Partial<User>): Promise<User> {
  const response = await fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    const errorMessage = await response.text();
    throw errorMessage;
  }
  const result: User = await response.json();
  console.log({ user });
  console.log({ localStorage });
  return result;
}
