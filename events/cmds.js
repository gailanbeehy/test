const client = require("../index");
const { Client, Collection, Partials, GatewayIntentBits,
  ActivityType,
  PermissionsBitField,
  AttachmentBuilder,
  SelectMenuBuilder,
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
  parseEmoji,
  ButtonStyle,
  ActionRowBuilder,
  ButtonBuilder,
       Util,
  AuditLogEvent,
  EmbedBuilder,
  ChannelType,
  ModalBuilder,
  TextInputStyle,
  TextInputBuilder,} = require('discord.js');
const prefix = "$";
const config = require("../json/config.json");
const { glob } = require("glob"); 
const { promisify } = require("util"); 
const { joinVoiceChannel } = require('@discordjs/voice');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { SlashCommandBuilder } = require('@discordjs/builders');
const db = require('pro.db');
const colors = require("colors");
const moment = require("moment");
require('events').EventEmitter.defaultMaxListeners = 9999999; // لا تلعب بالكود هذا

const roleStatus = {};

client.on("messageCreate", async (message) => {
  if (message.content === "!buttons") {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("button1")
        .setLabel("Server Status")
        .setEmoji("<:emoji_29:1178787248649543730>")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("button2")
        .setLabel("Code Status")
        .setEmoji("<:emoji_20:1178783615052681276>")
        .setStyle(ButtonStyle.Secondary)
    );

    const emb = new EmbedBuilder()
      .setThumbnail(
        `https://cdn.discordapp.com/attachments/1186790482496475207/1189733741761941544/20231227_175238.png?ex=659f3ce4&is=658cc7e4&hm=9eb20d7bc932a4622130a1f41890e2b0cb697d7432bb82689a1121449a7d023e&`
      )
      .setColor(`#141414`).setDescription(`- **Get Roles's**
Click The Button To Get Notifications Role.`);

    await message.channel.send({ embeds: [emb], components: [row] });
  }
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isButton()) return;

  const userId = interaction.user.id;

  if (interaction.customId === "button1") {
    handleButtonInteraction(
      interaction,
      userId,
      "1186790321816862721",
      "role1"
    );
  }
  if (interaction.customId === "button2") {
    handleButtonInteraction(
      interaction,
      userId,
      "1186790323104526377",
      "role2"
    );
  }
});

async function handleButtonInteraction(
  interaction,
  userId,
  roleId,
  buttonLabel
) {
  if (!roleStatus[userId]) {
    await interaction.member.roles.add(roleId);
    roleStatus[userId] = { [roleId]: true };
    await interaction.reply({
      content: `**Done added Role! <@&${roleId}> ✅**`,
      ephemeral: true,
    });
  } else {
    if (roleStatus[userId][roleId]) {
      await interaction.member.roles.remove(roleId);
      roleStatus[userId][roleId] = false;
      await interaction.reply({
        content: `**Done removed Role! <@&${roleId}>**`,
        ephemeral: true,
      });
    } else {
      await interaction.member.roles.add(roleId);
      roleStatus[userId][roleId] = true;
      await interaction.reply({
        content: `**Done added Role! <@&${roleId}> ✅**`,
        ephemeral: true,
      });
    }
  }
}


