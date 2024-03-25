import { eq } from "drizzle-orm"
import { db } from "../schema"
import { user } from "../schema/user"

const getUserById = async (id: string) => {
  return await db.select().from(user).where(eq(user.id, id))
}

export const userQueries = {
  getUserById,
}
