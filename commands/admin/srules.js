const { ActionRowBuilder, PermissionsBitField, ButtonBuilder, ButtonStyle, Events, EmbedBuilder, StringSelectMenuBuilder } = require("discord.js");
const { prefix } = require('../../config.json');
/// By @y.ug
module.exports = {
    name: "srules",
    description: 'Feeling lost?',
    cooldown: 5000,
    async execute(client, message, args) {    
            if (
      !message.member.permissions.has(PermissionsBitField.Flags.ManageChannels)
    )
      return message.reply(
        "**Check Your Permission And Turn On The Administrator**"
      );

    const embed = new EmbedBuilder()
.setDescription(`🇺🇸 **__English__**
**Click On English Language To See Information About Server Rules**

🇮🇶 **__Arabic__**
**انقر علي لغه عربيه حتي تكدر تشوف قوانين سيرفر**

<:Kurdish:1155199456929652827>  **__Kurdish__**
**کلیک لەسەر زمانی کوردی کە بۆ بینینی ياساكاني سێرڤەر**`)
        .setColor("#303136") 
    .setTitle(`${message.guild.name}`)
     .setFooter({
        iconURL: `https://cdn.discordapp.com/attachments/1186790492160143452/1187860245947621426/netty_-1.png?ex=65986c10&is=6585f710&hm=00d8db301bed21fda2a368298612cd65b97a94f2f6091e67ea5174ceadedd04d&`,
        text: `${message.guild.name}`,
      })
     .setThumbnail(`https://cdn.discordapp.com/attachments/1186790492160143452/1187860245947621426/netty_-1.png?ex=65986c10&is=6585f710&hm=00d8db301bed21fda2a368298612cd65b97a94f2f6091e67ea5174ceadedd04d&`)
 const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setStyle(ButtonStyle.Primary)
        .setCustomId("english")
        .setEmoji(`🇺🇲`),
    new ButtonBuilder()
        .setStyle(ButtonStyle.Danger)
        .setCustomId("arabic")
        .setEmoji(`🇮🇶`),
    new ButtonBuilder()
        .setStyle(ButtonStyle.Success)
        .setCustomId("kurdish")
        .setEmoji(`<:Kurdish:1155199456929652827>`)
   );
       message.channel.send({ embeds: [embed], components:[row]});
      message.delete()
  },
}; 