client.on("messageCreate", (message) => {
  if (message.channel.type === "dm") return;
let args = message.content.split(" ");
  if (
    args[0] === prefix + "help" 
  ) {
    var row = new ActionRowBuilder().addComponents(
      new StringSelectMenuBuilder()
        .setCustomId("select")
        .setPlaceholder("Click To Select Commands Menu")
        .addOptions([
          {

            label: "Information",
            description: "CLick here to see Commands 1!",
            value: "info",
          },
          {
            label: "Setting",
            description: "CLick here to see Commands 8!",
            value: "setting",
          },
            {
            label: "Admin",
            description: "CLick here to see Commands 12!",
            value: "admin",
          },

          {

            label: "Slash",
            description: "CLick here to see Commands 9!",
            value: "slash",
          },
          {
            label: "General",
            description: "CLick here to see Commands 12!",
            value: "general",
          },
           {
            label: "Music",
            description: "CLick here to see Commands 12!",
            value: "music",
          },
         ])
    )
    let embed = new EmbedBuilder()
      .setAuthor({
        iconURL: message.author.displayAvatarURL(),
        name: message.author.tag,
      })
        .setColor("#303136")   
      .setThumbnail( `https://media.discordapp.net/attachments/1175488637660569651/1186413702765871105/dracky_.png`
            )
       .setDescription(`- **Hello :wave:! Im Netty +**

- **A Discord Advanced Bot With Many Awesome Features, Moderation, General, Music, Owner, And much more as soon!**

- **Select A Category From The Menu Below.**

- [SupportServer](https://discord.gg/JPRt9V4Uzs) • [InviteMe](https://discord.gg/JPRt9V4Uzs)`)
      .setTimestamp();
    
    message.reply({
      embeds: [embed],
      components: [row],
      ephermal: true,
    });
  }

});
client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.channel.guild) return;
    if (interaction.isStringSelectMenu()) {
      if (interaction.customId == "select") {
        let vl = interaction.values[0];
        if (vl === "info") {
          let helpinfo = new EmbedBuilder()
          .setTitle(`You Selected Info Commands`)
              .setColor("#303136")   
            .setThumbnail( `https://media.discordapp.net/attachments/1175488637660569651/1186413702765871105/dracky_.png`
                  ) .setDescription(
              `\`\`\`
help, ping
\`\`\``
            )
            
          await interaction.deferReply({ ephemeral: true });
          await interaction.editReply({
            embeds: [helpinfo],
            ephemeral: true,
          });
             }
        if (vl === "setting") {
          var helpsetting = new EmbedBuilder()
              .setColor("#303136")   
            .setThumbnail( `https://media.discordapp.net/attachments/1175488637660569651/1186413702765871105/dracky_.png`
                  )
            .setTitle("You Selected Setting Commands")
            .setDescription(
              `\`\`\`
set-autotax, set-welcome, set-autoline, disable-autotax, disable-welcome, disable-autoline, set-autorole, disable-autorole
\`\`\``
            )
                    await interaction.deferReply({ ephemeral: true });
          await interaction.editReply({
            embeds: [helpsetting],
            ephemeral: true,
          });
       }
        if (vl === "admin") {
          var admin = new EmbedBuilder()
              .setColor("#303136")   
            .setThumbnail( `https://media.discordapp.net/attachments/1175488637660569651/1186413702765871105/dracky_.png`
                  )
            .setTitle("You Selected Admin Commands")
            .setDescription(
              `\`\`\`
mute, unmute, clear, ban, unban, nickname, lock, unlock, addemoji, esay, srules
\`\`\``
            )
            await interaction.deferReply({ ephemeral: true });
          await interaction.editReply({
            embeds: [admin],
            ephemeral: true,
          });
      }
        if (vl === "general") {
          var general = new EmbedBuilder()
              .setColor("#303136")   
            .setThumbnail( `https://media.discordapp.net/attachments/1175488637660569651/1186413702765871105/dracky_.png`
                  )
            .setTitle("You Selected General Commands")
            .setDescription(
              `botinfo, server, user, soon for new commands.`
            )
           await interaction.deferReply({ ephemeral: true });
          await interaction.editReply({
            embeds: [general],
            ephemeral: true,
          });
           }
        if (vl === "slash") {
          var slash = new EmbedBuilder()
              .setColor("#303136")   
            .setThumbnail( `https://media.discordapp.net/attachments/1175488637660569651/1186413702765871105/dracky_.png`
                  )
            .setTitle("You Selected Slash Commands")
            .setDescription(
              `
- **Info Commands:**
\`\`\`zoyo, ping\`\`\`
- **Music Commands:** 
\`\`\`autoplay, join, jump, leave, repeat, lyrics, nowplaying, pause, play, previous, queue, resume, search, seek, shuffle, skip, stop, volume\`\`\`
              `

            )
         await interaction.deferReply({ ephemeral: true });
          await interaction.editReply({
            embeds: [slash],
            ephemeral: true,
          });
           }
        if (vl === "music") {
          var music = new EmbedBuilder()
              .setColor("#303136")   
            .setThumbnail( `https://media.discordapp.net/attachments/1175488637660569651/1186413702765871105/dracky_.png`
                  )
            .setTitle("You Selected Music Commands")
            .setDescription(
              `\`\`\`
autoplay, join, jump, leave, repeat, lyrics, nowplaying, pause, play, previous, queue, resume, search, seek, shuffle, skip, stop, volume
\`\`\``
            )
         await interaction.deferReply({ ephemeral: true });
          await interaction.editReply({
            embeds: [music],
            ephemeral: true,
          });
        }
      }
    }
  } catch (err) {
    console.log(err);
  }
});


