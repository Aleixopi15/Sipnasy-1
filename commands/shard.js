const Discord = require('discord.js')
const fs = require('fs');

module.exports.run = async (client, message, args) => {
  const shardembed =  new Discord.MessageEmbed()
	.setTitle(' Judy - Server Shard ')
	.setColor('#FF00C2')
	.setDescription(`** Servidor na Shard: \`${message.guild.shard.id}\`\nPing: \`${message.guild.shard.ping} ms\`\nServidores: \`${client.guilds.cache.size} servidores\`\nUsuários: \`${client.users.cache.size} usuários\`**`)
	message.channel.send(shardembed)
}