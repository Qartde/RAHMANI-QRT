const {cmd , commands} = require('../command')

cmd({
    pattern: "repo",
    desc: "get bot repo",
    category: "main",
    react: "🌍",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👋 Hello ${pushname}*
          
___*My repo* ʀᴀʜᴍᴀɴɪ xᴍᴅ

📎◦ https://github.com/Qartde/RAHMANI-QRT

___*𝖯𝗅𝖾𝖺𝗌𝖾 follow 𝖬𝗒 Whatsapp 𝖢𝗁𝖺𝗇𝗇𝖾𝗅* 1 👇

📎◦ https://whatsapp.com/channel/0029VatokI45EjxufALmY32X 

___*𝖶𝗁𝖺𝗍𝗌𝖺𝗉𝗉 𝖢𝗁𝖺𝗇𝗇𝖾𝗅s* 2 👇

📎◦ https://whatsapp.com/channel/0029Vb3eLRU3QxS5CZHI131x

___*And my whatsapp group*

📎◦ https://chat.whatsapp.com/DTnrZzULVtP5r0E9rhoFOj

> *® ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʀᴀʜᴍᴀɴɪ xᴍᴅ*
`
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/aktbgo.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
