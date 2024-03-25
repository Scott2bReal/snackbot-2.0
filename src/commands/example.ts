import { Command } from ".";

export const example: Command = {
  name: "example",
  description: "Say hello to the bot",
  run: async (_, interaction) => {
    try {
      const { username } = interaction.user;
      const content = `Hello ${username}!`;
      await interaction.reply({ ephemeral: true, content });
    } catch (e) {
      console.log(e);
    }
  },
};
