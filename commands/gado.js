const Discord = require("discord.js")
 
 module.exports.run = async (client, message, args) => {


let gay = Math.round(Math.random() * 100)
 let mentionedUser = message.mentions.users.first() || message.author;
    let ballembed = new Discord.MessageEmbed()
   
    .setColor("00ffe4")
    .setDescription(`🐮┃${mentionedUser} é ${gay}% Gado!`)

    message.channel.send(ballembed)


 }
 module.exports.help = {
    name: "gado",
    aliases: ['maquinagay']
}