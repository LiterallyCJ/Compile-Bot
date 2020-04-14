module.exports = class blacklist {
    constructor() {
        this.name = "blacklist"
        this.alias = "bl"
        this.usage = "e!blacklist"
    }
    
    run(trusted, client, message, args, blacklist, Discord) {
        let blEmbed = new Discord.RichEmbed()
        .setTitle("These are all the blacklisted words.")
        .setDescription(blacklist)
        .addField("Maximum eval code length:", "150")
        .addField("Maximum compile code length:", "750")
        .setFooter("These are all words you are not allowed to use + the maximum code length.")
        message.channel.send(blEmbed)
    }

}