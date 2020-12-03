const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  var embed = new Discord.MessageEmbed()
  .setTitle("Painel de Comandos!")
  .setThumbnail(message.author.displayAvatarURL())
  .setColor("00ffe4")
  .setDescription(`Olá, ${message.author} \n Meu nome é Sipnasy! \n Está é minha lista de comandos!`)
  .setImage(`https://i.imgur.com/6hFTqpr.png`)
  .addField('1️⃣ Ultilidades\n2️⃣ Diversão \n3️⃣ Moderação\n4️⃣ Economia \n5️⃣ Bot\n⬅️ Voltar', '\u200B', false)
  message.channel.send({embed}).then(msg=> {
    msg.delete({ timeout: 120000 })
      msg.react('1️⃣').then(r=>{
      msg.react('2️⃣')
      msg.react('3️⃣') 
      msg.react('4️⃣')
      msg.react('5️⃣')
      msg.react('⬅️')
  })

  const utilfilter = (reaction, user) => reaction.emoji.name === '1️⃣' && user.id === message.author.id;
  const funfilter = (reaction, user) => reaction.emoji.name === '2️⃣' && user.id === message.author.id;
  const diverfilter = (reaction, user) => reaction.emoji.name === '3️⃣' && user.id === message.author.id;
  const economyfilter = (reaction, user) => reaction.emoji.name === '4️⃣' && user.id === message.author.id;
  const devfilter = (reaction, user) => reaction.emoji.name === '5️⃣' && user.id === message.author.id;
  const voltarfilter = (reaction, user) => reaction.emoji.name === '⬅️' && user.id === message.author.id;
  const util = msg.createReactionCollector(utilfilter, { time: 120000 });
  const fun = msg.createReactionCollector(funfilter, { time: 120000 });
  const diver = msg.createReactionCollector(diverfilter, { time: 120000 });
   const economy = msg.createReactionCollector(economyfilter, { time: 120000 });
   const dev = msg.createReactionCollector(devfilter, { time: 120000 });
  const voltar = msg.createReactionCollector(voltarfilter, { time: 120000 });



  util.on('collect', r1 => { 
   r1.users.remove(message.author.id)
      embed = new Discord.MessageEmbed()
          .setThumbnail(message.author.displayAvatarURL())
          .setColor("#00ffe4")
          .setImage("https://i.imgur.com/6hFTqpr.png")
          .setDescription(`**⚒ | Comandos de Ultilidades:**\n\n**s.say** » Mande uma menssagem.\n**s.serverinfo** » Mostra as informações do servidor.\n **s.emoji** » Mande um emoji.\n **s.avatar** » Veja o avatar de alguém.\n**s.userinfo** » Veja as informações de um usuário.\n**s.servericon** » Veja o icone do servidor.\n**s.lembrete** » Sipnasy te lembra de algo.`);
     
      msg.edit(embed);
  })

  fun.on('collect', r2 => { 
   r2.users.remove(message.author.id)
      embed = new Discord.MessageEmbed()
          .setColor("#00ffe4")
          .setImage(`https://i.imgur.com/6hFTqpr.png`)
          .setThumbnail(message.author.displayAvatarURL())
          .setDescription(`**🎭 | Comandos de Diversão!**\n\n**s.coinflip** » Jogue cara ou coroa.\n**s.kiss** » Beije alguém.\n**s.ship** » Shipe alguém.\n**s.dog** » Veja um cachorro.\n**s.gay** » Mede quanto uma pessoa é gay.\n**s.gado** » Mostra o quanto uma pessoa é gado.\n**s.stonks** » Digite algo stonks.\n**s.laranjo** » Faça o laranjo falar algo.`);
    
      msg.edit(embed);
  })

  diver.on('collect', r3 => { 
   r3.users.remove(message.author.id)
      embed = new Discord.MessageEmbed()
          .setColor("#00ffe4")
          .setImage(`https://i.imgur.com/6hFTqpr.png`)
          .setThumbnail(message.author.displayAvatarURL())
          .setDescription(`**⚙️ | Moderação!**\n\n**s.clear** » Limpa uma quantidade de menssagens.\n\n\n**Mais comandos Em Breve...**`);
      msg.edit(embed);
  })

  economy.on('collect', r4 => { 
   r4.users.remove(message.author.id)
      embed = new Discord.MessageEmbed()
          .setColor("#00ffe4")
          .setImage(`https://i.imgur.com/6hFTqpr.png`)
          .setThumbnail(message.author.displayAvatarURL())
          .setDescription(` **💸 | Economia!**\n\n**s.daily** » Pega suas SipCoins diárias.\n**s.bal** » Vê quantas SipCoins você tem.\n**s.pay** » Paga SipCoins a alguém.`);
      msg.edit(embed);
  })

  dev.on('collect', r5 => { 
   r5.users.remove(message.author.id)
      embed = new Discord.MessageEmbed()
          .setColor("#00ffe4")
          .setImage(`https://i.imgur.com/6hFTqpr.png`)
          .setThumbnail(message.author.displayAvatarURL())
          .setDescription(`>**🤖 | Bot!**\n\n**s.botinfo** » Veja as informações do Bot.\n**s.uptime** » Veja quanto tempo o Bot está Online.\n**s.ping** » Veja o ping do Bot.\n**s.vote** » Vote na Sipnasy.`)
      msg.edit(embed);
  })

  voltar.on('collect', r5 => { 
   r5.users.remove(message.author.id)
      embed = new Discord.MessageEmbed()
   .setTitle("Painel de Comandos!")
  .setThumbnail(message.author.displayAvatarURL())
  .setColor("#00ffe4")
  .setDescription(`Olá, ${message.author} \n Meu nome é Sipnasy! \n Está é minha lista de comandos!`)
  .setImage(`https://i.imgur.com/6hFTqpr.png`)
  .addField('1️⃣ Ultilidades\n2️⃣ Diversão \n3️⃣ Moderação\n4️⃣ Economia \n5️⃣ Bot\n⬅️ Voltar', '\u200B', false)
          
    msg.edit(embed);
  })
})
}
module.exports.help = {
    name: "ajuda",
    aliases: ['help', 'comandos', 'commands']
}