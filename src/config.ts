import { z } from "zod"

/**
 * Here's where we parse the env variables and export them as a typed config object.
 *
 * The pattern for defining new config variables is as follows:
 *   * Define a schema for the variable using zod.
 *   * Parse the variable using the schema.
 *   * Include the variable in the exported config object.
 *
 * @see https://zod.dev/?id=basic-usage
 */

const nodeEnvSchema = z.union([
  z.literal("production"),
  z.literal("development"),
  z.literal("test"),
])
const nodeEnv = nodeEnvSchema.parse(process.env.NODE_ENV)

const discordTokenSchema = z.string().min(1)
const discordToken = discordTokenSchema.parse(process.env.DISCORD_BOT_TOKEN)

const discordClientIdSchema = z.string().min(1)
const discordClientId = discordClientIdSchema.parse(
  process.env.DISCORD_CLIENT_ID,
)

const databaseUrlSchema = z.string().min(1)
const databaseUrl = databaseUrlSchema.parse(process.env.DATABASE_URL)

// Don't forget to include new variables in the config object!
export const config = {
  discordToken,
  discordClientId,
  nodeEnv,
  databaseUrl,
}
