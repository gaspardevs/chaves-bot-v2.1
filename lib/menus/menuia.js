const menuia = (prefix, dono, numerodono, version, nomedobot, pushname) => {
  return `
╭━━━🏠━━━🌽━━━🏠━━━╮
┃ 🤖 MENU IA 🤖    ┃
╰━━━🏠━━━🌽━━━🏠━━━╯

╭━━━ 👤 VISITANTE DA VILA ━━━╮
┃ 👋 ${pushname}
┃ 👑 Dono » ${dono}
┃ 🔑 Prefixo » ${prefix}
┃ ⚙️ Versao » ${version}
┃ 🤖 Bot » ${nomedobot}
┃ 📱 Numero Dono » ${numerodono}
╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯

╭━━ 🧠 IAs PRINCIPAIS ━━╮
┃ 💬 ➤ ${prefix}chatgpt → pergunta
┃ 🧠 ➤ ${prefix}claude → pergunta
┃ 🚀 ➤ ${prefix}grok → pergunta
┃ 🪄 ➤ ${prefix}nexia → pergunta
╰━━━━━━━━━━━━━━━━━━━━━━━╯

╭━━ ⚙️ FERRAMENTAS IA ━━╮
┃ 🎮 ➤ ${prefix}roblox → pergunta
┃ 👨‍💻 ➤ ${prefix}dev → pergunta
┃ 🔎 ➤ ${prefix}analise → texto
┃ 📚 ➤ ${prefix}explicar → tema
┃ 🌍 ➤ ${prefix}tradutor → texto
┃ ✂️ ➤ ${prefix}resumo → texto
┃ 🎨 ➤ ${prefix}criativo → tema
┃ 🖼️ ➤ ${prefix}imagem → Prompt
┃ 🧾 ➤ ${prefix}codigo → pedido
┃ 🗨️ ➤ ${prefix}chat → pergunta
╰━━━━━━━━━━━━━━━━━━━━━━━╯
`;
};

exports.menuia = menuia;
