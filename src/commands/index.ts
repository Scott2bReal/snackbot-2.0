import {
  ChatInputApplicationCommandData,
  Client,
  CommandInteraction,
} from "discord.js";
import { example } from "./example";

export interface Command extends ChatInputApplicationCommandData {
  run: (client: Client, interaction: CommandInteraction) => void;
}

/**
 * This is the array of application commands that will be registered with
 * Discord when the "ready" event is received
 *
 * New commands can be added by defining the command in its own module, then
 * importing here and including in this array
 *
 * @see https://discord.js.org/#/docs/main/stable/class/Application
 */
export const commands: Command[] = [example];
