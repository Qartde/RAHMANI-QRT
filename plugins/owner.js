const { cmd } = require('../command');
const config = require('../config');

// Contact message for verified context
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
    pattern: "owner",
    react: "✅", 
    desc: "Get owner number",
    category: "main",
    filename: __filename
}, 
async (conn, mek, m, { from }) => {
    try {
        const ownerNumber = config.OWNER_NUMBER;
        const ownerName = config.OWNER_NAME;

        const vcard = 'BEGIN:VCARD\n' +
                      'VERSION:3.0\n' +
                      `FN:${ownerName}\n` +  
                      `TEL;type=CELL;type=VOICE;waid=${ownerNumber.replace('+', '')}:${ownerNumber}\n` + 
                      'END:VCARD';

        await conn.sendMessage(from, {
            contacts: {
                displayName: ownerName,
                contacts: [{ vcard }]
            }
        });

        const caption = `🚀 OWNER INFO 🚀
━━━━━━━━━━━━━━━━━━━━━━
📛 Name   : ${ownerName}
📞 Number : ${ownerNumber}
⚙️ Role   : Developer & Founder
📦 Version: 2.0.0 Beta
⚡ Powered by 𝚁𝙰𝙷𝙼𝙰𝙽𝙸-𝚇𝙼𝙳 ⚡`;

        await conn.sendMessage(from, {
            text: caption,
            contextInfo: {
                mentionedJid: [`${ownerNumber.replace('+', '')}@s.whatsapp.net`],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363353854480831@newsletter',
                    newsletterName: '𝚁𝙰𝙷𝙼𝙰𝙽𝙸-𝚇𝙼𝙳',
                    serverMessageId: 143
                }
            }
        }, { quoted: quotedContact });

    } catch (error) {
        console.error(error);
        reply(`An error occurred: ${error.message}`);
    }
});
