const { cmd } = require("../command");

// Contact for verified quoting
const quotedContact = {
  key: {
    fromMe: false,
    participant: `0@s.whatsapp.net`,
    remoteJid: "status@broadcast"
  },
  message: {
    contactMessage: {
      displayName: "RAHMANI-MD VERIFIED ✅",
      vcard: "BEGIN:VCARD\nVERSION:3.0\nFN:RAHMANI VERIFIED ✅\nORG:RAHMANI MD BOT;\nTEL;type=CELL;type=VOICE;waid=255693629079:+255760164530\nEND:VCARD"
    }
  }
};

cmd({
  pattern: "vv",
  alias: ["viewonce", "retrive"],
  react: '☢️',
  desc: "Owner Only - retrieve quoted view once message",
  category: "owner",
  filename: __filename
}, async (conn, mek, m, { from, isCreator }) => {
  try {
    if (!isCreator) {
      return await conn.sendMessage(from, {
        text: "*📛 This is an owner-only command.*",
        contextInfo: {
          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: "120363353854480831@newsletter",
            newsletterName: "𝚁𝙰𝙷𝙼𝙰𝙽𝙸-𝚇𝙼𝙳",
            serverMessageId: 13
          }
        }
      }, { quoted: quotedContact });
    }

    if (!m.quoted) {
      return await conn.sendMessage(from, {
        text: "*🤠 Please reply to a view once message.*",
        contextInfo: {
          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: "120363353854480831@newsletter",
            newsletterName: "𝚁𝙰𝙷𝙼𝙰𝙽𝙸-𝚇𝙼𝙳",
            serverMessageId: 13
          }
        }
      }, { quoted: quotedContact });
    }

    const buffer = await m.quoted.download?.();
    const mtype = m.quoted.mtype;

    if (!buffer || !mtype) {
      return await conn.sendMessage(from, {
        text: "❌ Unable to download the message or unsupported type.",
        contextInfo: {
          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: "120363353854480831@newsletter",
            newsletterName: "𝚁𝙰𝙷𝙼𝙰𝙽𝙸-𝚇𝙼𝙳",
            serverMessageId: 13
          }
        }
      }, { quoted: quotedContact });
    }

    let content = {};

    switch (mtype) {
      case "imageMessage":
        content = {
          image: buffer,
          caption: m.quoted.text || "📷 Image restored"
        };
        break;
      case "videoMessage":
        content = {
          video: buffer,
          caption: m.quoted.text || "🎥 Video restored"
        };
        break;
      case "audioMessage":
        content = {
          audio: buffer,
          mimetype: "audio/mp4",
          ptt: m.quoted.ptt || false
        };
        break;
      default:
        return await conn.sendMessage(from, {
          text: "❌ Only image, video, and audio view once messages are supported.",
          contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: "120363353854480831@newsletter",
              newsletterName: "𝚁𝙰𝙷𝙼𝙰𝙽𝙸-𝚇𝙼𝙳",
              serverMessageId: 13
            }
          }
        }, { quoted: quotedContact });
    }

    // Send restored content with newsletter context
    await conn.sendMessage(from, {
      ...content,
      contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: "120363353854480831@newsletter",
          newsletterName: "𝚁𝙰𝙷𝙼𝙰𝙽𝙸-𝚇𝙼𝙳",
          serverMessageId: 13
        }
      }
    }, { quoted: quotedContact });

  } catch (error) {
    console.error("vv Error:", error);
    await conn.sendMessage(from, {
      text: `❌ Error occurred while retrieving view once:\n\n${error.message || error}`
    }, { quoted: quotedContact });
  }
});
