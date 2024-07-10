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
  TextInputBuilder,      } = require('discord.js');

const config = require("../json/config.json");


const dbs = require('pro.db');

client.on("messageCreate", async msg => {
    let ch = dbs.get(`staff-${msg.guild.id}`)
    if (!ch) return;
   }) 
















client.on("interactionCreate", async (interaction) => {
  if (interaction.isButton()) {
    if (interaction.customId === "english") {
      interaction.reply({
        content: `> Community Rules 

> Please follow all of our rules during your stay.
> These rules may change at any time without notice.

> \`-\` Follow Discord TOS & Guidelines
> https://dis.gd/guidelines, https://dis.gd/terms.
> \`-\` Be Respectful
> Trolling, Toxicity, Racism, Homophobia, Sexism etc. Depending on severity, will result in a ban.
> \`-\` No NSFW
> This is a community server. Posting NSFW will result in a ban.
> E-Dating / Flirting is strictly prohibited.
> \`-\` No Advertising
> ALL advertising, in the server or dms will result in a ban.
> \`-\` No Sub-Servers
> This is when you take many of our members to your server to create your own communities. This will result in a ban.
> \`-\` Threats & Harassment
> Threatening, Bullying, Doxxing, or Blackmailing any user in the server or DMs will result in a ban.
> \`-\` Spamming
> Don't flood, mass-ping, or spam in any of the chats.
> \`-\` Harmful Links
> Posting suspicious links, or files will result in a warn/mute.
> \`-\` Images & Information
> Do not download or distribute another users information or images without permission. This will result in a ban.
> \`-\` Sensitive Topics
> Refrain from talking about self-harm, politics, etc.
> \`-\` Use Common Sense
> Just because its not in the rules, doesn't mean its allowed. Respect everyone and have fun meeting new people!`,
        ephemeral: true,
      });
    }
  }
  })

client.on("interactionCreate", async (interaction) => {
  if (interaction.isButton()) {
    if (interaction.customId === "arabic") {
      interaction.reply({
        content: `> قواعد المجتمع

  > يرجى اتباع جميع قواعدنا أثناء إقامتك.
  > هذه القواعد عرضة للتغيير في أي وقت دون إشعار.

  > \`-\` اتبع شروط الخدمة والإرشادات الخاصة بـ Discord
  > https://en.gd/terms، https://en.gd/guidelines.
  > \`-\` كن محترماً
  > التصيد، والسمية، والعنصرية، ورهاب المثلية، والتمييز الجنسي، وما إلى ذلك، اعتمادًا على الخطورة، سيؤدي إلى الحظر.
  > \`-\` لا يوجد NSFW
  > هذا هو خادم المجتمع.  سيؤدي نشر NSFW إلى الحظر.
  > التواصل الإلكتروني/المغازلة ممنوع منعا باتا.
  > \`-\` لا توجد إعلانات
  > جميع الإعلانات، على الخادم أو DMS سوف تسبب الحظر.
  > \`-\` لا يوجد خادم ثانوي
  > يحدث هذا عندما تأخذ العديد من أعضائنا إلى الخادم الخاص بك لإنشاء مجتمعك الخاص.  وهذا يؤدي إلى الحظر.
  > \`-\` التهديدات والمضايقات
  > التهديد أو التنمر أو التشهير أو الابتزاز لأي مستخدم على الخادم أو الرسائل المباشرة سيؤدي إلى الحظر.
  > \`-\` البريد العشوائي
  > لا تقم بإغراق أي من الدردشات أو إجراء اختبار اتصال جماعي أو إرسال بريد عشوائي إليها.
  > \`-\` رابط ضار
  > سيؤدي نشر الروابط أو الملفات المشبوهة إلى ظهور تحذيرات/كتم الصوت.
  > \`-\` الصورة والمعلومات
  > لا تقم بتنزيل أو توزيع معلومات أو صور مستخدم آخر دون إذن.  وهذا يؤدي إلى الحظر.
  > \`-\` مواضيع حساسة
  > تجنب الحديث عن إيذاء النفس أو السياسة أو ما إلى ذلك.
  > \`-\` استخدم الحس السليم
  > مجرد عدم وجوده في القواعد لا يعني أنه مسموح به.  احترم الجميع واستمتع بلقاء أشخاص جدد!`,
        ephemeral: true,
      });
    }
  }
  })

