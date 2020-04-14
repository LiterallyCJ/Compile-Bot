const db = require('quick.db')

module.exports = class setlogs {
    constructor() {
        this.name = "setlogs"
        this.alias = "sl"
        this.usage = "e!setlogs"
    }
    
    async run(trusted, client, message, args, blacklist, Discord, prefix) {
        if (message.member.permissions.has('ADMINISTRATOR')) {
            let logChannel = message.mentions.channels.first() || message.guild.channels.get(args[0]);

            if (!logChannel) {
                message.channel.send("That channel could not be found!");
            }

            await db.set(`${message.guild.id}.logChannel`, logChannel.id);
            message.channel.send(`Log channel has been set to: <#${logChannel.id}>`);

        } else {
            message.channel.send("You do not have administrator permissions.")
        }


    }

}