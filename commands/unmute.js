const prefix = process.env.prefix;
const Discord = require("discord.js");

module.exports = {
  name: 'unmute',
  showable: true,
  usage: 'unmute [@member]',
  examples: ['unmute @Illewysk'],
  description: "`► " + prefix + "unmute <@mention>`",
  async run(client, message, args) {
    if(!message.member.roles.cache.has('940009386120728576')) return message.channel.send("`Vous n'avez pas la permission d'utiliser cette commande !`")
    const mention = message.mentions.members.first();
    const reason = args.slice(1).join(' ');
    const MuteRole = message.guild.roles.cache.find(r => r.id === "939167006274502687");
    const author = message.author;

     if (!mention) return message.reply('`Spécifier un membre à unmute !`');

    const embed = new Discord.MessageEmbed()
      .setTitle("Kowalsky Bot - Unmute")
      .setTimestamp()
      .setColor()
      .setDescription("<@"+author+"> vient de unmute quelqu'un !")
      .addFields(
        {name: "Utilisateur", value:"<@" + mention + ">"},
        )

    mention.roles.remove(MuteRole);
    client.channels.cache.get("939171574358106203").send({ embeds: [embed] });
  }
};