client.on("interactionCreate", async (interaction) => {
  if (interaction.isButton()) {
    if (interaction.customId === "kurdish") {
      interaction.reply({
        content: `> یاساکانی کۆمەڵگا

 > تکایە لە ماوەی مانەوەتدا هەموو یاساکانمان جێبەجێ بکە.
 > ئەم یاسایانە دەتوانن لە هەر کاتێکدا بەبێ ئاگادارکردنەوە بگۆڕدرێن.

 > \`-\` پەیڕەوی لە Discord TOS و ڕێنماییەکان بکە
 > https://dis.gd/terms، https://dis.gd/guidelines.
 > \`-\` ڕێزدار بە
 > ترۆلکردن، ژەهراویبوون، ڕەگەزپەرستی، هۆمۆفۆبیا، سێکسیزم و هتد بەپێی توندی، لە ئەنجامدا قەدەغەکردن دەبێت.
 > \`-\` نەخێر NSFW
 > ئەمە سێرڤەرێکی کۆمەلگایە.  پۆستکردنی NSFW دەبێتە هۆی قەدەغەکردن.
 > پەیوەندی ئەلیکترۆنی / فلێرتکردن بە توندی قەدەغەیە.
 > \`-\` هیچ ڕیکلامێک نییە
 > هەموو ڕێکلامەکان، لە سێرڤەر یان dms دەبێتە هۆی قەدەغەکردن.
 > \`-\` هیچ سێرڤەرێکی لاوەکی نییە
 > ئەمەش کاتێکە کە زۆرێک لە ئەندامەکانمان دەبەیت بۆ سێرڤەرەکەت بۆ ئەوەی کۆمەڵگەی تایبەت بە خۆت دروست بکەیت.  ئەمەش دەبێتە هۆی قەدەغەکردن.
 > \`-\` هەڕەشە و هەراسانکردن
 > هەڕەشەکردن، قسەکردن بە قسەی زل، دۆکسکردن، یان ڕەشبگیریکردنی هەر بەکارهێنەرێک لە سێرڤەر یان دی ئێمەکاندا دەبێتە هۆی قەدەغەکردن.
 > \`-\` سپامکردن
 > لە هیچ کام لە چاتەکاندا لافاو و ماس پینگ و سپام مەکە.
 > \`-\` لینکی زیانبەخش
 > پۆستکردنی بەستەری گوماناوی، یان فایلەکان دەبێتە هۆی ئاگادارکردنەوە/بێدەنگکردن.
 > \`-\` وێنە و زانیاری
 > بەبێ مۆڵەت زانیاری یان وێنەی بەکارهێنەرێکی تر دابەزێنە یان دابەشی مەکە.  ئەمەش دەبێتە هۆی قەدەغەکردن.
 > \`-\` بابەتگەلی هەستیار
 > خۆت بەدوور بگرە لە قسەکردن لەسەر زیانگەیاندن بە خۆت، سیاسەت و هتد.
 > \`-\` عەقڵی ساغ بەکاربهێنە
 > تەنها لەبەر ئەوەی لە یاساکاندا نییە، بەو مانایە نییە کە ڕێگەی پێدراوە.  ڕێز لە هەمووان بگرن و کاتێکی خۆش بەسەر بەرە لەگەڵ کەسانی نوێ ناسین!`,
        ephemeral: true,
      });
    }
  }
  })

client.on("interactionCreate", async (interaction) => {
  if (interaction.isButton()) {
    if (interaction.customId === "zinfo") {
      let embed = new EmbedBuilder()
         
     .setTitle(`ZoYo Bot Discord`)
     .setFooter({
        iconURL: `https://cdn.discordapp.com/attachments/1186790492160143452/1187860245947621426/netty_-1.png?ex=65986c10&is=6585f710&hm=00d8db301bed21fda2a368298612cd65b97a94f2f6091e67ea5174ceadedd04d&`,
        text: `${interaction.guild.name}`,
      })
     .setThumbnail(`https://cdn.discordapp.com/attachments/1186790492160143452/1187860245947621426/netty_-1.png?ex=65986c10&is=6585f710&hm=00d8db301bed21fda2a368298612cd65b97a94f2f6091e67ea5174ceadedd04d&`)

      .setDescription(`- **Zoyo is a Discord bot that offers a variety of commands and features to enhance the Discord experience.  The bot allows users to easily manage their servers and interact with other members.

Some of the general commands available with Zoyo include the ability to view server information, set welcome messages, and manage roles and permissions.  Users can also use commands to generate GIFs, memes, and random images and gifs giveaways music autoroles.

Zoyo also has music commands, allowing users to listen to high-quality songs directly on Discord.

With Zoyo you can enter the welcomer command and it will do its job automatically

Zoyo can automatically set an autorole when someone logs into your server

Zoyo giveaway You can first type /set-giveaway Select the room and type /gstart

And you can use end and all systems

With Zoyo you can set auto tax disable tax and disable the command whenever you want

Zoyo bot is a bot that includes more than 5 categories of commands, one of the most famous commands is the Economic command.

Another example is that the Zoyo bot has acquired a reputation in a short time, and people designate it as a successful bot.

Another notable feature of Zoyo is the giveaway config commands, which allows server administrators to set up and manage giveaways on their server.  The bot provides a simple and intuitive way to create and run giveaways, making it easier for community managers to engage their members.

Overall, Zoyo is a versatile and feature-rich Discord bot that offers a range of functionalities to enhance the user experience.  With its extensive list of commands and easy-to-use interface, it’s a great tool for server management and community engagement.

We always aim to please you. If you want anything, go to server Discord**`)
       const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setStyle(ButtonStyle.Link)
         .setLabel('Support')
        .setURL("https://discord.gg/5wqgNWqhUH")
        .setEmoji(`<:emoji_56:1187862524247408650>`)
    );

      interaction.reply({
        embeds: [embed],
        components: [row],
        ephemeral: true,
      });
    }
  }
  })