client.on('messageCreate', message =>{
      if (!message.guild) return;
  if(message.content.startsWith(prefix + "addemoji")) {
    if (
        !message.member.permissions.has(PermissionsBitField.Flags.ManageGuild)
      )
        return message.reply("**You need `ManageGuild` permissions**");
    let args = message.content.split(" ")
const errembed = new EmbedBuilder()
          .setTitle("Error")
          .setDescription(`Oops an error occured! Please check if you used the command correctly. Possible Reasons:\n\n• Correct Usage: ${prefix}addemoji (emoji name) (link)\n• File cannot be larger than 256.0 kb.\n• Invalid image`)
    const { parse } = require("twemoji-parser");
     let isUrl = require("is-url");
    let type = "";
    let name = ""
    let emote = args.join(" ").match(/<?(a)?:?(\w{2,32}):(\d{17,19})>?/gi);
    if (emote) {
      emote = emote[0];
      type = "emoji";
      name = name = args.slice(1).join(" ").replace(/<?(a)?:?(\w{2,32}):(\d{17,19})>?/gi, "")
    } else {
      emote = `${args.find(arg => isUrl(arg))}`
      name = args.find(arg => arg != emote);
      type = "url";
    }
    let emoji = { name: "" };
    let Link;
    if (type == "emoji") {
      emoji = parse(emote);
      Link = `https://cdn.discordapp.com/emojis/${emoji.id}.${
        emoji.animated ? "gif" : "png"
        }`
    } else {
      if (!args[1]) return message.reply(`Usage: \`${prefix}addemoji <name> <image or gif url or emoji>\``)
        if (args[1].length < 2 || args[1].length > 32) return message.reply(`\`\`\`Invalid Form Body
name: Must be between 2 and 32 in length.\`\`\``)
      Link = message.attachments.first() ? message.attachments.first().url : args[2];
    }
 (` ${args[1]} ${emote}`)
    message.guild.emojis.create({attachment: `${Link}`, name:`${args[1] || emoji.name}`})
  .then(em => message.channel.send(em.toString() + " added!")).catch(err => {
          message.channel.send({embeds: [errembed]})
    })
        }

});


