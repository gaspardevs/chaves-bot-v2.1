const menufigurinha = (prefix, dono, numerodono, version, nomedobot, pushname) => {
  return `
╭━━━🏠━━━🌽━━━🏠━━━━━━╮
┃ 🖼️ MENU FIGURINHA 🖼️┃
╰━━━🏠━━━🌽━━━🏠━━━━━━╯

╭━━━ 👤 VISITANTE DA VILA ━━━╮
┃ 👋 ${pushname}
┃ 👑 Dono » ${dono}
┃ 🔑 Prefixo » ${prefix}
┃ ⚙️ Versao » ${version}
┃ 🤖 Bot » ${nomedobot}
┃ 📱 Numero Dono » ${numerodono}
╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯

╭━━ 🧩 COMANDOS FIGURINHA ━━╮
┃ 🎩 ➤ ${prefix}chavesfigu → Figu do Chaves
┃ 🎀 ➤ ${prefix}chiquinhafigu → Figu da Chiquinha
┃ 🎈 ➤ ${prefix}quicofigu → Figu do Quico
┃ 🧢 ➤ ${prefix}seumadrugafigu → Figu do Madruga
┃ 🛠️ ➤ ${prefix}criarfigu → Criar da imagem
┃ ✏️ ➤ ${prefix}alterarfigu texto → Alterar figurinha
╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯
`;
};

exports.menufigurinha = menufigurinha;
