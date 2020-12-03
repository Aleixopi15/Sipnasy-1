// Adapte para seu bot, isso é a base! By: Rafa
const jimp = require("jimp")

exports.run = async (client, message, args) => {
        let img = jimp.read("https://cdn.discordapp.com/attachments/554048737648050179/610011657632219147/laranjo-meme-cke.jpg")



        if (!args[0]) 
        img.then(image => {
            jimp.loadFont(jimp.FONT_SANS_32_BLACK).then(font => {
                image.resize(685, 494)
                image.print(font, 20, 30, args.join(" "), 600)
                image.getBuffer(jimp.MIME_PNG, (err, i) => {
                    message.channel.send({files: [{ attachment: i, name: "laranjo.png"}]})
                })
            })
        })
    }
    module.exports.help = {
    name: "botban",
    aliases: ['addbl', 'starban']
}