const dbs = require('pro.db');
client.on("messageCreate",message=>{
  let args = message.content.split(" ");
  if (
    args[0] === prefix + "nick" ||
    args[0] === prefix + "setnick" ||
    args[0] === prefix + "nickname" 
  ) {
      if (
      !message.member.permissions.has(PermissionsBitField.Flags.ManageChannels)
    )
      return message.reply(
        "**Check Your Permission And Turn On The MANAGE_CHANNELS**"
      );
    if (
      !message.guild.members.me.permissions.has(
        PermissionsBitField.Flags.ManageChannels
      )
    )
      return message.reply(
        "**Check My Permission And Turn On The MANAGE_CHANNELS**"
      );
      const args = message.content.slice(prefix.length).trim().split(/ +/g);
      let member = message.mentions.users.first() || message.guild.members.cache.get(args[1])||message.guild.members.cache.find(r => r.user.username === args[1])
      if(!member) return message.reply("nick-name @Mention someone (nickname)")
      let nick = message.content.split(" ").slice(2).join(" ")
      let g = message.guild.members.cache.get(member.id)
      if(!nick){
g.setNickname(member.username)
      }
g.setNickname(nick)
const l = g.nickname|| member.username
let embed = new EmbedBuilder()

.addFields({
  name: `**(User Nickname Change)**`,
  value: `${member}`,
})
.addFields({
  name: `**(Befor)**`,
  value: `\`${l}\``})

.addFields({
  name:`**(After)**`,
  value:`\`${nick}\` 
Change By ${message.author}`,
})
message.reply({embeds: [embed]})
    }
  })

client.on("messageCreate", (message) => {
  if (message.content.startsWith(prefix + "clear")) {
    if (
      !message.member.permissions.has(PermissionsBitField.Flags.ManageChannels)
    )
      return message.reply(
        "Check Your Permission And Turn On The MANAGE_CHANNELS"
      );
    if (
      !message.guild.members.me.permissions.has(
        PermissionsBitField.Flags.ManageChannels
      )
    )
      return message.reply(
        "Check My Permission And Turn On The MANAGE_CHANNELS"
      );
    let amount = message.content.split(" ").slice(1).join(" ");
    if (!amount)
      return message.reply("Please Write Amount To Clearing Message");
    if (amount > 1000)
      return message.reply("I cannot deleting more than 100 message");
    if (isNaN(amount)) return message.reply("Please Enter Valid Number!");
    message.channel.bulkDelete(amount, true).then((messages) => {
      message.channel.send(`\`\`Deleted ${messages.size} messages.\`\``).then((msg) => {
        msg.delete(60000);
      });
    });
  }
});




client.on("messageCreate" , msg => {
   let args = msg.content.split(" ");
  if (
    args[0] === prefix + "set-autotax" ||
    args[0] === prefix + "set-tax" 
  ) {

        if (!msg.member.permissions.has(PermissionsBitField.Flags.Administrator))
      return msg.reply(
        "Check Your Permission And Turn On The \`Administration\`"
      );
    if (
      !msg.guild.members.me.permissions.has(
        PermissionsBitField.Flags.Embedlinks
      )
    )
      return msg.reply(
        "Check My Permission And Turn On The \`Adminstration\`"
      );
    if (
      !msg.guild.members.me.permissions.has(
        PermissionsBitField.Flags.Embedlinks
      )
    )
      return msg.reply("**Check My Permission And Turn On The Embedlinks");
        let args = msg.content.split(" ").slice(1).join(" ")
        let taxCh = msg.guild.channels.cache.get(args) || msg.mentions.channels.first();
        if (!args) return msg.reply("** please mention or ID** ")
        db.set(`tax-${msg.guild.id}`, `${taxCh.id}`)
    msg.reply(`** Done Add ${taxCh} To database !**`)
    }
})
client.on("messageCreate" , msg => {
   let args = msg.content.split(" ");
  if (
    args[0] === prefix + "dtax" ||
    args[0] === prefix + "disable-autotax" 
  ) {

        if (!msg.member.permissions.has(PermissionsBitField.Flags.Administrator))
      return msg.reply(
        "Check Your Permission And Turn On The \`Administration\`"
      );
    if (
      !msg.guild.members.me.permissions.has(
        PermissionsBitField.Flags.Embedlinks
      )
    )
      return msg.reply(
        "Check My Permission And Turn On The \`Adminstration\`"
      );
    if (
      !msg.guild.members.me.permissions.has(
        PermissionsBitField.Flags.Embedlinks
      )
    )
      return msg.reply("**Check My Permission And Turn On The Embedlinks");
        let args = msg.content.split(" ").slice(1).join(" ")
        let taxCh = msg.guild.channels.cache.get(args) || msg.mentions.channels.first();
        if (!args) return msg.reply("** please mention or ID** ")
        db.delete(`tax-${msg.guild.id}`, `${taxCh.id}`)
    msg.reply(`** Done Delete ${taxCh} To database!**`)
    }
})

