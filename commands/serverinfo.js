const Discord = require("discord.js");
const moment = require("moment");
moment.locale('pt-BR');

exports.run = (bot,message, 
args) => {
   message.delete()
   
   const regions = {
      brazil: 'Brasil',
      europe: 'Europa',
   };
   const owner = message.guild.owner.user || {};
    let autor = message.author || {}
   let gAvatar = message.guild.iconURL({ dynamic: true, format: "png", size: 1024 });
   let embed = new Discord.MessageEmbed()

   .setFooter(`${message.guild.name} • © Todos os direitos reservados.`, message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
   .setTitle(`© ${message.guild.name}`)
   .setThumbnail(gAvatar)
   .setColor('00ffe4')
   .addField(`💻 ID`, message.guild.id, true)
   .addField(':crown: Fundador',`${owner.username + "#" + owner.discriminator || ' Owner not found...'} \n\`\`(${owner.id})\`\``,true)
   .addField(`🌎 Região`, `${regions[message.guild.region]}`, true)
    .addField('📝 Canais de Texto:', message.guild.channels.cache.filter(m => m.type === 'text').size, true)
   .addField('🗣️ Canais de Voz:', message.guild.channels.cache.filter(m => m.type === 'voice').size, true)
   .addField('👥 Total de membros:', message.guild.memberCount, true)
   .addField(`📆 Servidor criado em`, moment.utc(message.guild.createdAt).format("LLL"), true)

   message.channel.send(`<@${message.author.id}>`, { embed });
}

exports.help = {
   name: "serverinfo"
}