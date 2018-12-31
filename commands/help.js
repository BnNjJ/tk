const Discord = require("discord.js");
const config = require("../config.json");
let colour = config.colour;
let footer = config.footer;

module.exports.run = async (bot, message, args) => {
  message.delete();

  let embed = new Discord.RichEmbed()
  .setTitle("Ticket Bot - Help")
  .setDescription("**Created by**: Flyz#0007\n\n**new** - Creates new ticket channel.\n**close** - Closes current ticket channel.\n**add (@member)** - Adds member to ticket.\n**remove (@member)** - Removes member from ticket")
  .setFooter("~poll")
  .setColor(colour)
  .setTimestamp()
  .setFooter(`HammerLock ©`);

  message.channel.send(embed);

}
module.exports.help = {
  name: "help"
}
