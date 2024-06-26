import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"
import { env } from "../config/env"

const { databaseUrl } = env

// Can be used to conditionally set this, i.e. in dev vs. production
const connectionString = databaseUrl

/**
 * Cache the database connection in development. This avoids creating a new connection on every HMR
 * update.
 */
const globalForDb = globalThis as unknown as {
  conn: postgres.Sql | undefined
}

const connection = globalForDb.conn ?? postgres(connectionString)

if (process.env.NODE_ENV !== "production") {
  globalForDb.conn = connection
}

export const db = drizzle(connection)
