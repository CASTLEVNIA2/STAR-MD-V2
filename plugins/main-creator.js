
function handler(m) {
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)

}

handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', '꧁💫𝙳𝚎𝚟𝚊𝚗𝚜𝚑✨꧂', 'dueño', '٭𝙰𝚄𝚁𝙾𝚁𝙰٭'] 

export default handler
