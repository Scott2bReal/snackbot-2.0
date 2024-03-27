import { index, pgTable, serial, varchar } from "drizzle-orm/pg-core"
import { createInsertSchema, createSelectSchema } from "drizzle-zod"

export const user = pgTable(
  "user",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }),
  },
  (users) => {
    return {
      nameIndex: index("user_name_index").on(users.name),
    }
  },
)

export type User = typeof user.$inferSelect
export const userSelectSchema = createSelectSchema(user)
export type NewUser = typeof user.$inferInsert
export const userInsertSchema = createInsertSchema(user)
