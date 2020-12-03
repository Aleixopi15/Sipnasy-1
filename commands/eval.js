const { MessageEmbed }= require('discord.js');

module.exports.run = async (client, message, args) => {

  let dev = `688902340341792813`
  let staff = `722044696364318794`

  if (![`${dev}`, `${staff}`, `688902340341792813`].some(a => message.author.id === a)) return message.channel.send('**Apenas `desenvolvedores` do bot podem utilizar este comando!**')
  if (!args[0])
    return message.channel.send(
      `Insira um valor para executar o eval.`
    );
await message.channel.send('Executando...').then(async m => {
  try {
    let beforeRunning = Date.now()
    let result = eval(args.join(' '))

    if (result instanceof Promise) {
      m.edit('O código retornou uma promise - aguardando ela ser resolvida...')
      await result
    }
    if (typeof result !== 'string') result = require('util').inspect(result)
    let end = (Date.now() - beforeRunning)
    let embed = new MessageEmbed(message.author).setTimestamp()
      .setAuthor(' • Sucesso!')
      .setDescription('```' + result.slice(0, 2000) + '```')
      .setColor('#00ff00')
    m.edit( { embed: embed })
  } catch (e) {
    let embed = new MessageEmbed(message.author).setTimestamp()
      .setAuthor(' • ERROR')
      .setDescription('```' + e.stack.slice(0, 2000) + '```')
      .setColor("ff0000")
    m.edit( { embed: embed })
  }
})}