const Discord = require("discord.js")

exports.run = async (client, message, args) => {
  var array1 = ["cara", "coroa"];

  var rand = Math.floor(Math.random() * array1.length);
  
    const embed = new Discord.MessageEmbed()

  .setColor('00ffe4')
  .setThumbnail('https://images-ext-1.discordapp.net/external/B_HY7d8AGwe_nKjERz09PcQ-4Lc8wofutGwLGPtA6qQ/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/739492876509118508/89dad1dd9df6bd232272fe182a179b91.png?width=300&height=300')
  .setTitle('❌ | Erro')
   .addField(`Descrição:`, '> Jogue cara ou coroa.', false)
    .addField(`Como usar?`, '> `s.coinflip cara`', false)
    .addField(`Permissões:`, '> `Nenhuma`', false) 
    .setFooter('Sipnasy ™')
  if (!args[0] || (args[0].toLowerCase() !== "cara" && args[0].toLowerCase() !== "coroa")) {
    return message.channel.send(embed)
  } 
else if (args[0].toLowerCase() == array1[rand]) {
    message.channel.send("Deu `" + array1[rand] + "`, você ganhou dessa vez!");
  } 
else if (args[0].toLowerCase() != array1[rand]) {
    message.channel.send("Deu `" + array1[rand] + "`, você perdeu dessa vez!"
    );
  }
};
module.exports.help = {
    name: "coinflip",
    aliases: [ ]
}