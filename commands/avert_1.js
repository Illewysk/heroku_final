const Discord = require("discord.js");
const prefix = process.env.prefix;

module.exports = {
    name: "avert_1",
    showable: true,
    description: "`► " + prefix + "avert_1 <@mention> [raison]`",
    run(client, message, args) {
        if(!message.member.roles.cache.has('940009386120728576')) return message.channel.send("`Vous n'avez pas la permission d'utiliser cette commande !`")
        const roleadd = ["947071087496265749"];
        const mention = message.mentions.members.first();
        const reason = args.slice(1).join(' ');

        if (!mention) return message.channel.send("`Merci de mentionner le membre à avertir !`")
        if (!reason) return message.channel.send("`Merci de fournir une raison à l'avertissement !`")

        for(role in roleadd){
            mention.roles.add(roleadd[role]);
        }
        message.channel.send("<@" + mention + "> à bien été averti [<@&947071087496265749>] !");
        client.channels.cache.find(channel => channel.id === '939688589682417695').send("<@" + mention + "> a reçu un <@&947071087496265749> pour : " + reason + " ");
    }
}