client.on("interactionCreate", async (interaction) => {
  if (!interaction.channel.guild) return;
  if (interaction.isStringSelectMenu()) {
    if (interaction.customId == "select") {
      let vl = interaction.values[0];
      if (vl === "discordbots") {
        var javascript = new ActionRowBuilder().addComponents(
          new StringSelectMenuBuilder()
            .setCustomId("select2")
            .setPlaceholder("Mystic host")
            .addOptions([
              {
                label: "Javascript",
                description: "Javascript language",
                value: "javascript",
              },
            ])
        );
        interaction.reply({ components: [javascript], ephemeral: true });
      }
    }
  }
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.channel.guild) return;
  if (interaction.isStringSelectMenu()) {
    if (interaction.customId == "select2") {
      let vl = interaction.values[0];
      if (vl === "javascript") {
        const modal = new ModalBuilder()
          .setTitle("Create Bot")
          .setCustomId("javascript");
        const name = new TextInputBuilder()
          .setCustomId("l2")
          .setLabel(`Add Name`)
          .setMinLength(2)
          .setMaxLength(25)
          .setPlaceholder(`Put Name Here`)
          .setRequired(true)
          .setStyle(TextInputStyle.Short);
        const link = new TextInputBuilder()
          .setCustomId("l1")
          .setLabel(`Add Link`)
          .setMinLength(2)
          .setMaxLength(4000)
          .setPlaceholder(`Put Link Here`)
          .setRequired(true)
          .setStyle(TextInputStyle.Short);
        const rows = [name, link].map((component) =>
          new ActionRowBuilder().addComponents(component)
        );
        modal.addComponents(...rows);
        interaction.showModal(modal);
      }
      if (interaction.customId === "staff_accept") {
        const getIdFromFooter = interaction.message.embeds[0].footer.text;
        const getMember = await interaction.guild.members.fetch(
          getIdFromFooter
        );
        await getMember.roles.add(config.staffid).catch((err) => {
          console.error(err);
          return interaction.reply({
            content: ":x: Error got a problem",
          });
        });
        await interaction.reply({
          content: `${config.yesmessage} ${getMember.user.tag}`,
        });
        const newDisabledRow = new ActionRowBuilder()
          .setComponents(
            new ButtonBuilder()
              .setCustomId("staff_accept_ended")
              .setDisabled()
              .setStyle(ButtonStyle.Success)
              .setLabel("Accept")
          )
          .addComponents(
            new ButtonBuilder()
              .setCustomId("staff_deny_ended")
              .setDisabled()
              .setStyle(ButtonStyle.Danger)
              .setLabel("Reject")
          );
        interaction.message.edit({ components: [newDisabledRow] });
      }
      if (interaction.customId === "staff_deny") {
        const getIdFromFooter = interaction.message.embeds[0].footer?.text;
        const getMember = await interaction.guild.members.fetch(
          getIdFromFooter
        );
        await interaction.reply({
          content: `${config.nomessage} ${getMember.user}.`,
        });
        const newDisabledRow = new ActionRowBuilder()
          .setComponents(
            new ButtonBuilder()
              .setCustomId("staff_accept_ended")
              .setDisabled()
              .setStyle(ButtonStyle.Success)
              .setLabel("Accept")
          )
          .addComponents(
            new ButtonBuilder()
              .setCustomId("staff_deny_ended")
              .setDisabled()
              .setStyle(ButtonStyle.Danger)
              .setLabel("Reject")
          );
        interaction.message.edit({ components: [newDisabledRow] });
      }
    }
  }
  if (interaction.isModalSubmit()) {
    if (interaction.customId === "javascript") {
      const l1 = interaction.fields.getTextInputValue("l1");

      interaction.reply({
        content: `${config.sendhost}`,
        ephemeral: true,
      });
      const host = interaction.guild.channels.cache.get(config.host);
      if (!host) return;
      ///     {
      ///   name: `${config.bq2}`,
      // value:
      ///`\`\`\`             let ReqAdd = await axios.get(`${l1}/API/uptime/add`, {
      //  })
      ///${q2}
      ///\`\`\``,
      //inline:true
      // },

      host.send({
        content: `<@275371655675510785> <@499223065176178688> Write: \`$add\` ${l1}`,
      });
    }
  }

  if (interaction.isModalSubmit()) {
    if (interaction.customId === "javascript") {
      const l1 = interaction.fields.getTextInputValue("l1");
      const hosted = interaction.guild.channels.cache.get(config.hosted);
       let ahmed = client.channels.cache.find(ch => ch.id === '1187766955072032839')

      if (!hosted) return;
      ///     {
      ///   name: `${config.bq2}`,
      // value:
      ///`\`\`\`
      ///${q2}
      ///\`\`\``,
      //inline:true
      // },

      hosted.send({
        content: `**${interaction.user.tag} Was Hosted New Bot**
- **Type:** \`Javascript\``,
      });
    }
  }
})


