
function handler(m) {
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)

}

handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', '꧁•⊹٭𝙳𝚎𝚟𝚊𝚗𝚜𝚑 𝚂𝚒𝚗𝚐𝚑٭⊹•꧂', 'dueño', 'star'] 

export default handler
