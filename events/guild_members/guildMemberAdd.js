const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "guildMemberAdd",
    once: false,
    async execute(client, member) {
        const guild = client.guilds.cache.get("939167005989277697");
        const memberCount = guild.memberCount;
        const embed = new MessageEmbed()
        .setTitle(`Bienvenue à ${member.user.username} !`)
        .setThumbnail()
        .setColor()
        .setDescription("<#939181891381260369>\n<#939167006308073600>\n\n**Membres : "+memberCount+"**");
        client.channels.cache.get('939167006308073599').send({ embeds: [embed] });
        member.roles.add('939190758903279685');
    },
};