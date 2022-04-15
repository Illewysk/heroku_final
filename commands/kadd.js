const Discord = require("discord.js");
const prefix = process.env.prefix;

module.exports = {
    name: "kadd",
    showable: true,
    description: "`► " + prefix + "kadd <@mention> [STEAM_ID]`",
    run(client, message, args) {
        if(!message.member.roles.cache.has('939171138037235735')) return message.channel.send("`Vous n'avez pas la permission d'utiliser cette commande !`")
        const roleadd = ["939167006274502691", "939190614162014289", "939191687660589067", "939190626170318859", "939844683075571773"];
        const mention = message.mentions.members.first();
        const steamid = args.slice(1).join(' ');
        const verifsteamid = (steamid.startsWith("STEAM_0:0") || steamid.startsWith("STEAM_0:1"));

        if (!mention) return message.channel.send("`Merci de mentionner le membre à ajouter dans la famille !`")
        if (!steamid) return message.channel.send("`Merci de fournir le steamid lié à l'utilisateur !`")
        if (!verifsteamid) return message.channel.send("`Merci de fournir un steamid de format correct [STEAM_0:X:XXXXXXX] !`")

        for(role in roleadd){
            mention.roles.add(roleadd[role]);
        }
        message.channel.send("Bienvenue a <@" + mention + "> dans la famille !");
        client.channels.cache.find(channel => channel.id === '939190242647351346').send("[<@" + mention + ">] - " + steamid + " : WL Recrue");
    }
}