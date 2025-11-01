/* eslint-disable no-console */
import { eq } from 'drizzle-orm'
import { v4 as uuidv4 } from 'uuid'
import { db } from './index'
import { user } from './schema'

async function seed() {
  const email = 'john@example.com'

  await db.insert(user).values({
    id: uuidv4(),
    name: 'John Doe',
    email,
  })

  console.log('New user created!')

  const users = await db.select().from(user)

  console.log('Getting all users from the database: ', users)

  await db
    .update(user)
    .set({
      name: 'Jane Doe',
    })
    .where(eq(user.email, email))

  console.log('User info updated!')

  await db.delete(user).where(eq(user.email, email))

  console.log('User deleted!')
}

seed()
