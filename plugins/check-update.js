const axios = require('axios');
const os = require('os');
const fs = require('fs');
const path = require('path');
const { cmd, commands } = require('../command');
const { runtime } = require('../lib/functions');

cmd({
  pattern: 'version',
  alias: ["changelog", "cupdate", "checkupdate"],
  react: '🚀',
  desc: "Check bot's version, system stats, and update info.",
  category: 'info',
  filename: __filename
}, async (conn, mek, m, {
  from, sender, pushname, reply
}) => {
  try {
    // Fake verified contact for quoted message
    const vcardContact = {
      key: {
        fromMe: false,
        participant: '0@s.whatsapp.net',
        remoteJid: "status@broadcast"
      },
      message: {
        contactMessage: {
          displayName: "RAHMANI",
          vcard: `BEGIN:VCARD\nVERSION:3.0\nN:RAHMANI-MD;;;\nFN:RAHMANI✓\nORG:RAHMANI-MD Developer;\nTEL;type=CELL;type=VOICE;waid=254700000000:+254700000000\nEND:VCARD`
        }
      }
    };

    // Read local version data
    const localVersionPath = path.join(__dirname, '../data/version.json');
    let localVersion = 'Unknown';
    let changelog = 'No changelog available.';
    if (fs.existsSync(localVersionPath)) {
      const localData = JSON.parse(fs.readFileSync(localVersionPath));
      localVersion = localData.version;
      changelog = localData.changelog;
    }

    // Fetch latest version data from GitHub
    const rawVersionUrl = 'https://raw.githubusercontent.com/Qartde/RAHMANI-QRT/main/data/version.json';
    let latestVersion = 'Unknown';
    let latestChangelog = 'No changelog available.';
    try {
      const { data } = await axios.get(rawVersionUrl);
      latestVersion = data.version;
      latestChangelog = data.changelog;
    } catch (error) {
      console.error('Failed to fetch latest version:', error);
    }

    // Count total plugins
    const pluginPath = path.join(__dirname, '../plugins');
    const pluginCount = fs.readdirSync(pluginPath).filter(file => file.endsWith('.js')).length;

    // Count total registered commands
    const totalCommands = commands.length;

    // System info
    const uptimeStr = runtime(process.uptime());
    const ramUsage = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
    const totalRam = (os.totalmem() / 1024 / 1024).toFixed(2);
    const hostName = os.hostname();
    const lastUpdate = fs.statSync(localVersionPath).mtime.toLocaleString();

    // GitHub stats
    const githubRepo = 'https://github.com/Qartde/RAHMANI-QRT';

    // Check update status
    let updateMessage = `✅ Your *RAHMANI-MD* bot is up-to-date!`;
    if (localVersion !== latestVersion) {
      updateMessage = `🚀 Your *RAHMANI-MD* bot is outdated!\n🔹 *Current Version:* ${localVersion}\n🔹 *Latest Version:* ${latestVersion}\n\nUse *.update* to update.`;
    }

    const statusMessage = `🌟 *Good ${new Date().getHours() < 12 ? 'Morning' : 'Evening'}, ${pushname}!* 🌟\n\n` +
      `🤖 *Bot Name:* RAHMANI-MD\n🔖 *Current Version:* ${localVersion}\n📢 *Latest Version:* ${latestVersion}\n📂 *Total Plugins:* ${pluginCount}\n🔢 *Total Commands:* ${totalCommands}\n\n` +
      `💾 *System Info:*\n⏳ *Uptime:* ${uptimeStr}\n📟 *RAM Usage:* ${ramUsage}MB / ${totalRam}MB\n⚙️ *Host Name:* ${hostName}\n📅 *Last Update:* ${lastUpdate}\n\n` +
      `📝 *Changelog:*\n${latestChangelog}\n\n` +
      `🌐 *GitHub Repo:* ${githubRepo}\n👤 *Owner:* [Qartde](https://github.com/Qartde)\n\n${updateMessage}\n\n🚀 *Don’t forget to star & fork the repo!*`;

    // Send image with status
    await conn.sendMessage(from, {
      image: { url: 'https://files.catbox.moe/aktbgo.jpg' },
      caption: statusMessage,
      contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363353854480831@newsletter',
          newsletterName: 'RAHMANI-MD Official',
          serverMessageId: 97
        }
      }
    }, { quoted: vcardContact });

  } catch (error) {
    console.error('Error checking version info:', error);
    reply('❌ Error: Failed to check version info.');
  }
});
                      
