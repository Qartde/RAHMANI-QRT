const { cmd } = require('../command');
const moment = require('moment-timezone');

cmd({
  pattern: "support",
  alias: ["supportgroup", "help", "channel"],
  desc: "Get RAHMANI-QRT support, channel & developer contact",
  category: "system",
  filename: __filename,
}, async (Void, m, text) => {

  const jtime = moment.tz('Africa/Nairobi').format("HH:mm:ss");
  const jdate = moment.tz('Africa/Nairobi').format("DD/MM/YY");

  // 🧾 Fake Verified Contact
  const fakeContact = {
    key: {
      fromMe: false,
      participant: "0@s.whatsapp.net",
      remoteJid: "status@broadcast"
    },
    message: {
      contactMessage: {
        displayName: "RAHMANI | RAHMANI-QRT",
        vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:RAHMANI | RAHMANI-QRT\nORG:RAHMANI;\nTEL;type=CELL;type=VOICE;waid=254700000000:+254 700 000000\nEND:VCARD`,
        jpegThumbnail: Buffer.alloc(0)
      }
    }
  };

  const contextInfo = {
    externalAdReply: {
      title: "📞 RAHMANI • Support & Channel",
      body: `🕒 ${jtime} | 📅 ${jdate}`,
      thumbnailUrl: 'https://files.catbox.moe/i9v0al.jpg',
      sourceUrl: 'https://whatsapp.com/channel/0029Vb3eLRU3QxS5CZHI131x',
      mediaType: 1,
      renderLargerThumbnail: true,
      showAdAttribution: true
    },
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363392659022782@newsletter",
      newsletterName: "RAHMANI Official"
    }
  };

  const supportText = `*🛠️ RAHMANI Support Center*\n\n╭─❍ *Support Links*\n│👥 Group: https://chat.whatsapp.com/DTnrZzULVtP5r0E9rhoFOj\n│📡 Channel: https://whatsapp.com/channel/0029Vb3eLRU3QxS5CZHI131x\n│📞 Dev: wa.me/255693629079 (RAHMANI)\n╰───────────────╮\n\n📌 Feel free to ask for help, request features or report bugs.\n\n⏰ *Time:* ${jtime}\n📅 *Date:* ${jdate}\n\n*Powered by Rahmani*`;

  await Void.sendMessage(m.chat, {
    text: supportText,
    contextInfo
  }, { quoted: fakeContact });
});
