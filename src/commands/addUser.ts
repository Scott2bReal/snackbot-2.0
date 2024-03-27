import { type ApplicationCommandOptionType } from "discord.js"
import { type Command } from "."
import { userQueries } from "../db/queries/user"

/** @see https://discord-api-types.dev/api/discord-api-types-v10/enum/ApplicationCommandOptionType#User */
const commandOptionType: ApplicationCommandOptionType.User = 6

const commandOptions: Command['options'] = [
  {
    name: "user",
    description: "Add a user to the database",
    type: commandOptionType,
  }
]

export const addUser: Command = {
  name: "add-user",
  description: "Add a user to the database",
  options: commandOptions,
  run: async (_, interaction) => {
    try {
      const username = interaction.options.data[0]?.user?.username
      if (username === undefined) {
        await interaction.reply({
          ephemeral: true,
          content: "Error finding username"
        })
        throw new Error("Error finding username")
      }
      const createdUser = await userQueries.create(username) // Use the provided username instead of the user's Discord username
      const content = `User ${createdUser.name} added!`
      await interaction.reply({ ephemeral: true, content })
    } catch (e) {
      console.error(e)
      await interaction.reply({
        ephemeral: true,
        content: "Failed to add user.",
      })
    }
  },
}
