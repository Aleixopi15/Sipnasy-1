const { MessageEmbed } = require('discord.js');

module.exports = {
    run: async (client, message, args) => {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        let status;
        switch (user.presence.status) {
            case "online":
                status = "<:online:556678187786960897> Online";
                break;
            case "dnd":
                status = "<:dnd:556678417018257408> Não Pertube";
                break;
            case "idle":
                status = "<:idle:556678338031255572> Ausente";
                break;
            case "offline":
                status = "<:offline:556678259778256896> Offline / Invisível";
                break;
        }

        const embed = new MessageEmbed()
            .setAuthor(`${user.user.username}#${user.user.discriminator}`)
            .setColor(`00ffe4`)
            .setThumbnail(user.user.displayAvatarURL({dynamic : true}))
            .addFields(
                {
                    name: "🌐 Nome de Usuário: ",
                    value: user.user.username,
                    inline: false
                },
                {
                    name: "#️⃣ Tag: ",
                    value: `${user.user.discriminator}`,
                    inline: false
                },
                {
                    name: "🔢 ID: ",
                    value: user.user.id,
                },
                {
                    name: "💠 Status: ",
                    value: status,
                    inline: false
                },
                {
                    name: "🎮 Atividade: ",
                    value: user.presence.activities[0] ? user.presence.activities[0].name : `O Usuário Não Está Jogando Nada!`,
                    inline: false
                },
               
                {
                    name: '📅 Conta Criada Em: ',
                    value: user.user.createdAt.toLocaleDateString("pt-BR"),
                    inline: false
                },
                {
                    name: '📅 Entrou No Servidor Em: ',
                    value: user.joinedAt.toLocaleDateString("pt-BR"),
                    inline: false
                },
                {
                    name: '🧳 Cargos Do Usuário: ',
                    value: user.roles.cache.map(role => role.toString()).join(" ,"),
                    inline: false
                }
            )

        await message.channel.send(embed)
    }
}