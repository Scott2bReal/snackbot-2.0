const token = process.env.DISCORD_BOT_TOKEN
const clientId = process.env.DISCORD_CLIENT_ID
const databaseUrl = process.env.DATABASE_URL

if (!token || !clientId) {
  throw new Error("DISCORD_BOT_TOKEN and DISCORD_CLIENT_ID must be provided")
}

if (!databaseUrl) {
  throw new Error("DATABASE_URL must be provided")
}

export const config = {
  token,
  clientId,
  databaseUrl,
}