client.on("messageCreate", async msg => {
    let ch = db.get(`tax-${msg.guild.id}`)
    if (!ch) return;
    if (msg.channel.id === ch) {
   if (msg.author.bot) return;
   let hi  = msg.content.replace(`k`,`000`).replace(`K`,`000`).replace(`m`,`000000`).replace(`M`,`000000`).replace(`b`,`000000000`).replace(`B`,`000000000`)
   if (isNaN(hi)) return msg.reply("**Please Write Amount!**")
   let args2 = parseInt(hi)
   let tax = Math.floor(args2 * (20) / (19) + (1))
   let tax2 = Math.floor(args2 * (20) / (19) + (1) - (args2))
   let tax3 = Math.floor(tax2 * (20) / (19) + (1))
   let tax4 = Math.floor(tax2) + (tax3) + (args2)
   let num = `${hi}`
let e = new EmbedBuilder()
  .setColor("#303136") 
.setTitle("<a:zprobot:1110731079582752898> Tax ProBot")
.setDescription(`** 
Amount
**__${hi}__**

- **Amount With tax**
**__${tax}__**


**`) 
let line = db.get(`line_${msg.guild.id}`)
if (db.has((`line_${msg.guild.id}`))) {
    msg.reply({embeds: [e]}).then(() => {
       msg.channel.send({files : [line]
       })
    }
    )
     } else  if (!db.has((`line_${msg.guild.id}` , `${line}`)))
     msg.reply({embeds: [e]})

    }})
  client.on("messageCreate" , msg => {
     let args = msg.content.split(" ");
  if (
    args[0] === prefix + "set-welcome" ||
    args[0] === prefix + "setwelcome" 
  ) {

        if (!msg.member.permissions.has(PermissionsBitField.Flags.Administrator))
      return msg.reply(
        "Check Your Permission And Turn On The \`Administration\`"
      );
    if (
      !msg.guild.members.me.permissions.has(
        PermissionsBitField.Flags.Embedlinks
      )
    )
      return msg.reply(
        "Check My Permission And Turn On The \`Adminstration\`"
      );
    if (
      !msg.guild.members.me.permissions.has(
        PermissionsBitField.Flags.Embedlinks
      )
    )
      return msg.reply("**Check My Permission And Turn On The Embedlinks");
let args = msg.content.split(" ").slice(1).join(" ")
let ch = msg.guild.channels.cache.get(args) || msg.mentions.channels.first();
if (!ch) return msg.reply(` **❌ Please mention or ID ** `)
db.set(`welcome-ch${msg.guild.id}` , `${ch.id}`)
msg.reply(`**  Done Add ${ch} To database! ** `)
  }
})

  client.on("messageCreate" , msg => {
     let args = msg.content.split(" ");
  if (
    args[0] === prefix + "disable-welcome" ||
    args[0] === prefix + "disablewelcomd" 
  ) {

        if (!msg.member.permissions.has(PermissionsBitField.Flags.Administrator))
      return msg.reply(
        "Check Your Permission And Turn On The \`Administration\`"
      );
    if (
      !msg.guild.members.me.permissions.has(
        PermissionsBitField.Flags.Embedlinks
      )
    )
      return msg.reply(
        "Check My Permission And Turn On The \`Adminstration\`"
      );
    if (
      !msg.guild.members.me.permissions.has(
        PermissionsBitField.Flags.Embedlinks
      )
    )
      return msg.reply("**Check My Permission And Turn On The Embedlinks");
let args = msg.content.split(" ").slice(1).join(" ")
let ch = msg.guild.channels.cache.get(args) || msg.mentions.channels.first();
if (!ch) return msg.reply(` **❌ Please mention or ID ** `)
db.delete(`welcome-ch${msg.guild.id}` , `${ch.id}`)
msg.reply(`**  Done Delete ${ch} To database! ** `)
  }
})



