const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
const embed = new Discord.MessageEmbed()

  .setColor('00ffe4')
 
  .setTitle('❌ | Erro')
  .setDescription("S.help\ns.hug\ns.slap")
    .setFooter('Sipnasy ™')
  message.channel.send(embed)
}