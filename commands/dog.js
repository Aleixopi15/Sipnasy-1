//foto aleatoria de cachorro
 Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (client, message, args) => {

  let {body} = await superagent
  .get(`https://random.dog/woof.json`);

   const dogembed = new Discord.MessageEmbed()
   .setColor("RANDOM")
   .setTitle("Doguin! :dog:")
   .setImage(body.url);

   message.channel.send(dogembed);

}