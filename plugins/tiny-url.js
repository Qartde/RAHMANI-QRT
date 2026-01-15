const { cmd } = require("../command");
const axios = require("axios");

// VCard Contact (B.M.B VERIFIED ✅)
const quotedContact = {
  key: {
    fromMe: false,
    participant: `0@s.whatsapp.net`,
    remoteJid: "status@broadcast"
  },
  message: {
    contactMessage: {
      displayName: "RAHMANI MD VERIFIED ✅",
      vcard: "BEGIN:VCARD\nVERSION:3.0\nFN:RAHMANI VERIFIED ✅\nORG:RAHMANI MD BOT;\nTEL;type=CELL;type=VOICE;waid=255693629079:+255760164530\nEND:VCARD"
    }
  }
};

// Newsletter context
const newsletterContext = {
  contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363353854480831@newsletter",
      newsletterName:   "𝚁𝙰𝙷𝙼𝙰𝙽𝙸-𝚇𝙼𝙳",
      serverMessageId: 1
    }
  }
};

cmd({
    pattern: "tiny",
    alias: ['short', 'shorturl'],
    react: "🫧",
    desc: "Makes URL tiny.",
    category: "convert",
    use: "<url>",
    filename: __filename,
},
async (conn, mek, m, { from, reply, args }) => {
    if (!args[0]) {
        return reply("*🏷️ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴀ ʟɪɴᴋ.*");
    }

    try {
        const link = args[0];
        const response = await axios.get(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(link)}`);
        const shortenedUrl = response.data;

        // Box style caption
        const caption = `┏━━━━━━━━━━━━━━━━━━━━━━━┓
┃ 🛡️ *URL Shortener*
┣━━━━━━━━━━━━━━━━━━━━━━━
┃ 🔗 Original: ${link}
┣━━━━━━━━━━━━━━━━━━━━━━━
┃ ✂️ Shortened: ${shortenedUrl}
┗━━━━━━━━━━━━━━━━━━━━━━━
🔗 Powered by RAHMANI-XMD`;

        // Send message with box, newsletter context, and quoted contact
        await conn.sendMessage(from, {
            text: caption,
            ...newsletterContext
        }, { quoted: quotedContact });

    } catch (e) {
        console.error("Error shortening URL:", e);
        reply("❌ An error occurred while shortening the URL. Please try again.");
    }
});
