const { cmd } = require('../command');

cmd({
  pattern: "repo",
  desc: "Show bot repository and deploy info",
  category: "system",
  react: "📦",
  filename: __filename
}, async (conn, m, { from }) => {

  const text = `
╭───❖ 「 *RAHMANI-QRT GitHub Repo* 」 ❖───⬣
│🔹 *Name:* RAHMANI-QRT
│🔸 *Owner:* Qartde
│📦 *Repo:* RAHMANI-QRT
│🌐 *URL:* https://github.com/Qartde/RAHMANI-QRT
│🤠 *Maintainer:* Rahmani
╰──────────────────────────────⬣

📘 *Description:*
RAHMANI-QRT is a Multi-functional WhatsApp Bot using Baileys library with powerful features and auto-deploy support.

🚀 *Deploy This Bot On:*
┌────────────────────┐
│ 🌐 Render.com
│ 🛠️ Railway.app
│ ☁️ Heroku.com
└────────────────────┘

📍 Simply fork or clone the repo, edit config file, and deploy using your preferred platform.

🔗 *GitHub:* https://github.com/Qartde/RAHMANI-QRT
⚡ *Powered by:* Rahmani
`;

  const vcard = {
    displayName: "RAHMANI-QRT Bot",
    vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:RAHMANI Bot\nORG:RAHMANI Official;\nTEL;type=CELL;type=VOICE;waid=254700000000:+254700000000\nX-USER-TYPE:BOT\nEND:VCARD`
  };

  await conn.sendMessage(from, {
    text,
    contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
        title: "RAHMANI-QRT GitHub Repo",
        body: "Deploy easily on Render | Railway | Heroku",
        thumbnailUrl: "https://files.catbox.moe/i9v0al.jpg",
        sourceUrl: "https://github.com/Qartde/RAHMANI-QRT",
        mediaType: 1,
        showAdAttribution: true,
        renderLargerThumbnail: true
      },
      forwardedNewsletterMessageInfo: {
        newsletterName: "RAHMANI-QRT Updates",
        newsletterJid: "120363392659022782@newsletter"
      },
      quotedMessage: {
        contactMessage: {
          displayName: "RAHMANI-QRT",
          vcard: vcard.vcard
        }
      }
    }
  }, { quoted: m });
});
      
