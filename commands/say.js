const Discord = require('discord.js');



module.exports.run = async (client, message, args) => {
 
 if (!message.member.permissions.has("MANAGE_GUILD"))
    return message.reply("Você é fraco, lhe falta permissão de `Gerenciar Servidor` para usar esse comando")
 
  const sayMessage = args.join(' ');
  message.delete().catch(O_o => {});
  message.channel.send(sayMessage);
};