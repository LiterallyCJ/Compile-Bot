module.exports = class djseval {
    constructor() {
        this.name = "djseval"
        this.alias = "de"
        this.usage = "e!djseval"
    }
    
    run(trusted, client, message, args, blacklist, Discord) {

        function clean(text) {
            if (typeof text === "string")
              return text
                .replace(/`/g, "`" + String.fromCharCode(8203))
                .replace(/@/g, "@" + String.fromCharCode(8203));
            else return text;
          }
          
              try {
                const peepeepoopoo = message.content.split(" ").slice(1);
                const code = peepeepoopoo.join(" ");
                if (!code) return message.channel.send("No code to evaluate!");
          
                // message.channel.send(`Evaled by: ${message.author.tag}`);
                for (let i = 0; i < blacklist.length; i++) {
                  if (
                    code.toLowerCase().includes(blacklist[i]) &&
                    !trusted.includes(message.author.id)
                  )
                    return message.channel.send(
                      `No, you are not allowed to try using code that includes: \`${blacklist[i]}\`.`
                    );
                }
                if (code.length >= 150 && !trusted.includes(message.author.id))
                  return message.channel.send("Code to eval cannot be longer than 200 characters long! Use e!compile for longer code (without discord.js support)!");
          
                let evaled = eval(code);
          
                if (typeof evaled !== "string") evaled = require("util").inspect(evaled);
          
                if (evaled.length >= 2000) return message.channel.send("Output length must not be larger than 2000.")
                message.channel.send(`Evaled by: ${message.author.tag}\n**Input:**\n\`\`\`js\n${code}\n\`\`\`\n**Output:**\n\`\`\`xl\n${clean(evaled)}\n\`\`\``)
                // message.channel.send(clean(evaled), { code: "xl" });
                return;
              } catch (err) {
                message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
              }

    }
}