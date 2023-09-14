import { RESTPostAPIChatInputApplicationCommandsJSONBody } from "discord.js";

/**
 * Type for a slash command
 */
export type Command = {
  name: string;
  data: RESTPostAPIChatInputApplicationCommandsJSONBody;
  handler: (interaction: any) => Promise<void>;
};
