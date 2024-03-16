import { promises } from 'fs';
import { join } from 'path';
import axios from 'axios'; 

let handler = async function (m, { conn, __dirname }) {
  const githubRepoURL = 'https://github.com/Castlevnia2/STAR-MD-V2';

  try {
  
    const [, username, repoName] = githubRepoURL.match(/github\.com\/([^/]+)\/([^/]+)/);

    const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}`);

    if (response.status === 200) {
      const repoData = response.data;

      // Format the repository information with emojis
      const formattedInfo = `
    ─────《 𝐒𝐓𝐀𝐑-𝐌𝐃-𝐕𝟐 》─────⊷
 📂 *ᏴϴͲ ΝᎪᎷᎬ:* _${repoData.name}_
📝 *ᎠᎬՏᏟᎡᏆᏢͲᏆϴΝ:* _Ꭺ ᏔᎻᎪͲՏᎪᏢᏢ ᏴϴͲ ᎡᎬᏟϴᎠᎬᎠ ᏴᎽ 𝙳𝚎𝚟𝚊𝚗𝚜𝚑 𝚂𝚒𝚗𝚐𝚑... ᏔᏆͲᎻ ᏞϴͲՏ ϴҒ ᎡᏆᏟᎻ ҒႮΝᏟͲᏆϴΝՏ.... 
👤 *ᎠᎬᏙᎬᏞϴᏢᎬᎡ:* _꧁•⊹٭𝙳𝚎𝚟𝚊𝚗𝚜𝚑 𝚂𝚒𝚗𝚐𝚑٭⊹•꧂_
⭐ *ՏͲᎪᎡՏ:* _${repoData.stargazers_count}_ 
🍴 *ҒϴᎡᏦՏ:* _${repoData.forks_count}_   
🔍 *ᎦᏟᎪΝ-ϘᎡ:*https://session.guruapi.tech/
⚔️ *ᘜᖇOᑌᑭ:* https://chat.whatsapp.com/Cz75VhYCXSZLxoToQImo4h
📡 *ᑭᑌᗷᒪIᑕ ᏀᖇOᑌᑭ:* https://chat.whatsapp.com/Cz75VhYCXSZLxoToQImo4h
💻 *ᑕᕼᗩᑎᑎᗴᒪ ᒪIᑎK:* https://chat.whatsapp.com/Cz75VhYCXSZLxoToQImo4h
 
🌐 *ႮᎡᏞ:* ${repoData.html_url}
🌠 *ΝϴᏔ ᎠᎬᏢᏞϴᎽ*:-https://dashboard.heroku.com/new?template=https://github.com/Castlevnia1' 

 `.trim();

      // Send the formatted information as a message
      await conn.relayMessage(m.chat,  {
        requestPaymentMessage: {
          currencyCodeIso4217: 'INR',
          amount1000: 99999,
          requestFrom: m.sender,
          noteMessage: {
          extendedTextMessage: {
          text: formattedInfo,
          contextInfo: {
          externalAdReply: {
          showAdAttribution: true
          }}}}}}, {})
    } else {
      // Handle the case where the API request fails
      await conn.reply(m.chat, 'Unable to fetch repository information.', m);
    }
  } catch (error) {
    console.error(error);
    await conn.reply(m.chat, 'An error occurred while fetching repository information.', m);
  }
};

handler.help = ['script'];
handler.tags = ['main'];
handler.command = ['sc', 'repo', 'script'];

export default handler;
