const Discord = require('discord.js');
const prefix = process.env.prefix;

module.exports = {
    name: 'vote',
    showable: true,
    description: "`► " + prefix + "vote <@mention> [note]`",
    run(client, message, args) {
        if(!message.member.roles.cache.has('939171138037235735')) return message.channel.send("`Vous n'avez pas la permission d'utiliser cette commande !`")
        const channel = client.channels.cache.find(channel => channel.id === '951145897931186276');
        let mention = message.mentions.users.first();
        if (!mention) {
            message.channel.send("`Merci de mentionner la personne !`");

        }
        else if (!args[1] || isNaN(args[1]) || args[1]>20 || args[1]<0) {
            message.channel.send("`Merci de fournir une note comprise entre 0 et 20!`")
        }
        else {
            const vote = new Discord.MessageEmbed()
                .setTitle("Kowalsky Bot - Vote d'ajout famille")
                .setDescription("Merci de vous positionner pour, neutre, ou contre l'entrée de <@" + mention + "> dans la famille qui a obtenu la note de " + args[1] + "/20 à son entretien.\n`✅ => Pour | ⚪ => Neutre | ❌ => Contre`")
                .setFooter({ text: message.author.username, iconURL: message.author.displayAvatarURL() })
                .setTimestamp()

                channel.send({ embeds: [vote] }).then(MessageEmbed => {
                MessageEmbed.react('✅');
                MessageEmbed.react('⚪');
                MessageEmbed.react('❌');

                channel.send("@everyone").then(msg => {
                    setTimeout(() => msg.delete(), 100)
                  })
            });



        }

    },
};