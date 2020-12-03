module.exports = {
  name: "lembrete",
  category: "premium",
  aliases: ["lembrar"],
  description: "lembreteeeee",
  
  run: async(client, message, args) => {
     var mensagem = args.splice(1).join(' ');
    var time = args[0];
   

    if (!time) return message.reply('Defina um tempo!');
    if (!mensagem) return message.reply('Insira sua mensagem, para eu estar te lembrando!');

    time = await time.toString();

    if (time.indexOf('s') !== -1) { // Segundos
        var timesec = await time.replace(/s.*/, '');
        var timems = await timesec * 1000;
    } else if (time.indexOf('m') !== -1) { // Minutos
        var timemin = await time.replace(/m.*/, '');
        timems = await timemin * 60 * 1000;
    } else if (time.indexOf('h') !== -1) { // Horas
        var timehour = await time.replace(/h.*/, '');
        timems = await timehour * 60 * 60 * 1000;
    } else if (time.indexOf('d') !== -1) { // Dias
        var timeday = await time.replace(/d.*/, '');
        timems = await timeday * 60 * 60 * 24 * 1000;
    }    else {
        return message.reply('Insira o tempo desejado!');
    }

    message.channel.send(`<@${message.author.id}> irei te lembrar de \`${mensagem}\` daqui a \`${time}\` `);

    setTimeout(function () {
        message.channel.send(`🔔 ┃ ${message.author} Lembrete! \`${mensagem}\` `);
    }, parseInt(timems));

}
  }