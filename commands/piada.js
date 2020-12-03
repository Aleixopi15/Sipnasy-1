const piadasLib = require('piadas-library')
const Discord = require("discord.js")


module.exports.run = async(client, message, args) => {
       const PiadasClient = new piadasLib();
    const piada = await PiadasClient.randomPiada()

  message.reply(`${piada.question}, ${piada.answer}`)

}
