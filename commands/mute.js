const prefix = process.env.prefix;
const Discord = require("discord.js");

module.exports = {
  name: 'mute',
  showable: true,
  usage: 'mute [@member] [reason]',
  examples: ['mute @Illewysk raison'],
  description: "`► " + prefix + "mute <@mention> [raison]`",
  async run(client, message, args) {
    if(!message.member.roles.cache.has('940009386120728576')) return message.channel.send("`Vous n'avez pas la permission d'utiliser cette commande !`")
    const mention = message.mentions.members.first();
    const reason = args.slice(1).join(' ');
    const MuteRole = message.guild.roles.cache.find(r => r.id === "939167006274502687");
    const author = message.author;

     if (!mention) return message.reply('`Spécifier un membre à mute !`');
    if (!reason) return message.reply('`Spécifier une raison à votre mute !`');

    const embed = new Discord.MessageEmbed()
      .setTitle("Kowalsky Bot - Mute")
      .setTimestamp()
      .setColor()
      .setDescription("<@"+author+"> vient de réduire quelqu'un au silence !")
      .addFields(
        {name: "Utilisateur", value:"<@" + mention + ">"},
        {name: "Raison", value:reason}
        )

    mention.roles.add(MuteRole);
    client.channels.cache.get("939171574358106203").send({ embeds: [embed] });
  }
};