client.on("interactionCreate", async (interaction) => {
  if (interaction.isButton()) {
    if (interaction.customId === "addbots") {
      interaction.reply({
        content: `Here's a taste of what's new!`,
        ephemeral: true,
      });
    }
  }
  })


client.on("interactionCreate", async (interaction) => {
  if (interaction.isButton()) {
    if (interaction.customId === "esay") {
      interaction.reply({
        content: `**Powered by [@y.ug](https://discord.com/users/275371655675510785)**`,
        ephemeral: true,
      });
    }
  }
  })


client.on("interactionCreate", async (interaction) => {
  if (interaction.isButton()) {
    if (interaction.customId === "apply") {
      const modal = new ModalBuilder()
        .setTitle("Submission to management")
        .setCustomId("staff_apply");
      const nameComponent = new TextInputBuilder()
        .setCustomId("q1")
        .setLabel(`${config.q1}`)
        .setMinLength(2)
        .setMaxLength(25)
        .setRequired(true)
        .setStyle(TextInputStyle.Short);
      const ageComponent = new TextInputBuilder()
        .setCustomId("q2")
        .setLabel(`${config.q2}`)
        .setMinLength(1)
        .setMaxLength(2)
        .setStyle(TextInputStyle.Short)
        .setRequired(true);
      const q4 = new TextInputBuilder()
        .setCustomId("q4")
        .setLabel(`${config.q4}`)
        .setMaxLength(400)
        .setStyle(TextInputStyle.Short)
        .setRequired(true);
      const q5 = new TextInputBuilder()
        .setCustomId("q5")
        .setLabel(`${config.q5}`)
        .setMaxLength(400)
        .setStyle(TextInputStyle.Paragraph)
        .setRequired(true);
      const rows = [nameComponent, ageComponent, q4, q5].map(
        (component) => new ActionRowBuilder().addComponents(component)
      );
      modal.addComponents(...rows);
      interaction.showModal(modal);
    }
    if (interaction.customId === "staff_accept") {
      if (
        !interaction.member.permissions.has(
          PermissionsBitField.Flags.ManageChannels
        )
      )
        return interaction.reply({
          content: "Check Your Permission And Turn On The Administrator",
          ephemeral: true,
        });

      const getIdFromFooter = interaction.message.embeds[0].footer.text;
      const getMember = await interaction.guild.members.fetch(getIdFromFooter);
      await getMember.roles.add(config.staffid).catch((err) => {
        console.error(err);
        return interaction.reply({
          content: ":x: Error got a problem",
        });
      });
      const applyr = interaction.guild.channels.cache.get(config.apply);
      if (!applyr) return;
      let applied = new EmbedBuilder()
        .setTitle(`Dark Side Community staff application`)
        .setDescription(
          `\`Accepted ${getMember.user.tag}\`
${config.yesmessage}`
        )
        .setColor(`#58E688`)
        .setFooter({ text: `© Copyright by @y.ug Community` });

      await applyr.send({
        embeds: [applied],
        content: `<@${getMember.user.id}>`,
      });
      const newDisabledRow = new ActionRowBuilder()
        .setComponents(
          new ButtonBuilder()
            .setCustomId("staff_accept_ended")
            .setDisabled()
            .setStyle(ButtonStyle.Success)
            .setLabel("Accept")
        )
        .addComponents(
          new ButtonBuilder()
            .setCustomId("staff_deny_ended")
            .setDisabled()
            .setStyle(ButtonStyle.Danger)
            .setLabel("Reject")
        );
      interaction.message.edit({ components: [newDisabledRow] });
    }
    if (interaction.customId === "staff_deny") {
      if (
        !interaction.member.permissions.has(
          PermissionsBitField.Flags.ManageChannels
        )
      )
        return interaction.reply({
          content: "Check Your Permission And Turn On The Administrator",
          ephemeral: true,
        });
      const getIdFromFooter = interaction.message.embeds[0].footer?.text;
      const getMember = await interaction.guild.members.fetch(getIdFromFooter);
      const napply = interaction.guild.channels.cache.get(config.apply);
      if (!napply) return;
      let napplye = new EmbedBuilder()
        .setTitle(`Dark Side staff application`)
        .setDescription(
          `\`Rejected ${getMember.user.tag}\`
${config.nomessage}`
        )
        .setColor(`#E64B4B`)
        .setFooter({ text: `© Copyright by @y.ug` });

      await napply.send({
        embeds: [napplye],
        content: `<@${getMember.id}>`,
      });
      const newDisabledRow = new ActionRowBuilder()
        .setComponents(
          new ButtonBuilder()
            .setCustomId("staff_accept_ended")
            .setDisabled()
            .setStyle(ButtonStyle.Success)
            .setLabel("Accept")
        )
        .addComponents(
          new ButtonBuilder()
            .setCustomId("staff_deny_ended")
            .setDisabled()
            .setStyle(ButtonStyle.Danger)
            .setLabel("Reject")
        );
      interaction.message.edit({ components: [newDisabledRow] });
    }
  }
  if (interaction.isModalSubmit()) {
    if (interaction.customId === "staff_apply") {
      const q1 = interaction.fields.getTextInputValue("q1");
      const q2 = interaction.fields.getTextInputValue("q2");
      const q4 = interaction.fields.getTextInputValue("q4");
      const q5 = interaction.fields.getTextInputValue("q5");
      interaction.reply({
        content: `${config.donesend}`,
        ephemeral: true,
      });
      const staffSubmitChannel = interaction.guild.channels.cache.get(
        config.staffroom
      );

      const embed = new EmbedBuilder()
        .setAuthor({
          name: interaction.user.tag,
          iconURL: interaction.user.displayAvatarURL(),
        })
        .setColor(config.embedcolor)
        .setFooter({ text: interaction.user.id })
        .setTimestamp()
        .setThumbnail(interaction.user.displayAvatarURL())
        .addFields(
          {
            name: `${config.q1}`,
            value: q1,
            inline: true,
          },
          {
            name: `${config.q2}`,
            value: q2,
            inline: true,
          },
          {
            name: `${config.q4}`,
            value: q4,
            inline: true,
          },
           {
            name: `${config.q5}`,
            value: q5,
            inline: true,
          }
        );
      const row = new ActionRowBuilder()
        .addComponents(
          new ButtonBuilder()
            .setCustomId("staff_accept")
            .setLabel("Accept")
            .setStyle(ButtonStyle.Success)
        )
        .addComponents(
          new ButtonBuilder()
            .setCustomId("staff_deny")
            .setLabel("Reject")
            .setStyle(ButtonStyle.Danger)
        );

      staffSubmitChannel.send({
        content: `<@&1179448845986447441> <@&1179751021786963988>`,
        embeds: [embed],
        components: [row],
      });
    }
  }

});







