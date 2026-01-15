const axios = require("axios");
const { cmd } = require("../command");

// Verified Contact Context
const quotedContact = {
  key: {
    fromMe: false,
    participant: `0@s.whatsapp.net`,
    remoteJid: "status@broadcast"
  },
  message: {
    contactMessage: {
      displayName: "RAHMANI MD VERIFIED ✅",
      vcard: "BEGIN:VCARD\nVERSION:3.0\nFN:RAHMANI MD VERIFIED ✅RAHMANI MD BOT;\nTEL;type=CELL;type=VOICE;waid=255693629079:+255760164530\nEND:VCARD"
    }
  }
};

cmd({
  pattern: "fancy",
  alias: ["font", "style"],
  react: "✍️",
  desc: "Convert text into various fonts.",
  category: "tools",
  filename: __filename
}, async (conn, m, store, { from, quoted, args, q, reply }) => {
  try {
    if (!q) {
      return reply("❎ *Please provide text to convert into fancy fonts.*\n\n_Example:_ `.fancy Hello`");
    }

    const apiUrl = `https://www.dark-yasiya-api.site/other/font?text=${encodeURIComponent(q)}`;
    const response = await axios.get(apiUrl);

    if (!response.data.status) {
      return reply("❌ *Error fetching fonts. Please try again later.*");
    }

    const fonts = response.data.result.map(item => `╭─── ${item.name} ───⬣\n${item.result}`).join("\n\n");

    const resultText = `╭─❏ *Fancy Fonts Generator*\n│\n│ ✏️ *Input:* ${q}\n╰──────────────⬣\n\n${fonts}\n\n╭───〔 Powered by 𝐑𝐀𝐇𝐌𝐀𝐍𝐈 ┃ 𝐗𝐌𝐃 〕───⬣`;

    await conn.sendMessage(from, {
      text: resultText,
      contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: "120363353854480831@newsletter",
          newsletterName: "𝚁𝙰𝙷𝙼𝙰𝙽𝙸-𝚇𝙼𝙳",
          serverMessageId: 12
        }
      }
    }, { quoted: quotedContact });

  } catch (error) {
    console.error("❌ Error in fancy command:", error);
    reply("⚠️ *An error occurred while fetching fancy fonts.*");
  }
});
