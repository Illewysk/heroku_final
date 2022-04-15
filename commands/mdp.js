const { MessageEmbed } = require('discord.js');
const prefix = process.env.prefix;

module.exports = {
    name: 'mdp',
    showable: true,
    description: "`► " + prefix + "mdp`",
    run(client, message, args) {
        if(!message.member.roles.cache.has('939844683075571773')) return message.channel.send("`Vous n'avez pas la permission d'utiliser cette commande !`")
        const embed = new MessageEmbed()
            .setTitle('Kowalsky Bot - Mdp Ts')
            .setDescription("**L'adresse du TeamSpeak :**\n`ts.liveyourgame.fr`\n\n**Mdp Salon RP/Réunion :**\n`coquelicot`")
            .setColor()
            .setFooter({ text: message.author.username, iconURL: message.author.displayAvatarURL() })
            .setTimestamp()

        message.author.send({ embeds: [embed] });
    },
};