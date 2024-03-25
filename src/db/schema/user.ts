import { index, pgTable, uuid, varchar } from "drizzle-orm/pg-core"

export const user = pgTable(
  "user",
  {
    id: uuid("id").primaryKey(),
    name: varchar("name", { length: 256 }),
  },
  (users) => {
    return {
      nameIndex: index("name_index").on(users.name),
    }
  },
)

export type User = typeof user.$inferSelect
export type NewUser = typeof user.$inferInsert