client.on("interactionCreate", async (interaction) => {
  if (interaction.isButton()) {
    if (interaction.customId === "zapply") {
      const modal = new ModalBuilder()
        .setTitle("Submission to management")
        .setCustomId("zstaff_apply");
      const nameComponent = new TextInputBuilder()
        .setCustomId("zq1")
        .setLabel(`${config.zq1}`)
        .setMinLength(2)
      .setPlaceholder(`${config.zh1}`)
        .setMaxLength(25)
        .setRequired(true)
        .setStyle(TextInputStyle.Short);
      const emailcom = new TextInputBuilder()
        .setCustomId("email")
        .setLabel(`${config.email}`)
        .setMinLength(2)
      .setPlaceholder(`${config.zemail}`)
        .setMaxLength(25)
        .setRequired(true)
        .setStyle(TextInputStyle.Short);
      const ageComponent = new TextInputBuilder()
        .setCustomId("zq2")
        .setLabel(`${config.zq2}`)
        .setMinLength(1)
      .setPlaceholder(`${config.zh2}`)
        .setMaxLength(2)
        .setStyle(TextInputStyle.Short)
        .setRequired(true);
      const zq3 = new TextInputBuilder()
        .setCustomId("zq3")
        .setLabel(`${config.zq3}`)
        .setPlaceholder(`${config.zh3}`)
        .setMaxLength(400)
        .setStyle(TextInputStyle.Short)
        .setRequired(true);
      const zq4 = new TextInputBuilder()
        .setCustomId("zq4")
        .setLabel(`${config.zq4}`)
        .setMaxLength(400)
      .setPlaceholder(`${config.zh4}`)

        .setStyle(TextInputStyle.Paragraph)
        .setRequired(true);
      const rows = [nameComponent, emailcom, ageComponent, zq3, zq4].map(
        (component) => new ActionRowBuilder().addComponents(component)
      );
      modal.addComponents(...rows);
      interaction.showModal(modal);
    }
    if (interaction.customId === "zstaff_accept") {
      if (
        !interaction.member.permissions.has(
          PermissionsBitField.Flags.ManageChannels
        )
      )
        return interaction.reply({
          content: "Check Your Permission And Turn On The Administrator",
          ephemeral: true,
        });

      const getIdFromFooter = interaction.message.embeds[0].footer.text;
      const getMember = await interaction.guild.members.fetch(getIdFromFooter);
      await getMember.roles.add(config.zstaffid).catch((err) => {
        console.error(err);
        return interaction.reply({
          content: ":x: Error got a problem",
        });
      });
      const applyr = interaction.guild.channels.cache.get(config.zapply);
      if (!applyr) return;
      let applied = new EmbedBuilder()
        .setTitle(`Zoyo Community staff application`)
        .setDescription(
          `\`Accepted ${getMember.user.tag}\``
        )
        .setColor(`#58E688`)
        .setFooter({ text: `© Copyright by Zoyo Community` });

      await applyr.send({
        embeds: [applied],
        content: `<@${getMember.user.id}>`,
      });
      const newDisabledRow = new ActionRowBuilder()
        .setComponents(
          new ButtonBuilder()
            .setCustomId("zstaff_accept_ended")
            .setDisabled()
            .setStyle(ButtonStyle.Success)
            .setLabel("Accept")
        )
        .addComponents(
          new ButtonBuilder()
            .setCustomId("zstaff_deny_ended")
            .setDisabled()
            .setStyle(ButtonStyle.Danger)
            .setLabel("Reject")
        );
      interaction.message.edit({ components: [newDisabledRow] });
    }
    if (interaction.customId === "zstaff_deny") {
      if (
        !interaction.member.permissions.has(
          PermissionsBitField.Flags.ManageChannels
        )
      )
        return interaction.reply({
          content: "Check Your Permission And Turn On The Administrator",
          ephemeral: true,
        });
      const getIdFromFooter = interaction.message.embeds[0].footer?.text;
      const getMember = await interaction.guild.members.fetch(getIdFromFooter);
      const napply = interaction.guild.channels.cache.get(config.apply);
      if (!napply) return;
      let napplye = new EmbedBuilder()
        .setTitle(`Zoyo Community staff application`)
        .setDescription(
          `\`Rejected ${getMember.user.tag}\``
        )
        .setColor(`#E64B4B`)
        .setFooter({ text: `© Copyright by Zoyo Community`});

      await napply.send({
        embeds: [napplye],
        content: `<@${getMember.id}>`,
      });
      const newDisabledRow = new ActionRowBuilder()
        .setComponents(
          new ButtonBuilder()
            .setCustomId("zstaff_accept_ended")
            .setDisabled()
            .setStyle(ButtonStyle.Success)
            .setLabel("Accept")
        )
        .addComponents(
          new ButtonBuilder()
            .setCustomId("zstaff_deny_ended")
            .setDisabled()
            .setStyle(ButtonStyle.Danger)
            .setLabel("Reject")
        );
      interaction.message.edit({ components: [newDisabledRow] });
    }
  }
  if (interaction.isModalSubmit()) {
    if (interaction.customId === "zstaff_apply") {
      const zq1 = interaction.fields.getTextInputValue("zq1");
       const email = interaction.fields.getTextInputValue("email");
      const zq2 = interaction.fields.getTextInputValue("zq2");
      const zq3 = interaction.fields.getTextInputValue("zq3");
      const zq4 = interaction.fields.getTextInputValue("zq4");
      interaction.reply({
        content: `${config.zdone}`,
        ephemeral: true,
      });
      const zstaffroom = interaction.guild.channels.cache.get(
        config.zstaffroom
      );

      const embed = new EmbedBuilder()
        .setAuthor({
          name: interaction.user.tag,
          iconURL: interaction.user.displayAvatarURL(),
        })
        .setColor(config.embedcolor)
        .setFooter({ text: interaction.user.id })
        .setTimestamp()
        .setThumbnail(interaction.user.displayAvatarURL())
        .addFields(
          {
            name: `User Name:`,
            value: zq1,
            inline: true,
          },
          {
            name: `Email:`,
            value: email,
            inline: true,
          },
          {
            name: `Old:`,
            value: zq2,
            inline: true,
          },
          {
            name: `Can Support Zoyo:`,
            value: zq3,
            inline: true,
          },
           {
            name: `Reason Of Submit:`,
            value: zq4,
            inline: true,
          }
        );
      const row = new ActionRowBuilder()
        .addComponents(
          new ButtonBuilder()
            .setCustomId("zstaff_accept")
            .setLabel("Accept")
            .setStyle(ButtonStyle.Success)
        )
        .addComponents(
          new ButtonBuilder()
            .setCustomId("zstaff_deny")
            .setLabel("Reject")
            .setStyle(ButtonStyle.Danger)
        );

      zstaffroom.send({
        content: `<@&1188510871371141172>`,
        embeds: [embed],
        components: [row],
      });
    }
  }

});

