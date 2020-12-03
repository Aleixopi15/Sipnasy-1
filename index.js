const config = require('./config.json')
const chalk = require('chalk');
const { ShardingManager } = require('discord.js')
const shard = new ShardingManager('./bot.js', {
  token: config.Token,
  autoSpawn: true
});

shard.spawn(2);
shard.on('shardCreate', shards => console.log(chalk.red(`[SHARD]` + chalk.blue(`Shard ${shards.id}/${shard.totalShards}`))));