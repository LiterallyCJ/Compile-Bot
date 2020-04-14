module.exports = class botinfo {
  constructor() {
    this.name = "botinfo";
    this.alias = "binfo";
    this.usage = "e!botinfo";
  }

  async run(trusted, client, message, args, blacklist, Discord, prefix) {
    // Bot uptime
    let totalSeconds = client.uptime / 1000;
    let days = Math.floor(totalSeconds / 86400);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;

    let infoEmbed = new Discord.RichEmbed()
      .setTitle("Compiler info")
      .setThumbnail(client.user.displayAvatarURL)
      .addField("Bot version:", "1.1.0")
      .addField("Bot prefix:", prefix)
      .addfield("Bot uptime:", uptime)
    .setFooter("Bot made by: LiterallyCJ#1477")
    message.channel.send(infoEmbed);
  }
};
