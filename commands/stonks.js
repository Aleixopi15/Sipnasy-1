// Adapte para seu bot, isso é a base! By: Rafa
const jimp = require("jimp")

exports.run = async (client, message, args) => {
        let img = jimp.read("https://media.discordapp.net/attachments/723135289320538152/733670552622989352/stonks-meme.png")
        if (!args[0]) return message.reply("Diga algo Stonks.")
        img.then(image => {
            jimp.loadFont(jimp.FONT_SANS_32_WHITE).then(font => {
                image.resize(685, 500)
                image.print(font, 20, 30, args.join(" "), 700)
                image.getBuffer(jimp.MIME_PNG, (err, i) => {
                    message.channel.send({files: [{ attachment: i, name: "mime_dos_stonks.png"}]})
                })
            })
        })
    }