

module.exports = class compile {
    constructor() {
        this.name = "compile"
        this.alias = "cmp"
        this.usage = "e!compile"
    }
    
    run(trusted, client, message, args, blacklist) {

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
                if (!code) return message.channel.send("No code to compile!");
          
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
                
                if (code.includes("client")) return message.channel.send(`\`ERROR\` \`\`\`xl\nclient is not defined\n\`\`\``)
                
                if (code.length >= 750 && !trusted.includes(message.author.id))
                  return message.channel.send("Code to compile cannot be longer than 750 characters long! Sorry!");
          
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