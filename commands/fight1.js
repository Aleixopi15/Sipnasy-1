const Discord = require("discord.js")

exports.run = async (client, message, args) => {
  random = Math.floor(Math.random() * 2)
if(random == 1) {
  
return message.channel.send(`se fudeu perdeu tua grana`)
db.subtract(`account.${message.author.id}.balance`, args[1])
} else if(random == 2) {
return message.channel.send(`ganhou`)
}
}
