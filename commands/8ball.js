const Discord = require("discord.js");

var eightball = [ 
        "Sim!",
        "Não",
        "Talvez",
        "Provavelmente",
        "Acho que não.",
        "Nunca!",
        "Você pode tentar...",
        "Você Decide!",
        "SEM DÚVIDAS!",
]

module.exports.run = async (bot,message,args) => {
     if (args[0] != null) {
        var embed = new Discord.MessageEmbed()
        .setAuthor("🎱 Bola Nº8")
        .setColor("00ffe4")
        .setThumbnail("https://img2.gratispng.com/20180401/eie/kisspng-magic-8-ball-8-ball-pool-eight-ball-billiard-balls-8-ball-pool-5ac183f82bc222.7624610315226316721792.jpg")
        .addField("**Sua Resposta é...**", eightball[Math.floor(Math.random() * eightball.length).toString(16)] )
        message.channel.send(embed)
    }
    
     else message.channel.send("Qual sua Pergunta? ultilize s.8ball pergunta")
}

module.exports.help = {
    name: "8ball",
    aliases: ['8b']
}