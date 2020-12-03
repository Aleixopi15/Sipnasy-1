const Discord = require('discord.js');
 
 module.exports.run = async (client, message, args) => {
let svPing = Date.now() - message.createdTimestamp
const embed = new Discord.MessageEmbed()
   .setColor('00ffe4')
   .setTitle("📡 | Ping")
   .setDescription(`**Shard: ${message.guild.shardID}/1\n\nLatência do Server: ${svPing}ms\n\nLatência do Bot: ${client.ws.ping}ms**`)
  

   message.channel.send(embed);
 }