client.on("interactionCreate", async (interaction) => {
  if (interaction.isButton()) {
    if (interaction.customId === "buy") {
      var row = new ActionRowBuilder().addComponents(
        new StringSelectMenuBuilder()
          .setCustomId("select")
          .setPlaceholder("Press A Category To Select a Page")
          .addOptions([
            {
              label: "Probot Tax",
              description: "Click Here To Create.",
              value: "taxbot",
              emoji: "<:emoji_35:1180492903328530453>",
            },
          ])
      );
      interaction.reply({ components: [row], ephemeral: true });
    }
  }
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.channel.guild) return;
  if (interaction.isStringSelectMenu()) {
    if (interaction.customId == "select") {
      let vl = interaction.values[0];
      if (vl === "taxbot") {
        const modal = new ModalBuilder()
          .setTitle("Create Bot")
          .setCustomId("bots4");
        const nameComponent = new TextInputBuilder()
          .setCustomId("bq1")
          .setLabel(`${config.bq1}`)
          .setMinLength(2)
          .setPlaceholder(`${config.bp1}`)
          .setMaxLength(25)
          .setRequired(true)
          .setStyle(TextInputStyle.Short);
        const ageComponent = new TextInputBuilder()
          .setCustomId("bq2")
          .setLabel(`${config.bq2}`)
          .setMinLength(2)
          .setPlaceholder(`${config.bp2}`)
          .setMaxLength(120)
          .setStyle(TextInputStyle.Short)
          .setRequired(true);
        const whyYou = new TextInputBuilder()
          .setCustomId(`bq3`)
          .setLabel(`${config.bq3}`)
          .setPlaceholder(`${config.bp3}`)
          .setMaxLength(2)
          .setStyle(TextInputStyle.Short)
          .setRequired(true);
        const q4 = new TextInputBuilder()
          .setCustomId("bq4")
          .setLabel(`${config.bq4}`)
          .setPlaceholder(`${config.bp4}`)
          .setMaxLength(400)
          .setStyle(TextInputStyle.Short)
          .setRequired(true);
        const rows = [nameComponent, ageComponent, whyYou, q4].map(
          (component) => new ActionRowBuilder().addComponents(component)
        );
        modal.addComponents(...rows);
        interaction.showModal(modal);
      }
      if (interaction.customId === "staff_accept") {
        const getIdFromFooter = interaction.message.embeds[0].footer.text;
        const getMember = await interaction.guild.members.fetch(
          getIdFromFooter
        );
        await getMember.roles.add(config.staffid).catch((err) => {
          console.error(err);
          return interaction.reply({
            content: ":x: Error got a problem",
          });
        });
        await interaction.reply({
          content: `${config.yesmessage} ${getMember.user.tag}`,
        });
        const newDisabledRow = new ActionRowBuilder()
          .setComponents(
            new ButtonBuilder()
              .setCustomId("staff_accept_ended")
              .setDisabled()
              .setStyle(ButtonStyle.Success)
              .setLabel("Accept")
          )
          .addComponents(
            new ButtonBuilder()
              .setCustomId("staff_deny_ended")
              .setDisabled()
              .setStyle(ButtonStyle.Danger)
              .setLabel("Reject")
          );
        interaction.message.edit({ components: [newDisabledRow] });
      }
      if (interaction.customId === "staff_deny") {
        const getIdFromFooter = interaction.message.embeds[0].footer?.text;
        const getMember = await interaction.guild.members.fetch(
          getIdFromFooter
        );
        await interaction.reply({
          content: `${config.nomessage} ${getMember.user}.`,
        });
        const newDisabledRow = new ActionRowBuilder()
          .setComponents(
            new ButtonBuilder()
              .setCustomId("staff_accept_ended")
              .setDisabled()
              .setStyle(ButtonStyle.Success)
              .setLabel("Accept")
          )
          .addComponents(
            new ButtonBuilder()
              .setCustomId("staff_deny_ended")
              .setDisabled()
              .setStyle(ButtonStyle.Danger)
              .setLabel("Reject")
          );
        interaction.message.edit({ components: [newDisabledRow] });
      }
    }
  }
  if (interaction.isModalSubmit()) {
    if (interaction.customId === "bots4") {
      const bq1 = interaction.fields.getTextInputValue("bq1");
      const bq2 = interaction.fields.getTextInputValue("bq2");
      const bq3 = interaction.fields.getTextInputValue("bq3");
      const bq4 = interaction.fields.getTextInputValue("bq4");
      const botlog = interaction.guild.channels.cache.get(config.botlog);
      if (!botlog) return;
      const embed = new EmbedBuilder()
        .setAuthor({
          name: interaction.user.tag,
          iconURL: interaction.user.displayAvatarURL(),
        })
        .setColor(config.embedcolor)
        .setFooter({ text: interaction.user.id })
        .setTimestamp()
        .setThumbnail(interaction.user.displayAvatarURL())
        .addFields(
          {
            name: `${config.bq1}`,
            value: bq1,
            inline: true,
          },
          {
            name: `${config.bq2}`,
            value: bq2,
            inline: true,
          },
          {
            name: `${config.bq3}`,
            value: bq3,
            inline: true,
          },
          {
            name: `${config.bq4}`,
            value: bq4,
            inline: true,
          }
        );
      const row = new ActionRowBuilder()
        .addComponents(
          new ButtonBuilder()
            .setCustomId("staff_accept")
            .setLabel("Accept")
            .setStyle(ButtonStyle.Success)
        )
        .addComponents(
          new ButtonBuilder()
            .setCustomId("staff_deny")
            .setLabel("Reject")
            .setStyle(ButtonStyle.Danger)
        );

      botlog.send({
        embeds: [embed],
        components: [row],
      });
    }
  }
  if (interaction.isModalSubmit()) {
    if (interaction.customId === "bots4") {
      const bq1 = interaction.fields.getTextInputValue("bq1");
      const bq3 = interaction.fields.getTextInputValue("bq3");

      const bq2 = interaction.fields.getTextInputValue("bq2");
      const row = new ActionRowBuilder()
        .addComponents(
          new ButtonBuilder()
            .setURL(
              `https://discord.com/oauth2/authorize?client_id=${bq2}&permissions=534723950664&scope=bot%20applications.commands`
            )
            .setLabel("Invite Your Bot")
            .setStyle(ButtonStyle.Link)
        )
        .addComponents(
          new ButtonBuilder()
            .setURL(
              "https://replit.com/@Iaijd7asaneii/Tax-probot-red-Developer-Coding?v=1"
            )
            .setLabel("Bot Project")
            .setStyle(ButtonStyle.Link)
        );
      let embed = new EmbedBuilder().setTitle(
        `The bot has been successfully launched`
      ).setDescription(`- command status: \`Employed\`
**Bot Information**
- Name: \`${bq1}\`
- ID: \`${bq2}\`
- Bot Type: \`Probot Tax\`
- Bot Prefix: \`${bq3}\`
`);
      interaction.reply({
        embeds: [embed],
        components: [row],
        content: `${config.send}`,
        ephemeral: true,
      });
      const completed = interaction.guild.channels.cache.get(config.completed);
      if (!completed) return;
      ///     {
      ///   name: `${config.bq2}`,
      // value:
      ///`\`\`\`
      ///${q2}
      ///\`\`\``,
      //inline:true
      // },

      completed.send({
        content: `**${interaction.user.tag} Was Created New Bot**
- **Name:** \`${bq1}\`
- **Type:** \`Probot Tax\``,
      });
    }
  }
});

