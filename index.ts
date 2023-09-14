import { Client, Events, GatewayIntentBits } from "discord.js";

// Command handler
import Commands from "./lib/commands";

// Ping Command
import { PingCommand } from "./commands/ping";

// Initialize the commands
const commands = new Commands();

// Initialize the client
const client: Client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Set the commands
client.once(Events.ClientReady, (client) => {
  console.log(`Ready! Logged in as ${client.user.tag}`);

  commands.set(PingCommand);
  commands.init(client);
});

// Login
client.login(process.env.DISCORD_TOKEN);
