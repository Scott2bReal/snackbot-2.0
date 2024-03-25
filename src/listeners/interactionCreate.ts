import { ChatInputCommandInteraction, Client } from "discord.js";
import { commands } from "../commands";

async function handleSlashCommand(
  client: Client,
  interaction: ChatInputCommandInteraction,
) {
  const command = commands.find((cmd) => cmd.name === interaction.commandName);
  if (!command) {
    console.log(`Command ${interaction.commandName} not found`);
    return;
  }
  command.run(client, interaction);
}

export default (client: Client) => {
  client.on("interactionCreate", async (interaction) => {
    if (interaction.isChatInputCommand()) {
      await handleSlashCommand(client, interaction);
    }
  });
};
