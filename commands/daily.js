const Discord = require("discord.js");
const db = require("quick.db");
let ms = require("parse-ms");

exports.run = async (client, message, args) => {
    let pad_zero = num => (num < 10 ? '0' : '') + num;
    let cooldown = 8.64e+7; 
    let amount = Math.floor(Math.random() * 10000 + 500)

    let lastDaily = await db.get(`lastDaily.${message.author.id}`);
    let buck = await db.get(`account.${message.author.id}.balance`);

    try {

        if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
            let timeObj = ms(cooldown - (Date.now() - lastDaily));

            let hours = pad_zero(timeObj.hours).padStart(2, "0"),
                mins = pad_zero(timeObj.minutes).padStart(2, "0"),
                secs = pad_zero(timeObj.seconds).padStart(2, "0");

            let finalTime = `**${hours}:${mins}:${secs}**`;
            return message.channel.send(`Desculpe, você não pode coletar seu daily muito cedo. Por favor espere até ${finalTime}.`);
        } else {
            db.set(`lastDaily.${message.author.id}`, Date.now());
            db.add(`account.${message.author.id}.balance`, amount);
            
            const exampleEmbed = new Discord.MessageEmbed()

            .setTitle('💰 | Daily')
            .setDescription(`**Parabens ${message.author.tag}Você recebeu ${amount} SipCoins!**
            `)
            .setColor('00ffe4')
            
            return message.channel.send(exampleEmbed)
        }

    } catch (error) {
        console.log(error);
        return message.channel.send(`Oops, erro desconhecido, eu acho: ${error}`);
    }
}

exports.help = {
    name: "daily",
    description: "colete seu daily."
}

exports.conf = {
    aliases: ["dailies"],
    cooldown: 10
}