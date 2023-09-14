import { Client, Events, GatewayIntentBits } from "discord.js";
import Commands from "./lib/commands";
import { PingCommand } from "./commands/ping";

// Initialize the commands
const commands = new Commands();

// Initialize the client
const client: Client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Set the commands
client.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);

  commands.set(PingCommand);
  commands.init(c);
});

// Login
client.login(process.env.DISCORD_TOKEN);
