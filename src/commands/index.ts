import {
  type ChatInputApplicationCommandData,
  type Client,
  type CommandInteraction,
} from "discord.js";
import { example } from "./example";

export interface Command extends ChatInputApplicationCommandData {
  run: (client: Client, interaction: CommandInteraction) => Promise<void>;
}

/**
 * This is the array of application commands that will be registered with
 * Discord when the "ready" event is received
 *
 * New commands can be added by defining the command in its own module, then
 * importing here and including in this array
 */
export const commands: Command[] = [example];
