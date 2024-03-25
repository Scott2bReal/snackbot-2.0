const token = process.env.DISCORD_BOT_TOKEN
const clientId = process.env.DISCORD_CLIENT_ID

if (!token || !clientId) {
  throw new Error('DISCORD_BOT_TOKEN and DISCORD_CLIENT_ID must be provided')
}

export const config = {
  token,
  clientId,
}
