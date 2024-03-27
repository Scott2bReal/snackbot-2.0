import { eq } from "drizzle-orm"
import {
  type NewUser,
  type User,
  user,
  userSelectSchema,
  userInsertSchema,
} from "../schema/user"
import { db } from "../db"

const getById = async (id: number): Promise<User> => {
  const result = await db.selectDistinct().from(user).where(eq(user.id, id))
  return userSelectSchema.parse(result)
}

const create = async (name: string): Promise<NewUser> => {
  const result = await db.insert(user).values({ name }).returning()
  return userInsertSchema.parse(result)
}

const createMany = async (names: string[]): Promise<NewUser[]> => {
  const result = await db
    .insert(user)
    .values(names.map((name) => ({ name })))
    .returning()
  return result
}

const deleteById = async (id: number): Promise<User> => {
  const result = await db.delete(user).where(eq(user.id, id)).returning()
  return userSelectSchema.parse(result)
}

export const userQueries = {
  getById,
  create,
  createMany,
  deleteById,
}
