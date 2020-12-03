//Comando de warn com mensagem no privado em js
const Discord = require("discord.js");

exports.run = (bot, message, args) => {
        message.delete()

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Você não possui permissão.`)

    let membro = message.mentions.users.first()
    if(!membro) return message.reply("Mencione um usuário.")

    let motivo = args.slice(1).join(" ");
    if (!motivo) return message.reply("Escreva um motivo.")

    let embed = new Discord.MessageEmbed()
    .setTitle(`WARN - ${membro.username}`)
    .setColor("00ffe4")
    .setFooter(`Responsavel: ${message.author.username}`, message.author.displayAvatarURL())
    .addField(`Motivo:`, motivo, true)

    membro.send(embed)
    let pembed = new Discord.MessageEmbed()
    .setTitle("Warn aplicado!")
    .setDescription(`**Membro:** ${membro.username} \n**Motivo:** ${motivo}`)
    .setColor("00ffe4")
    .setFooter("Warn | Sipnasy")
    message.channel.send(pembed)
}