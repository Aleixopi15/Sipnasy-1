const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
  
  let user = message.mentions.members.first() 

  let member = db.fetch(`account.${message.author.id}.balance`)

  let embed1 = new Discord.MessageEmbed()
  .setColor("00ffe4")
  .setDescription(`💵 Mencione alguém para você pagar`);

  if (!user) {
      return message.channel.send(embed1)
  }
  let embed2 = new Discord.MessageEmbed()
  .setColor("00ffe4")
  .setDescription(`💵 Especifique quanto você quer pagar.`);
  
  if (!args[1]) {
      return message.channel.send(embed2)
  }
  let embed3 = new Discord.MessageEmbed() 
  .setColor("00ffe4")
  .setDescription(`💵 Você não pode transferir valores negativos.`);

  if (message.content.includes('-')) { 
      return message.channel.send(embed3)
  }
  let embed4 = new Discord.MessageEmbed()
  .setColor("00ffe4")
  .setDescription(`💵 Você não possui Sipcoins suficientes para transferir.`);

  if (member < args[1]) {
      return message.channel.send(embed4)
  }

  let embed5 = new Discord.MessageEmbed()
  .setColor("00ffe4")
  .setDescription(`💵 Você pagou a ${user.user.username} ${args[1]} Sipcoins`);

  message.channel.send(embed5)
  db.add(`account.${user.id}.balance`, args[1])
  db.subtract(`account.${message.author.id}.balance`, args[1])

}

module.exports.help = {
  name:"pay",
  aliases: [""]
}