module.exports = class help {
    constructor() {
        this.name = "help"
        this.alias = "h"
        this.usage = "e!help"
    }
    
    run(trusted, client, message, args, blacklist, Discord, prefix) {
        let helpEmbed = new Discord.RichEmbed()
        .setTitle("Compiler commands")
        .addField(`${prefix}djseval`, "This evaluates code in `discord.js`.")
        .addField(`${prefix}compile`, "This compiles code")
        .addField(`${prefix}blacklist`, "This shows you a list of all blacklisted words, and the maximum code length.")
        message.channel.send(helpEmbed)
    }

}