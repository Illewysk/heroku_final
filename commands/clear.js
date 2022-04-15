const { MessageEmbed } = require('discord.js');
const prefix = process.env.prefix;

module.exports = {
    name: 'clear',
    showable: true,
    description: "`► " + prefix + "clear + nombre`",
    run(client, message, args) {
        if(!message.member.roles.cache.has('940009386120728576')) return message.channel.send("`Vous n'avez pas la permission d'utiliser cette commande !`")
        let number = (args[0] == null) ? 10 : args[0];

        if (!number || number > 100 || number < 1 || isNaN(number)) return message.channel.send("`Merci de fournir un nombre compris entre 1 et 100 inclus.`")
        message.channel.send("`" + number + " messages ont bien été supprimés !`");
        message.channel.bulkDelete(number);
    }
};