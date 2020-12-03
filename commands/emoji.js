const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  message.delete();
  const embed = new Discord.MessageEmbed()

  .setColor('00ffe4')
  .setThumbnail('https://images-ext-1.discordapp.net/external/B_HY7d8AGwe_nKjERz09PcQ-4Lc8wofutGwLGPtA6qQ/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/739492876509118508/89dad1dd9df6bd232272fe182a179b91.png?width=300&height=300')
  .setTitle('❌ | Erro')
   .addField(`Descrição:`, '> Faça a Sipnasy mostrar um emoji.', false)
    .addField(`Como usar?`, '> `s.emoji emoji-legal`', false)
    .addField(`Permissões:`, '> `Nenhuma`', false) 
    .setFooter('Sipnasy ™')
  if (!args[0])
    return message.channel.send(embed)
  
  let emoji = message.guild.emojis.cache.find(emoji => emoji.name === args[0]);

  if (!emoji) {
    message.channel.send(
      "`" + args[0] + "` **não é um emoji deste servidor.**"
    );
  } else if (emoji.animated === true) {
    message.channel.send(`<a:${args[0]}:${emoji.id}>`);
  } else {
    message.channel.send(`<:${args[0]}:${emoji.id}>`);
  }
};