const { MessageEmbed } = require('discord.js');
const prefix = process.env.prefix;

module.exports = {
    name: 'bureau',
    showable: true,
    description: "`► " + prefix + "bureau`",
    run(client, message, args) {
        if(!message.member.roles.cache.has('963834276661575740')) return message.channel.send("`Vous n'avez pas la permission d'utiliser cette commande !`")
        const embed = new MessageEmbed()
            .setTitle('Kowalsky Bot - Mdp Bureau Ts')
            .setDescription("**L'adresse du TeamSpeak :**\n`ts.liveyourgame.fr`\n\n**Mdp Bureau État-Major : :**\n`Bière`")
            .setColor()
            .setFooter({ text: message.author.username, iconURL: message.author.displayAvatarURL() })
            .setTimestamp()

        message.author.send({ embeds: [embed] });
    },
};