client.on("guildMemberAdd" , member => {
  let welcomeCh = db.get(`welcome-ch${member.guild.id}`)
  let ch = member.guild.channels.cache.get(welcomeCh)
  if (!ch) return;

  let line = db.get(`line_${member.guild.id}`)

  let welcomeEmbed = new EmbedBuilder()

    .setColor("#303136") 
  .setAuthor({name : member.guild.name ,iconURL : member.guild.iconURL({dynamic:true})})
.setDescription(` ** 
**- Hello :wave:!** ${member.user}

**Welcome To** ${member.guild.name}

**We are Now** ${member.guild.memberCount} **Members**

**- I hope you have a great time with us**
** `)
  ch.send({embeds : [welcomeEmbed]})

})
client.on("messageCreate", msg => {
     let arg = msg.content.split(" ");
  if (
    arg[0] === prefix + "auto-role" ||
    arg[0] === prefix + "sautorole" ||
    arg[0] === prefix + "set-autorole" 
  ) {

        if (!msg.member.permissions.has(PermissionsBitField.Flags.Administrator))
      return msg.reply(
        "Check Your Permission And Turn On The \`Administration\`"
      );
    if (
      !msg.guild.members.me.permissions.has(
        PermissionsBitField.Flags.Administrator
      )
    )
      return msg.reply(
        "Check My Permission And Turn On The \`Adminstration\`"
      );
    if (
      !msg.guild.members.me.permissions.has(
        PermissionsBitField.Flags.Embedlinks
      )
    )
      return msg.reply("**Check My Permission And Turn On The Embedlinks");
    if (!msg.member.permissions.has(PermissionsBitField.Flags.Administraror))
      return msg.reply("You Don't have Permission");
          var args = msg.content.split(" ");
         var role = msg.guild.roles.cache.find(r => r.name === args[1]) || msg.mentions.roles.first() || msg.guild.roles.cache.find(r => r.id === args[1])
         if(!role) return msg.channel.send("please mention role or id");

          db.set(`autoooo_${msg.guild.id}`, role.id);
         msg.channel.send(`done set auto role <@&${role.id}>`);

    }
});
client.on("messageCreate", msg => {
     let arg = msg.content.split(" ");
  if (
    arg[0] === prefix + "disable-autorole" ||
    arg[0] === prefix + "dautorole" 
  ) {

        if (!msg.member.permissions.has(PermissionsBitField.Flags.Administrator))
      return msg.reply(
        "Check Your Permission And Turn On The \`Administration\`"
      );
    if (
      !msg.guild.members.me.permissions.has(
        PermissionsBitField.Flags.Administrator
      )
    )
      return msg.reply(
        "Check My Permission And Turn On The \`Adminstration\`"
      );
    if (
      !msg.guild.members.me.permissions.has(
        PermissionsBitField.Flags.Embedlinks
      )
    )
      return msg.reply("**Check My Permission And Turn On The Embedlinks");
          var args = msg.content.split(" ");
         var role = msg.guild.roles.cache.find(r => r.name === args[1]) || msg.mentions.roles.first() || msg.guild.roles.cache.find(r => r.id === args[1])
         if(!role) return msg.channel.send("please mention role or id to disable");

          db.delete(`autoooo_${msg.guild.id}`, role.id);
         msg.channel.send(`done set auto role <@&${role.id}> disable`);

    }
});


