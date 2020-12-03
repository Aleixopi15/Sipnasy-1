const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {



  let member = message.mentions.users.first() || message.author

  let member_db = db.get(`account.${member.id}.balance`)
  if (!member_db) member_db = "0"
  if (member_db === "null") {
    db.set(`account.${message.author.id}.balance`, 0)
  } else {
    const embed = new Discord.MessageEmbed().setTitle(`💸 | Grana de ${member.username}!`).setDescription(`\n**SipCoins:\n\n *${member_db}* **`).setColor("00ffe4")
    message.channel.send(embed)
  }

}
exports.help = {
  name: 'bal',
  aliases: ['atm']
}