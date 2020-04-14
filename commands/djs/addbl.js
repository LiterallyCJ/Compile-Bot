const fs = require("fs")

module.exports = class addbl {
    constructor() {
        this.name = "addbl"
        this.alias = "abl"
        this.usage = "e!addbl"
    }
    
    run(client, message, args, blacklist, Discord, prefix) {
      
      if (message.author.id === "588401882784071693") {
        
        fs.writeFile("../blacklist.json", JSON.stringify(args[0]), (err) => {
    if (err) {
        console.error(err);
        return;
    };
    message.channel.send(`${args[0]} has been added to the blacklist!`)
});
        
      }
    }

}