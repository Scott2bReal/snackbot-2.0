import { type Command } from "."
import { userQueries } from "../db/queries/user"

export const addUser: Command = {
  name: "add-user",
  description: "add a test user",
  run: async (_, interaction) => {
    try {
      const username = "test-user";
      const createdUser =await userQueries.create(username); // Use the provided username instead of the user's Discord username
      const content = `User ${createdUser.name} added!`;
      await interaction.reply({ ephemeral: true, content });
    } catch (e) {
      console.error(e);
      await interaction.reply({ ephemeral: true, content: 'Failed to add user.' });
    }
  },
};
