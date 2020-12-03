const express = require('express');
	  const app = express();
	  app.get ("/", (request,response) => {
	    const ping = new Date ();
   ping.setHours(ping.getHours() - 3);
   ping.setHours(ping.getHours() - 3);
	    console.log(
	     `Ping recebido as ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`
	    );
	  response.sendStatus(200);
	  });
	  app.listen(process.env.PORT);
 const Discord = require("discord.js");
 ;
 const client = new Discord.Client();
 const config = require("./config.json")


 client.on('message', message => {
      if (message.author.bot) return;
      if (message.channel.type == 'dm') return;
       if (message.content === `<@!${client.user.id}>`) return message.channel.send(`Olá, Meu prefixo atualmente é: \`${config.prefix}\`\nPara obter ajuda use o comando: \`${config.prefix}help\``) 
      if (!message.content.toLowerCase().startsWith(config.prefix)) return;
      if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

     const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
     const command = args.shift().toLowerCase();

     try {
         const commandFile = require(`./commands/${command}.js`)
         commandFile.run(client, message, args);
     } catch (err) {
     console.error('Erro:' + err);
   }
 });


 client.on("ready", () => {
   let activities = [
       `Utilize ${config.prefix}help para obter ajuda`,
       `⚠️ Eu ainda estou em desenvolvimento.`,
       `👑 Fui criada pela SplitStudio!`,
     ],
     i = 0;
   setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, {
         type: "PLAYING"
       }), 1000 * 20); 
   client.user
      .setStatus("online")
       .catch(console.error);
console.log("Estou Online!\n\nInstancia Sipnasy esta online e funcional! \n\nTenha um Bom dia Aleixopi15!")
});

const { inspect } = require('util');





client.login(process.env.TOKEN);