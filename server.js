const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true});

const prefix = process.env.PREFIX

const trusted = require('./configs/trusted.json').trusted;

// Using djs-commands rather than fs for time saving.
const { CommandHandler } = require("djs-commands")
const CH = new CommandHandler({
  folder: __dirname + "/commands/djs/",
  prefix: [prefix],
})

client.on("ready", () => {
  // Just in case there's an error, this won't be logged in console.
  console.log(`${client.user.tag} has started`);
  client.user.setActivity(`${prefix}help`, { type: "WATCHING" });
});


client.on("message", async (message) => {
  // Checking if the user is a user and not running commands in DMs.
  if (message.channel.type === 'dm') return;
  if (message.author.bot) return;

  let args = message.content.split(" ");
  let command = args[0];
  const blacklist = require('./configs/blacklist.json').blacklist;
  let cmd = CH.getCommand(command);

  if (!cmd) return;

  try {
    if (cmd.name === "cmmeval") {
      // This is for later usage when commando code evaluation.
      cmd.run(trusted,message,args,blacklist,prefix)
    } else {
      cmd.run(trusted,client,message,args,blacklist,Discord,prefix)
    }
  } catch(e) {
      console.log(e)
  }

});

// Remove the comments only if there is an error somewhere.

/*
client.on("error", e => console.error(e));
client.on("warn", e => console.warn(e));
client.on("debug", e => console.info(e));
*/

client.login(process.env.TOKEN);