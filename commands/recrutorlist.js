const { MessageEmbed } = require('discord.js');
const prefix = process.env.prefix;

module.exports = {
    name: 'recrutorlist',
    showable: false,
    description: "`▷ " + prefix + "recrutorlist`",
    run(client, message, args) {
        const embed = new MessageEmbed()
            .setTitle('Liste des recruteurs')
            .setDescription("**Chef Recruteurs**\n\n► <@433659386158907393>\n\n**Recruteurs**\n\n► <@398525333994864650>\n► <@442252417007091722>\n► <@401832046743519233>\n► <@899804309531815996>\n► <@523759000039194631>\n► <@436988296761966592>")
            .setColor()
            .addFields()
            .setTimestamp()

        message.channel.send({ embeds: [embed] });
    }
};