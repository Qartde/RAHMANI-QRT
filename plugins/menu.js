const { cmd } = require('../command');
const moment = require('moment-timezone');

cmd({
  pattern: "menu",
  desc: "Display full bot command list",
  category: "system",
  filename: __filename,
}, async (Void, m, text, { prefix }) => {
  const runtime = () => {
    let sec = process.uptime();
    let hrs = Math.floor(sec / 3600);
    let mins = Math.floor((sec % 3600) / 60);
    let secs = Math.floor(sec % 60);
    return `${hrs}h ${mins}m ${secs}s`;
  };

  const date = moment.tz("Africa/Nairobi").format("DD/MM/YYYY");
  const time = moment.tz("Africa/Nairobi").format("HH:mm:ss");
  const uptime = runtime();

  const botName = "RAHMANI-MD";
  const ownerName = "RAHMANI";

  const menutext = `
╭───〘 *${botName} MENU* 〙───
│ 🤖 *Bot Name:* ${botName}
│ 👑 *Owner:* ${ownerName}
│ 📅 *Date:* ${date}
│ ⏰ *Time:* ${time}
│ ⚡ *Uptime:* ${uptime}
╰────────────────────

🧠 *AI COMMANDS*
★ . *ai*
★ . *gpt*
★ . *deepseek*
★ . *openai*
___________________________
🎵 *DOWNLOADER*
★ . *play*
★ . *yt*
★ . *mediafire*
★ . *tiktok*
★ . *fb*
★ . *apk*
____________________________
🎧 *CONVERTERS*
★ . *photo*
★ . *mp3*
★ . *mp4*
★ . *voice*
★ . *sticker*
★ . *attp*
_____________________________
🧩 *UTILITIES*
★ . *ping*
★ . *menu*
★ . *calc*
★ . *weather*
★ . *qrcode*
_____________________________
🧑‍💼 *OWNER COMMANDS*
★ . *setpp*
★ . *block*
★ . *unblock*
★ . *broadcast*
★ . *restart*
_____________________________
👥 *GROUP TOOLS*
★ . *tagall*
★ . *hidetag*
★ . *promote*
★ . *demote*
★ . *antilink*
_____________________________
🌌 *ANIME ZONE*
★ . *anime*
★ . *waifu*
★ . *neko*
★ . *cosplay*
_____________________________
🤣 *FUN ZONE*
★ . *truth*
★ . *dare*
★ . *fact*
★ . *quote*
★ . *joke*
_____________________________
💬 *AUTOMATION*
★ . *autoreply*
★ . *autovoice*
★ . *autoreact*
★ . *autostatus*
_____________________________
🎭 *REACT & STYLE*
★ . *react*
★ . *emojimix*
★ . *style*
_____________________________
🛠️ *LOGO MAKER*
★ . *logo*
★ . *3dtext*
★ . *marvel*
★ . *neon*
_____________________________
🎙️ *VOICE FX*
★ . *bass*
★ . *robot*
★ . *deep*
★ . *slow*
_____________________________
📥 *STORAGE & TOOLS*
★ . *addnote*
★ . *getnote*
★ . *delnote*
★ . *listnote*
_____________________________
📦 *SYSTEM*
★ . *alive*
★ . *owner*
★ . *script*
★ . *support*
_____________________________
`.trim();

  // Fake verification contact
  const fakeContact = {
    key: {
      fromMe: false,
      participant: "0@s.whatsapp.net",
      remoteJid: "status@broadcast"
    },
    message: {
      contactMessage: {
        displayName: "RAHMAN MD ✅",
        vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:RAHMANI\nORG:RAHMANI-MD;\nTEL;type=CELL;type=VOICE;waid=254700000000:+254 700 000000\nEND:VCARD`
      }
    }
  };

  const context = {
    isForwarded: true,
    forwardingScore: 999,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363353854480831@newsletter",
      newsletterName: "RAHMANI-MD Official Channel",
      serverMessageId: 100
    },
    externalAdReply: {
      title: "RAHMANI-QRT WhatsApp Bot",
      body: `By RAHMANI • ${date}`,
      mediaType: 1,
      renderLargerThumbnail: false,
      showAdAttribution: false,
      sourceUrl: "https://github.com/Qartde/RAHMANI-QRT"
    }
  };

  // Send menu without thumbnail
  await Void.sendMessage(m.chat, {
    image: { url: "https://files.catbox.moe/aktbgo.jpg" },
    caption: menutext,
    contextInfo: context,
  }, { quoted: fakeContact });
});
  
