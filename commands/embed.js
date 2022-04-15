const { MessageEmbed } = require('discord.js');
const prefix = process.env.prefix;

module.exports = {
    name: 'embed',
    showable: false,
    description: "`► " + prefix + "embed`",
    run(client, message, args) {
        const embed = new MessageEmbed()
            .setTitle('Kowalsky Bot - Recrutement')
            .setDescription("**Bonjour/Bonsoir à tous,** \n Bienvenue sur notre discord et voici les règles de notre serveur discord, merci de prendre connaissance des règles.\n\n**► Nom Rp Obligatoire.\n► Publicité interdite, pour quoi que ce soit.\n► Évitez de spam, quel que soit le Channel.\n► Pas de liens vers des sites douteux/inconnus.\n► Pas de NSFW, de racisme, de sexisme, de harcèlement.\n► Site Famille Kowalsky :** https://sites.google.com/view/kowalsky-lyg \n\n**Information** : Tout non-respect des règles pourra occasionner des sanctions !")
            .setColor()
            .setThumbnail()
            .setTimestamp()

        message.channel.send({ embeds: [embed] });
    }
};