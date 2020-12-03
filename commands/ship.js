const Canvas = require('canvas');
const Discord = require('discord.js')
const canvas = Canvas.createCanvas(384, 128);
const ctx = canvas.getContext('2d');
const { createCanvas, loadImage } = require('canvas')

module.exports.run = async (bot, message, args) => {//exportando o comando como ship
  let membro1 = message.mentions.members.first()
    let membro2 = message.mentions.members.last()
  const erro = new Discord.MessageEmbed()

  .setColor('00ffe4')
  .setThumbnail('https://images-ext-1.discordapp.net/external/B_HY7d8AGwe_nKjERz09PcQ-4Lc8wofutGwLGPtA6qQ/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/739492876509118508/89dad1dd9df6bd232272fe182a179b91.png?width=300&height=300')
  .setTitle('❌ | Erro')
   .addField(`Descrição:`, '> Shipe duas pessoas.', false)
    .addField(`Como usar?`, '> `s.ship @Aleixopi15#0001 @Sipnasy#4574`', false)
    .addField(`Permissões:`, '> `Nenhuma`', false) 
    .setFooter('Sipnasy ™')
  if(!membro1 || !membro2) return message.channel.send(erro)
    if(membro1 === membro2) return message.channel.send(erro)
  
  const amor = Math.floor(Math.random() * 100);
    const loveIndex = Math.floor(amor / 10);
  const loveLevel = "█".repeat(loveIndex) + ".".repeat(10 - loveIndex);

    let nomeFim1 = membro1.user.username.length;
      let nomeFim2 = membro2.user.username.length;

      let calc1 = nomeFim1 - 3
    let calc2 = nomeFim2 - 3
  
  let nomeship;
    if(amor > 60) {
      nomeship = membro1.user.username.slice(0, 3) + membro2.user.username.slice(0, 3);
    } else if(amor >= 40) {
      nomeship = membro1.user.username.slice(0, calc1) + membro2.user.username.slice(0, calc2)
    } else {
      nomeship = membro1.user.username.slice(calc1, nomeFim1) + membro2.user.username.slice(calc2, nomeFim2)
    }
let emoticon;
    if(amor > 60) {
      emoticon = ("http://www.emoji.co.uk/files/phantom-open-emojis/symbols-phantom/12934-heavy-black-heart.png"); //imagem de coração
    } else if(amor >= 40) {
      emoticon = ("https://www.laboremploymentreport.com/wp-content/uploads/sites/82/2018/02/Thinking_Face_Emoji-300x300.png"); //imagem de sei lá
    } else {
      emoticon = ("https://cdn.icon-icons.com/icons2/2000/PNG/512/crying_emoji_sad_icon_123390.png"); //imagem chorando
    }

  let desc;
    if(amor > 90) {
      desc = (":sparkling_heart: HMMM, vai rolar ou não vai? :sparkling_heart:\n``"+membro1.user.username+"``\n``"+membro2.user.username+"``");
    } else if(amor >= 70) {
      desc = (":revolving_hearts: Esses dois já estão se pegando! :revolving_hearts: \n``"+membro1.user.username+"``\n``"+membro2.user.username+"``");
    } else if(amor >= 45) {
      desc = (":thinking: hmm... Talvez de certo... :thinking:\n``"+membro1.user.username+"``\n``"+membro2.user.username+"``");
    } else {
      desc = (":face_vomiting:  Isso nunca vai acontecer! :face_vomiting: \n``"+membro1.user.username+"``\n``"+membro2.user.username+"``");
    }
  
  const canvas = Canvas.createCanvas(384, 128);
  const ctx = canvas.getContext('2d');
    
  const emote = await Canvas.loadImage(emoticon);
    const foto1 = await Canvas.loadImage(membro1.user.displayAvatarURL({format: "png"}))
  const foto2 = await  Canvas.loadImage(membro2.user.displayAvatarURL({format: "png"}))

    ctx.drawImage(emote, 125, 0, 128, 128)
      ctx.drawImage(foto1, -10, 0, 128, 128)
    ctx.drawImage(foto2, 260, 0, 128, 128)

 const amorat = new Discord.MessageAttachment(canvas.toBuffer(), 'chances-image.png')
      
  
let amorEmbed = new Discord.MessageEmbed()
  .setColor('#FF69B4')
    .setDescription("**"+amor+"%** [`"+loveLevel+"`]")
  .attachFiles([amorat])
  .setImage('attachment://chances-image.png')


  message.channel.send('<@'+message.author.id+'> \n'+desc, amorEmbed)

  
}