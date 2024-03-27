// Legacy prisma model:
// model Response {
//   id        String  @id @default(cuid())
//   userId    String
//   user      User    @relation("UserToResponse", fields: [userId], references: [id], onDelete: Cascade)
//   available Boolean
//   eventId   String
//   event     Event   @relation("ResponseToEvent", fields: [eventId], references: [id], onDelete: Cascade)
//   @@unique([eventId, userId])
// }

import { boolean, pgTable, serial } from "drizzle-orm/pg-core"
import { user } from "./user"
import { event } from "./events"

export const response = pgTable("response", {
  id: serial("id").primaryKey(),
  userId: serial("user_id")
    .references(() => user.id)
    .notNull(),
  available: boolean("available").notNull(),
  eventId: serial("event_id")
    .references(() => event.id)
    .notNull(),
})
