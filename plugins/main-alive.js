const { cmd } = require('../command');
const moment = require('moment-timezone');
const { runtime } = require('../lib/functions');

cmd({
  pattern: "alive",
  desc: "Show bot is running",
  category: "system",
  filename: __filename
}, async (Void, m) => {
  let time = moment.tz('Africa/Nairobi').format('HH:mm:ss');
  let date = moment.tz('Africa/Nairobi').format('DD/MM/YYYY');
  let up = runtime(process.uptime());

  let message = `
╭────[ *⚙ RAHMANI-QRT IS ALIVE ⚙* ]────╮
│
├ 🧿 *Time:* ${time}
├ 🗓 *Date:* ${date}
├ 💠 *Uptime:* ${up}
│
╰─⭓ *Powered by Rahmani*
`.trim();

  let vcard = {
    key: {
      fromMe: false,
      participant: "0@s.whatsapp.net",
      ...(m.chat ? { remoteJid: "status@broadcast" } : {})
    },
    message: {
      contactMessage: {
        displayName: "RAHMANI",
        vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:RAHMANI-QRT\nORG:Verified Bot;\nTEL;type=CELL;type=VOICE;waid=254700000000:+254700000000\nEND:VCARD`
      }
    }
  };

  await Void.sendMessage(m.chat, { text: message }, {
    quoted: vcard,
    contextInfo: {
      externalAdReply: {
        title: "RAHMANI-QRT WhatsApp Bot",
        body: "Alive & Running - Powered by Rahmani",
        mediaType: 1,
        renderLargerThumbnail: false,
        showAdAttribution: false,
        sourceUrl: '',
      },
      forwardingScore: 999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: "120363353854480831@newsletter",
        serverMessageId: "",
        newsletterName: "RAHMANI-QRT Verified Bot"
      }
    }
  });
});
          
