const menupersonagem = (prefix, dono, numerodono, version, nomedobot, pushname) => {
  return `
╭━━━🏠━━━🌽━━━🏠━━━╮
┃  MENU PERSONAGEM  ┃
╰━━━🏠━━━🌽━━━🏠━━━╯

╭━━━ 👤 VISITANTE DA VILA ━━━╮
┃ 👋 ${pushname}
┃ 👑 Dono » ${dono}
┃ 🔑 Prefixo » ${prefix}
┃ ⚙️ Versao » ${version}
┃ 🤖 Bot » ${nomedobot}
┃ 📱 Numero Dono » ${numerodono}
╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯

Escolha seu personagem com:
${prefix}personagem [nome]

Opcoes:
- guerreiro
- maga
- arqueiro
- ninja
- cavaleiro
- medico
- mercador
- fazendeiro
`;
};

exports.menupersonagem = menupersonagem;
