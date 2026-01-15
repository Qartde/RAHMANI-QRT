const axios = require("axios");
const { cmd } = require("../command");
const { sleep } = require('../lib/functions');

// Quoted contact for newsletter context
const quotedContact = {
  key: {
    fromMe: false,
    participant: `0@s.whatsapp.net`,
    remoteJid: "status@broadcast"
  },
  message: {
    contactMessage: {
      displayName: "RAHMANI MD VERIFIED ✅",
      vcard: "BEGIN:VCARD\nVERSION:3.0\nFN:RAHMANI MD VERIFIED ✅\nORG:RAHMANI MD BOT;\nTEL;type=CELL;type=VOICE;waid=255693629079:+255760164530\nEND:VCARD"
    }
  }
};

cmd({
  pattern: "screenshot",
  react: "🔰",
  alias: ["ss", "ssweb"],
  desc: "Capture a full-page screenshot of a website.",
  category: "utility",
  use: ".screenshot <url>",
  filename: __filename,
}, async (conn, mek, msg, { from, args, reply }) => {
  try {
    const url = args[0];
    if (!url) return reply("❌ Please provide a URL\nExample: .screenshot https://google.com");
    if (!url.startsWith("http")) return reply("❌ URL must start with http:// or https://");

    const contextInfo = {
      forwardingScore: 999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: "120363353854480831@newsletter",
        newsletterName: "𝚁𝙰𝙷𝙼𝙰𝙽𝙸-𝚇𝙼𝙳",
        serverMessageId: 33
      }
    };

    await reply("🔄 Taking screenshot... Please wait", { quoted: quotedContact });

    await sleep(1500);

    const caption = `┏━━━━━━━━━━━━━━━━━━━━━━━┓
┃ 🖼️ *Screenshot Generated*
┣━━━━━━━━━━━━━━━━━━━━━━━
┃ > Its nova open the link 
┗━━━━━━━━━━━━━━━━━━━━━━━`;

    await conn.sendMessage(from, {
      image: { url: `https://image.thum.io/get/fullpage/${url}` },
      caption,
      contextInfo
    }, { quoted: quotedContact });

  } catch (error) {
    console.error("Screenshot Error:", error);

    const captionError = `┏━━━━━━━━━━━━━━━━━━━━━━━┓
┃ ❌ *Failed to capture screenshot*
┣━━━━━━━━━━━━━━━━━━━━━━━
┃ ✦ Please try again later
┗━━━━━━━━━━━━━━━━━━━━━━━`;

    await conn.sendMessage(from, {
      text: captionError,
      contextInfo
    }, { quoted: quotedContact });
  }
});
