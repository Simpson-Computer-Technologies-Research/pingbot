import { Client, Events } from "discord.js";
import { Command } from "./types";

/**
 * Dataclass for storing all of the commands
 */
export default class Commands {
  /**
   * Store all of the commands
   */
  private commands: { [key: string]: Command } = {};

  /**
   * Set a command
   * @param name The name of the command
   * @param command The command
   * @returns The command
   */
  public set(command: Command) {
    if (this.commands[command.name])
      throw new Error(`Command ${command.name} already exists`);

    this.commands[command.name] = command;
  }

  /**
   * Initialize and handle all of the commands
   * @param client The Discord client
   * @returns The client
   */
  public init(client: Client) {
    for (const command of Object.values(this.commands)) {
      client.application?.commands.create(command.data);
    }

    client.on(Events.InteractionCreate, async (interaction) => {
      if (!interaction.isCommand()) return;

      const commandName: string = interaction.commandName;
      const command: Command = this.commands[commandName];

      if (command) command.handler(interaction);
    });

    return client;
  }
}
