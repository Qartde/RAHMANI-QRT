const { cmd } = require('../command');

// Contact for verified appearance
const quotedContact = {
  key: {
    fromMe: false,
    participant: `0@s.whatsapp.net`,
    remoteJid: "status@broadcast"
  },
  message: {
    contactMessage: {
      displayName: "RAHMANI MD VERIFIED ✅",
      vcard: "BEGIN:VCARD\nVERSION:3.0\nFN:RAHMANI MD VERIFIED ✅\nORG:RAHMANI MD BOT;\nTEL;type=CELL;type=VOICE;waid=255693629079:+255760164530nEND:VCARD"
    }
  }
};

cmd({
  pattern: "hidetag",
  alias: ["tag", "h"],
  react: "🤠",
  desc: "To Tag all Members for Any Message/Media",
  category: "group",
  use: '.hidetag Hello',
  filename: __filename
},
async (conn, mek, m, {
  from, q, isGroup, isCreator, isAdmins,
  participants, reply
}) => {
  try {
    const isUrl = (url) => {
      return /https?:\/\/(www\.)?[\w\-@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([\w\-@:%_\+.~#?&//=]*)/.test(url);
    };

    if (!isGroup) return reply("❌ This command can only be used in groups.");
    if (!isAdmins && !isCreator) return reply("❌ Only group admins can use this command.");

    const mentionAll = {
      mentions: participants.map(u => u.id),
      contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: "120363353854480831@newsletter",
          newsletterName: "𝚁𝙰𝙷𝙼𝙰𝙽𝙸-𝚇𝙼𝙳",
          serverMessageId: 13
        }
      }
    };

    if (!q && !m.quoted) return reply("❌ Reply or write a message to tag all members.");

    if (m.quoted) {
      const type = m.quoted.mtype || '';
      const buffer = await m.quoted.download?.();

      switch (type) {
        case 'imageMessage':
          return await conn.sendMessage(from, {
            image: buffer,
            caption: m.quoted.text || "📷 Image",
            ...mentionAll
          }, { quoted: quotedContact });

        case 'videoMessage':
          return await conn.sendMessage(from, {
            video: buffer,
            caption: m.quoted.text || "🎥 Video",
            gifPlayback: m.quoted.message?.videoMessage?.gifPlayback || false,
            ...mentionAll
          }, { quoted: quotedContact });

        case 'audioMessage':
          return await conn.sendMessage(from, {
            audio: buffer,
            mimetype: "audio/mp4",
            ptt: m.quoted.message?.audioMessage?.ptt || false,
            ...mentionAll
          }, { quoted: quotedContact });

        case 'stickerMessage':
          return await conn.sendMessage(from, {
            sticker: buffer,
            ...mentionAll
          }, { quoted: quotedContact });

        case 'documentMessage':
          return await conn.sendMessage(from, {
            document: buffer,
            mimetype: m.quoted.message?.documentMessage?.mimetype || "application/octet-stream",
            fileName: m.quoted.message?.documentMessage?.fileName || "file",
            caption: m.quoted.text || "",
            ...mentionAll
          }, { quoted: quotedContact });

        case 'extendedTextMessage':
        default:
          return await conn.sendMessage(from, {
            text: `╭───⧈ *HIDETAG MESSAGE* ⧈\n│\n│ ${m.quoted.text || '📨 Message'}\n│\n╰──⧈ 𝐑𝐀𝐇𝐌𝐀𝐍𝐈-𝐗𝐌𝐃`,
            ...mentionAll
          }, { quoted: quotedContact });
      }
    }

    if (q) {
      return await conn.sendMessage(from, {
        text: `╭───⧈ *HIDETAG MESSAGE* ⧈\n│\n│ ${q}\n│\n╰──⧈ 𝐑𝐀𝐇𝐌𝐀𝐍𝐈 𝐗𝐌𝐃`,
        ...mentionAll
      }, { quoted: quotedContact });
    }

  } catch (e) {
    console.error("❌ Hidetag Error:", e);
    reply(`❌ *An error occurred:*\n${e.message}`);
  }
});
