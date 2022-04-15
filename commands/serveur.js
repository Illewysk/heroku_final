const Discord = require('discord.js');
const Gamedig = require('gamedig');
const dotenv = require('dotenv'); dotenv.config();
const prefix = process.env.prefix;

module.exports = {
    name: 'serveur',
    showable: true,
    description: "`► "+prefix+"serveur 1, 2, 3, 4`",
    run(client, message, args) {
        var server_number = args[0];
        if (server_number < 1 || server_number > 4) return message.channel.send("`Ce serveur n'existe pas`");

        Gamedig.query({
            type: 'garrysmod',
            maxAttempts: 10,
            host: 'gmod' + server_number + '.lyg.fr',
        }).then((state) => {
            const embed = new Discord.MessageEmbed()
                .setTitle('Kowalsky Bot - Stats LiveYourGame')
                .setDescription("**" + state.name + "**\n\nStatut du serveur : `🟢`\n" + "Joueurs : `" + state.players.length + "/" + state.maxplayers + "`")
                .setColor()
                .setThumbnail("https://liveyourgame.fr/storage/img/logo.png")
                .setFooter({
                    text:"🟢 => online | 🔴 => offline",
                })

            message.channel.send({ embeds: [embed] });
        }).catch((error) => {
            const embed = new Discord.MessageEmbed()
                .setTitle('Kowalsky - Stats LiveYourGame')
                .setDescription("**" + state.name + "**\n\nStatut du serveur : `🔴`\n" + "Joueurs : `" + state.players.length + "/" + state.maxplayers + "`")
                .setColor('#C3BDBD')
                .setThumbnail("https://liveyourgame.fr/storage/img/logo.png")
                .setFooter({
                    text:"🟢 => online | 🔴 => offline",
                })
            message.channel.send({ embeds: [embed] });        
        });
        
    }
}