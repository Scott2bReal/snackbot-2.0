import { Client } from "discord.js"
import ready from "./listeners/ready"
import interactionCreate from "./listeners/interactionCreate"
import { env } from "./config/env"

const client = new Client({
  intents: [
    "Guilds",
    "GuildMembers",
    "GuildMessageReactions",
    "MessageContent",
    "GuildPresences",
  ],
})

void client.login(env.discordToken)

// Register listeners
ready(client)
interactionCreate(client)
