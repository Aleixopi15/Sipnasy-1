const Discord = require("discord.js");

exports.run = async (client, message, args) => {
 
 const erro1 = new Discord.MessageEmbed()
 
 .setTitle('❌ | Permissão Necesária')
 .setColor('00ffe4')
 .addFild('Você precisa ter a permissão de `Gerenciar Menssagens`, para poder executar este comando!',false)
  if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send(erro1)
    
    
  const deleteCount = parseInt(args[0], 10) 
    
    const embed = new Discord.MessageEmbed()
  
  .setColor('00ffe4')
  .setThumbnail('https://images-ext-1.discordapp.net/external/B_HY7d8AGwe_nKjERz09PcQ-4Lc8wofutGwLGPtA6qQ/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/739492876509118508/89dad1dd9df6bd232272fe182a179b91.png?width=300&height=300')
  .setTitle('❌ | Erro')
   .addField(`Descrição:`, '> Limpe mensagens no chat.', false)
    .addField(`Como usar?`, '> `s.clear 5`', false)
    .addField(`Permissões:`, '> `Gerenciar Menssagens', false) 
    .setFooter('Sipnasy ™')
if(!deleteCount ||   deleteCount < 1 || deleteCount > 99)
return message.channel.send(embed)
   
    const fetched = await message.channel.messages.fetch({
    limit: deleteCount + 1
  });
  message.channel.bulkDelete(fetched);
  message.channel
    .send(`**${args[0]} mensagens limpas nesse chat!**`).then(msg => msg.delete({timeout: 5000}))
    .catch(error =>
      console.log(`Não foi possível deletar mensagens devido a: ${error}`)
    );
};