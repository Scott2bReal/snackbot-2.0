import { Client } from 'discord.js'
import {config} from './config'
import ready from './listeners/ready'
import interactionCreate from './listeners/interactionCreate'

const client = new Client({
  intents: [
    "Guilds",
    "GuildMembers",
    "GuildMessageReactions",
    "MessageContent",
    "GuildPresences",
  ]
})

client.login(config.token)

// Register listeners
ready(client)
interactionCreate(client)
