const config = require('../config')
const { cmd } = require('../command')

const quotedContact = {
    key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        remoteJid: "status@broadcast"
    },
    message: {
        contactMessage: {
            displayName: "RAHMANI MD VERIFIED ✅",
            vcard: "BEGIN:VCARD\nVERSION:3.0\nFN:RAHMANI MD VERIFIED ✅\nORG:RAHMANI MD BOT;\nTEL;type=CELL;type=VOICE;waid=255693629079:255760164530\nEND:VCARD"
        }
    }
};

cmd({
    pattern: "groupname",
    alias: ["upgname", "gname"],
    react: "📝",
    desc: "Change the group name.",
    category: "group",
    filename: __filename
},           
async (conn, mek, m, { from, isGroup, isAdmins, isBotAdmins, q, reply }) => {
    const contextInfo = {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: "120363353854480831@newsletter",
            newsletterName: "𝚁𝙰𝙷𝙼𝙰𝙽𝙸-𝚇𝙼𝙳",
            serverMessageId: 1
        }
    };

    if (!isGroup) return reply(`
╭───「 *ERROR* 」───╮
│ ❌ This command can only be used in groups.
╰──────────────────╯
    `.trim(), { quoted: quotedContact, contextInfo });

    if (!isAdmins) return reply(`
╭───「 *ACCESS DENIED* 」───╮
│ 🚫 Only group admins can use this command.
╰──────────────────────────╯
    `.trim(), { quoted: quotedContact, contextInfo });

    if (!isBotAdmins) return reply(`
╭───「 *BOT ERROR* 」───╮
│ ⚠️ I need to be an admin to update the group name.
╰──────────────────────╯
    `.trim(), { quoted: quotedContact, contextInfo });

    if (!q) return reply(`
╭───「 *USAGE* 」───╮
│ ❌ Please provide a new group name.
╰──────────────────╯
    `.trim(), { quoted: quotedContact, contextInfo });

    try {
        await conn.groupUpdateSubject(from, q);
        return reply(`
╭───「 *SUCCESS* 」───╮
│ ✅ Group name has been updated to: *${q}*
╰───────────────────╯
        `.trim(), { quoted: quotedContact, contextInfo });
    } catch (e) {
        console.error("Error updating group name:", e);
        return reply(`
╭───「 *ERROR* 」───╮
│ ❌ Failed to update the group name. Please try again.
╰──────────────────╯
        `.trim(), { quoted: quotedContact, contextInfo });
    }
});
