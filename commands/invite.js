const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {

const embed = new Discord.MessageEmbed()


.setColor('00ffe4')
.setDescription('🚪 **|** [Invite](https://discord.com/oauth2/authorize?client_id=739492876509118508&scope=bot)')
message.channel.send(embed)

}