const prefix = process.env.prefix;
const Discord = require("discord.js");

module.exports = {
  name: 'ban',
  showable: true,
  usage: 'ban [@member] [reason]',
  examples: ['ban @Illewysk raison'],
  description: "`► " + prefix + "ban <@mention> [raison]`",
  async run(client, message, args) {
    if(!message.member.roles.cache.has('963834276661575740')) return message.channel.send("`Vous n'avez pas la permission d'utiliser cette commande !`")
    if (!args[0]) return message.reply('`Spécifier un membre à ban !`');
    if (!args[1]) return message.reply('`Spécifier une raison à votre ban !`');

const mention = message.mentions.members.find(m => m.id);
const reason = args.slice(1).join(' ');
const author = message.author;

if (!mention.bannable) return message.reply('Ce membre ne peut pas être ban par le bot !');

const embed = new Discord.MessageEmbed()
.setTitle("Kowalsky Bot - Ban")
.setTimestamp()
.setColor()
.setDescription("<@"+author+"> vient de bannir quelqu'un !")
.addFields(
  {name: "Utilisateur", value:"<@" + mention + ">"},
  {name: "Raison", value:reason}
  )

client.channels.cache.get("939171574358106203").send({ embeds: [embed] });
mention.ban({reason: reason, days: 7});

  }
};