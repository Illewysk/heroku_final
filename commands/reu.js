const dotenv = require('dotenv'); dotenv.config();
const prefix = process.env.prefix;

module.exports = {
    name: 'reu',
    showable: true,
    description: "`► " + prefix + "reu`",
    run(client, message, args) {
        if(!message.member.roles.cache.has('940009386120728576')) return message.channel.send("`Vous n'avez pas la permission d'utiliser cette commande !`")
        client.channels.cache.find(channel => channel.id === '939507634577473566').send("Bonjour à tous, \nRéunion Kowalsky **Aujourd'hui à 18H**.\nEn cas d'absence, merci aux membres ne pouvant pas être présent durant celle-ci de faire une Absence. <#939681666241269821>\n\n ||@everyone||");
    },
};