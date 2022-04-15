const { MessageEmbed } = require('discord.js');
const prefix = process.env.prefix;

module.exports = {
    name: 'ping',
    showable: false,
    description: "`► " + prefix + "ping`",
    run(client, message, args) {
        const embed = new MessageEmbed()
        .setTitle('Ping !')
        .setThumbnail(client.user.displayAvatarURL())
        .addFields (
        { name: 'Latence', value: `\`${client.ws.ping}ms\``, inline: true },
        { name: 'Uptime', value: `<t:${parseInt (client.readyTimestamp / 1000)}:R>`, inline: true }
        )
       .setTimestamp()
       .setFooter({ text: message.author.username, iconURL: message.author.displayAvatarURL() });
       
       message.channel.send({ embeds: [embed] });
        },
       runSlash(client, interaction) {
     interaction.reply('Pong!'); 
    }
};