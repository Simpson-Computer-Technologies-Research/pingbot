import { SlashCommandBuilder } from "@discordjs/builders";
import { Command } from "../lib/types";

export const PingCommand: Command = {
  name: "ping",
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("pong!")
    .toJSON(),

  handler: async (interaction: any) => {
    await interaction.reply("pong!");
  },
};
