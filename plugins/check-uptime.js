const { cmd } = require('../command');
const os = require("os");
const process = require("process");

// Uptime formatter
function fancyUptime(seconds) {
    seconds = Number(seconds);
    const d = Math.floor(seconds / (3600 * 24));
    const h = Math.floor((seconds % (3600 * 24)) / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    return `${d ? d + 'd ' : ''}${h ? h + 'h ' : ''}${m ? m + 'm ' : ''}${s}s`.trim() || "0s";
}

cmd({
    pattern: "alive",
    alias: ["av", "runtime", "uptime"],
    desc: "Check uptime and system status",
    category: "main",
    react: "🤡",
    filename: __filename
},
async (conn, mek, m, { from, reply, botNumber, pushname }) => {
    try {
        const platform = "Heroku Platform";
        const release = os.release();
        const cpuModel = os.cpus()[0].model;
        const totalMem = (os.totalmem() / 1024 / 1024).toFixed(2);
        const usedMem = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
        const cpuCores = os.cpus().length;
        const arch = os.arch();
        const nodeVersion = process.version;
        const botName = pushname || "RAHMANI-XMD BOT";
        const owner = "Rahmany-xmd";

        const status = `
✨ RAHMANI XMD ALIVE 🚀

╔═══[ BOT STATUS ]═══╗
┃ 🤖 Name     : ${botName}
┃ 🆔 Bot ID   : @${botNumber.replace(/@.+/, "")}
┃ 👑 Owner    : ${owner}
┃ ⏳ Uptime   : ${fancyUptime(process.uptime())}
┃ 🟢 Node.js  : ${nodeVersion}
┃ 🧪 Version  : 1.0.0 BETA
╚════════════════════╝

▶️ Stay tuned for more updates!
        `;

        const newsletterContext = {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363353854480831@newsletter",
                newsletterName: "𝚁𝙰𝙷𝙼𝙰𝙽𝙸-𝚇𝙼𝙳",
                serverMessageId: 143
            }
        };

        await conn.sendMessage(from, {
            image: { url: "https://files.catbox.moe/aktbgo.jpg" },
            caption: status,
            contextInfo: newsletterContext
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in alive command:", e);
        reply(`🚨 *An error occurred:* ${e.message}`);
    }
});
