const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  


const exampleEmbed = new Discord.MessageEmbed()

.setColor('#00ffe4')
.setTitle('**__Informações__**')
.setDescription(`**📋 | Nome:** Sipnasy\n\n💻 **| Linguagem:** JavaScript\n\n📚 **| Biblioteca:** Discord.js\n\n☁️ **| Host:** Repl.it/BetterUptime\n\n👑 **| Criador:** Aleixopi15#0001\n\n⚒** | Equipe:** SplitStudio\n\n🎚 **| Ram:**`)


.setImage('https://i.imgur.com/CZwq92h.png')

.setFooter('')

message.channel.send(exampleEmbed);
}