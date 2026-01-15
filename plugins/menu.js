const config = require('../config');
const { cmd } = require('../command');
const fs = require('fs');
const path = require('path');
const os = require('os');

const quotedContact = {
  key: {
    fromMe: false,
    participant: `0@s.whatsapp.net`,
    remoteJid: "status@broadcast"
  },
  message: {
    contactMessage: {
      displayName: "RAHMANI XMD VERIFIED ✅",
      vcard: `BEGIN:VCARD
VERSION:3.0
FN:RAHMANI MD VERIFIED ✅
ORG:RAHMANI MD BOT;
TEL;type=CELL;type=VOICE;waid=255693629079:+255760164530
END:VCARD`
    }
  }
};

cmd({
  pattern: "menu",
  alias: ["allmenu", "command"],
  use: '.menu',
  desc: "menu the bot",
  category: "menu",
  react: "🌕",
  filename: __filename
}, async (conn, mek, m, { from, reply }) => {
  try {
    const randomIndex = Math.floor(Math.random() * 10) + 1;
    const imagePath = path.join(__dirname, '..', 'plugins', `menu${randomIndex}.jpg`);
    const imageBuffer = fs.readFileSync(imagePath);

    let dec =  `
╭━━━《 ⚙️ RAHMANI XMD BOT ⚙️ 》━━━┈⊷
┃⚙️╭───────────────────
┃⚙️│▸ Usᴇʀ      : ${config.OWNER_NAME}
┃⚙️│▸ ʙᴀɪʟᴇʏs   : 𝐌𝐮𝐥𝐭𝐢 𝐝𝐞𝐯𝐢𝐜𝐞
┃⚙️│▸ 𝖳ʏᴘᴇ      : 𝐍𝐨𝐝𝐞𝐣𝐬
┃⚙️│▸ ᴘʟᴀᴛғᴏʀᴍ  : VPS
┃⚙️│▸ 𝖬ᴏᴅᴇ      : [${config.MODE}]
┃⚙️│▸ 𝖯ʀᴇғɪx    : [${config.PREFIX}]
┃⚙️│▸ 𝖵ᴇʀsɪᴏɴ   : 1.0.0
┃⚙️╰────────────────────
╰━━━━━━━━━━━━━━━━━━━━━━━━┈⊷

╔══════════════╗
║ ᴛᴏᴏʟ ʟɪsᴛ
╚══════════════╝
┃❍┃• ɢᴘᴛ
┃❍┃• ᴠᴠ
┃❍┃• ᴠᴠ2
┃❍┃• ʙɪʙʟᴇ
┃❍┃• ᴄʜᴀɴɴᴇʟ
┃❍┃• ᴜɴʙʟᴏᴄᴋ
┃❍┃• ʙʟᴏᴄᴋ
┃❍┃• ᴜᴘᴛɪᴍᴇ
┃❍┃• ɢɪᴛᴄʟᴏɴᴇ
┃❍┃• ᴄʜᴇᴄᴋ
┃❍┃• ᴘɪɴɢ
┃❍┃• ᴘᴀɪʀ
┃❍┃• ᴏᴡɴᴇʀ
┃❍┃• ɢᴇᴛᴘᴘ
┃❍┃• ɢɪᴛʜᴜʙ
┃❍┃• ʟɪsᴛᴏɴʟɪɴᴇ
┃❍┃• ᴀʟɪᴠᴇ
┃❍┃• ᴍᴇɴᴜ
┃❍┃• ʀᴇᴘᴏ
┃❍┃• ᴀᴛᴛᴘ
┃❍┃• ᴘᴏsᴛ
┃❍┃• ʀᴇsᴛᴀʀᴛ
┃❍┃• sᴇɴᴅ
┃❍┃• sᴀᴠᴇ
┃❍┃• sᴛɪᴄᴋᴇʀ
┃❍┃• ᴛᴀᴋᴇ
┃❍┃• ᴊɪᴅ
┃❍└───────────┈⊷
╰────────────────┈⊷
╭────────────────╮
│ ᴛᴏᴏʟ ᴅᴏᴡɴʟᴏᴀᴅ 
╰────────────────╯
┃❍┃• ғʙ
┃❍┃• ᴘʟᴀʏ
┃❍┃• ᴀᴘᴋ
┃❍┃• ᴠɪᴅᴇᴏ
┃❍┃• ɪᴍɢ
┃❍┃• ᴛɪᴋᴛᴏᴋ
┃❍┃• ғᴀɴᴄʏ
┃❍┃• ɪᴍɢsᴄᴀɴ
┃❍┃• sᴛᴀʙɪʟɪᴛʏᴀɪ
┃❍┃• ғʟᴜxᴀɪ
┃❍┃• ɪʏʀɪᴄs
┃❍┃• ᴍᴏᴠɪᴇ
┃❍┃• sᴄʀᴇᴇɴsʜᴏᴛ
┃❍┃• ʀᴡ
┃❍┃• ᴛᴏᴘᴘᴛ
┃❍┃• ᴛᴏᴍᴘ3
┃❍┃• sʜᴏʀᴛ
┃❍┃• ᴄᴏɴᴠᴇʀᴛ
┃❍┃• ᴛʀᴛ
┃❍┃• ʏᴛs
┃❍┃• ᴜʀʟ
┃❍└───────────┈⊷
╰─────────────────┈⊷

╔══════════════╗
║ ᴛᴏᴏʟ ɢʀᴏᴜᴘ 
╚══════════════╝
┃❍┃• ɢᴅᴇsᴄ
┃❍┃• ᴀᴅᴅ
┃❍┃• ᴋɪᴄᴋ
┃❍┃• ʜɪᴅᴇᴛᴀɢ
┃❍┃• ᴛᴀɢᴀʟʟ
┃❍┃• ᴀɴᴛɪʟɪɴᴋ
┃❍┃• ᴡᴇʟᴄᴏᴍᴇ
┃❍┃• ɢɴᴀᴍᴇ
┃❍┃• ɢɪɴғᴏ
┃❍┃• ᴊᴏɪɴ
┃❍┃• ʟɪɴᴋ
┃❍┃• ᴠᴄғ
┃❍┃• ʟᴇғᴛ
┃❍┃• ᴍᴜᴛᴇ
┃❍┃• ᴏᴜᴛ
┃❍┃• ᴜɴᴍᴜᴛᴇ
┃❍┃• ɴᴇᴡɢᴄ
┃❍┃• ᴅᴇʟᴇᴛᴇʟɪɴᴋ
┃❍┃• ᴀɴᴛɪʟɪɴᴋ
┃❍└───────────┈⊷
╰─────────────────┈⊷
╭╴╴╴╴╴╴╴╴╴╴╴╴╴╴╮
│ ᴛᴏᴏʟ sᴇᴛᴛɪɴɢs
╰╴╴╴╴╴╴╴╴╴╴╴╴╴╴╯
┃❍┃• ᴀɴᴛɪᴅᴇʟᴇᴛᴇ
┃❍┃• ᴀɴᴛɪᴄᴀʟʟ
┃❍┃• ᴀᴜᴛᴏᴛʏᴘɪɴɢ
┃❍┃• ᴀᴜᴛᴏʀᴇᴄᴏʀᴅɪɴɢ
┃❍┃• ᴍᴏᴅᴇ
┃❍┃• sᴛᴀᴛᴜsʀᴇᴀᴄᴛ
┃❍┃• ʀᴇᴀᴅᴍᴇssᴀɢᴇ
┃❍┃• sᴛᴀᴛᴜsʀᴇᴘʟʏ
┃❍┃• ᴀᴜᴛᴏʀᴇᴀᴄᴛ
┃❍┃• ᴀᴜᴛᴏʀᴇᴘʟʏ
┃❍└───────────┈⊷
╰─────────────────┈⊷
> powered by ${config.OWNER_NAME}
`;

    await conn.sendMessage(
      from,
      {
        image: imageBuffer,
        caption: dec,
        contextInfo: {
          mentionedJid: [m.sender],
          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: '120363353854480831@newsletter',
            newsletterName: '𝚁𝙰𝙷𝙼𝙰𝙽𝙸-𝚇𝙼𝙳',
            serverMessageId: 143
          }
        }
      },
      { quoted: quotedContact }
    );

  } catch (e) {
    console.log(e);
    reply(`${e}`);
  }
});
          