client.on('messageCreate', async TOBZiCoder => {
  let args = TOBZiCoder.content.split(" ");
  if (
    args[0] === prefix + "avatar" ||
    args[0] === prefix + "av" 
     ) {
        let User = await TOBZiCoder.mentions.users.first() || await TOBZiCoder.author;
        let Embed = new EmbedBuilder()
           .setAuthor({ name: User.tag, iconURL: User.displayAvatarURL({ dynamic: true }) })
           .setImage(User.displayAvatarURL({ dynamic: true, size: 4096 }))
           .setFooter({ text: `Requested by ${TOBZiCoder.author.tag}`, iconURL: TOBZiCoder.author.displayAvatarURL({ dynamic: true }) })
        let Button = new ButtonBuilder()
           .setStyle(ButtonStyle.Link)
           .setURL(User.displayAvatarURL({ dynamic: true, size: 4096 }))
           .setLabel('Avatar URL')
           .setEmoji(`<:links:1182765962416619520>`)
        let Components = new ActionRowBuilder()
           .addComponents([Button])
        TOBZiCoder.channel.send({ embeds: [Embed], components: [Components] })
    }
}) 


client.on("messageCreate", (message) => {
  if (!message.guild) return;
  let args = message.content.split(" ");
  if (
    args[0] === prefix + "lock" ||
    args[0] === prefix + "lok" 
  ) {
    if (
      !message.member.permissions.has(PermissionsBitField.Flags.ManageChannels)
    )
      return message.reply(
        "**Check Your Permission And Turn On The MANAGE_CHANNELS**"
      );
    if (
      !message.guild.members.me.permissions.has(
        PermissionsBitField.Flags.ManageChannels
      )
    )
      return message.reply(
        "**Check My Permission And Turn On The MANAGE_CHANNELS**"
      );
    const args = message.content.split(" ");
    if (args[1] === "all") {
      message.guild.channels.cache.forEach((c) => {
        c.permissionOverwrites.edit(message.guild.id, {
          SendMessages: false,
        });
      });
      message.channel.send(
        `**<:lock:1183858254657355887> | Successfully all channels is locked in send-messages**`
      );
    } else {
      const channel = message.mentions.channels.first() || message.channel;
      let locking = channel.permissionOverwrites.edit(message.guild.id, {
        SendMessages: false,
      });
      message.channel.send(`**:unlock: ${message.channel.id} was unlocked.**`);
    }
  }
});
client.on("messageCreate", (message) => {
  if (!message.guild) return;
  let args = message.content.split(" ");
  if (
    args[0] === prefix + "unlock" ||
    args[0] === prefix + "unlok" 
  ) {
    if (
      !message.member.permissions.has(PermissionsBitField.Flags.ManageChannels)
    )
      return message.reply(
        "**Check Your Permission And Turn On The MANAGE_CHANNELS**"
      );
    if (
      !message.guild.members.me.permissions.has(
        PermissionsBitField.Flags.ManageChannels
      )
    )
      return message.reply(
        "**Check My Permission And Turn On The MANAGE_CHANNELS**"
      );
    const args = message.content.split(" ");
    if (args[1] === "all") {
      message.guild.channels.cache.forEach((c) => {
        c.permissionOverwrites.edit(message.guild.id, {
          SendMessages: true,
        });
      });
      message.channel.send(
        `**<:unlock:1183858384177483847> | Successfully all channels is unlocked in send-messages**`
      );
    } else {
      const channel = message.mentions.channels.first() || message.channel;
      let locking = channel.permissionOverwrites.edit(message.guild.id, {
        SendMessages: true,
      });
      message.channel.send(`**:unlock: ${message.channel.id} was unlocked.**`);
    }
  }

});
client.on("messageCreate", async (message) => {

  if (!message.channel.guild) return;
 let args = message.content.split(" ");
  if (
    args[0] === prefix + "user" ||
    args[0] === prefix + "userinfo"
  ) {
let user = message.mentions.users.first();
    var men = message.mentions.users.first();
    var heg;
    if (men) {
      heg = men;
    } else {
      heg = message.author;
    }
    var mentionned = message.mentions.members.first();
    var h;
    if (mentionned) {
      h = mentionned;
    } else {
      h = message.member;
    }
    let embed = new EmbedBuilder()
      .setThumbnail(heg.avatarURL())
      .addFields([
        { name: `<:LnS_id:1170708841206386799> ID`, value: `${heg.id}` },
        { name: `<:name:1176612949633290413> Name`, value: `${heg.username}` },
        { name: `<:discriminator:1176613319080165497> Discrim`, value: heg.discriminator.toString() },
        { name: `<:created:1176613504493572128> Created`, value: `${moment(heg.createdAt).format("LL")}` },
        { name: `<:bots:1176613836820852890> Bot?`, value: `${heg.bot}` },
        { name: `<:server:1176614163016056952> Status`, value: `${heg.status}` },
      ])
      .setFooter({ text: client.user.username })
      .setTimestamp();
    await message.reply({ embeds: [embed] });
  }
});

