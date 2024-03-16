
let handler = async (m, { conn}) => {
let user = global.db.data.users[m.sender]
let name = conn.getName(m.sender)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let av = `./Assets/mp3/${pickRandom(["STAR", "STAR1", "STAR2", "STAR3", "STAR4"])}.mp3`

m.reply( `Hello ${taguser} Am *•-»𝗔𝗨𝗥𝗢𝗥𝗔«-•* created by ꧁💫𝙳𝚎𝚟𝚊𝚗𝚜𝚑✨꧂ Need help?  type /help `)
conn.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
} 

handler.customPrefix = /^(Xcel|꧁💫𝙳𝚎𝚟𝚊𝚗𝚜𝚑✨꧂)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
