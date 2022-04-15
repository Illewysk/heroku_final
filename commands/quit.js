const { MessageEmbed } = require('discord.js');
const prefix = process.env.prefix;

module.exports = {
    name: 'quit',
    showable: false,
    description: "`► " + prefix + "quit`",
    run(client, message, args) {
        process.exit()
        },
};