client.on("messageCreate", async (message) => {
 if (!message.channel.guild) return;
 let args = message.content.split(" ");
if (
    args[0] === prefix + "server" ||
    args[0] === prefix + "serverinfo" 
 ) {   const members = await message.guild.members.fetch();
    let embed = new EmbedBuilder()
      .setThumbnail(message.guild.iconURL())
      .addFields([
        {
          name: `<:Ownership:1178063699697741915> Owner guild`,
          value: `<@${message.guild.ownerId}>`,
          inline: true,
        },
        { name: `<:LnS_id:1170708841206386799> Id:`, value: `\`${message.guild.id}\``, inline: true },
        {
          name: `<:create:1178120219038842992> Guild Created In`,
          value: `\`${moment(message.guild.createdAt).format("LL")}\``,
        },
        {
          name: `<:Members:1178120455039766651> Member count`,
          value: `\`${message.guild.memberCount}\``,
          inline: false,
        },
        {
          name: `<a:channel:1178120618667950121> Channels Text`,
          value: `\`${
            message.guild.channels.cache.filter(
              (c) => c.type === ChannelType.GuildText
            ).size
          }\``,
          inline: false,
        },
        {
          name: `<:voice:1178120764260614304> Channels Voice`,
          value: `\`${
            message.guild.channels.cache.filter(
              (c) => c.type === ChannelType.GuildVoice
            ).size
          }\``,
          inline: false,
        },
        {
          name: `<:category:1178120926911528971> Channels Category`,
          value: `\`${
            message.guild.channels.cache.filter(
              (c) => c.type === ChannelType.GuildCategory
            ).size
          }\``,
          inline: false,
        },
        {
          name: `<:humans:1178121099901407302> Humans`,
          value: `\`${members.filter((member) => !member.user.bot).size}\``,
          inline: false,
        },
        {
          name: `<:bots:1178121255182946304> Bots`,
          value: `\`${members.filter((member) => member.user.bot).size}\``,
          inline: false,
        },
        {
          name: `<:Roles:1178104338783141916> Roles`,
          value: `\`${message.guild.roles.cache.filter((r) => r).size}\``,
          inline: true,
        },
        {
          name: `<a:emojis:1178121560972869714> Emojis`,
          value: `\`${message.guild.emojis.cache.size}\``,
          inline: true,
        },
        {
          name: `<a:Channels:1178121785942745138> Channels`,
          value: `\`${message.guild.channels.cache.size}\``,
          inline: true,
        },
        {
          name: `<a:_booster:1178122151795097780> Server Boosts`,
          value: `\`${message.guild.premiumSubscriptionCount || "0"}\``,
          inline: false,
        },
        {
          name: `<:Booster:1178122269730553977> Server Level Boost`,
          value: `\`${message.guild.premiumTier || "0"}\``,
          inline: false,
        },
        {
          name: `<:language:1178122403637887077> Preferred Locale`,
          value: `\`${message.guild.preferredLocale}\``,
          inline: true,
        },
      ])
    return message.reply({ embeds: [embed] });
  }
});

