const prefix = process.env.prefix;
const Discord = require("discord.js");

module.exports = {
  name: 'kick',
  showable: true,
  usage: 'kick [@member] [reason]',
  examples: ['kick @Illewysk raison'],
  description: "`► " + prefix + "kick <@mention> [raison]`",
  async run(client, message, args) {
    if(!message.member.roles.cache.has('940009386120728576')) return message.channel.send("`Vous n'avez pas la permission d'utiliser cette commande !`")
    if (!args[0]) return message.reply('`Spécifier un membre à kick !`');
    if (!args[1]) return message.reply('`Spécifier une raison à votre kick !`');

const mention = message.mentions.members.find(m => m.id);
const reason = args.slice(1).join(' ');
const author = message.author;

if (!mention.kickable) return message.reply('Ce membre ne peut pas être kick par le bot !');

const embed = new Discord.MessageEmbed()
.setTitle("Kowalsky Bot - Kick")
.setTimestamp()
.setColor()
.setDescription("<@"+author+"> vient d'exclure quelqu'un !")
.addFields(
  {name: "Utilisateur", value:"<@" + mention + ">"},
  {name: "Raison", value:reason}
  )

client.channels.cache.get("939171574358106203").send({ embeds: [embed] });

mention.kick(reason);
  }

};