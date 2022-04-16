const Discord = require("discord.js");
const fs = require('fs');
const dotenv = require('dotenv').config();
const prefix = "-";
const commandsFiles = fs.readdirSync("./commands");

module.exports = {
    name: "help",
    showable: true,
    description: "`► " + prefix + "help`",
    run(client, message, args) {
        const embed = new Discord.MessageEmbed()
            .setTitle("Kowalsky Bot - Help - Liste des Commandes")
            .setThumbnail("https://freesvg.org/img/1552332668.png")

        for (const file of commandsFiles) {
            var command = require(`../commands/${file}`);
            var name = command.name;
            var description = command.description;
            var showable = command.showable;
            if (showable) {embed.addField(prefix + name, description, true);}
        }

        message.channel.send({ embeds: [embed] });

    }
}
