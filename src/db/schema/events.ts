// Legacy Prisma model
// model Event {
//   id        String     @id @default(cuid())
//   name      String
//   date      DateTime
//   userId    String
//   requester User       @relation("UserToEvent", fields: [userId], references: [id], onDelete: Cascade)
//   responses Response[] @relation("ResponseToEvent")
//   expected  Int
// }

import { index, pgTable, uuid, varchar } from "drizzle-orm/pg-core"
import { user } from "./user"

export const event = pgTable(
  "event",
  {
    id: uuid("id").primaryKey(),
    name: varchar("name", { length: 256 }),
    date: varchar("date", { length: 256 }),
    requesterId: uuid("requester_id").references(() => user.id),
  },
  (event) => {
    return {
      dateIndex: index("date_index").on(event.date),
      nameIndex: index("name_index").on(event.name),
    }
  },
)

export type Event = typeof event.$inferSelect
export type NewEvent = typeof event.$inferInsert
