const inforpg = (prefix, dono, numerodono, version, nomedobot, pushname) => {
  return `
╭━━━📘━━━🧭━━━📘━━━╮
┃    INFO RPG       ┃
╰━━━📘━━━🧭━━━📘━━━╯

👤 ${pushname}
👑 Dono: ${dono}
🔑 Prefixo: ${prefix}
⚙️ Versao: ${version}
🤖 Bot: ${nomedobot}
📱 Dono: ${numerodono}

Comeco:
📝 ${prefix}registrarrpg [nome]
🎂 ${prefix}idade [numero]
🦸 ${prefix}personagem [nome]
💼 ${prefix}profissaorpg [profissao]
🪪 ${prefix}identidade
🎒 ${prefix}inventario
💼 ${prefix}trabalhar

Lojas:
🍎 ${prefix}lojinhafrutas
🍔 ${prefix}lojinhascomidas
🥤 ${prefix}lojinhabebida
👕 ${prefix}lojinharoupas
👟 ${prefix}lojinhasapatos
💻 ${prefix}lojinhascomputer
📱 ${prefix}lojinhastelemoveis
🏠 ${prefix}lojinhascasas

Acoes:
🛒 ${prefix}comprar [item]
🗑️ ${prefix}jogafora [item]
🏃 ${prefix}correrrpg
🦘 ${prefix}pular
🛏️ ${prefix}deitar
😴 ${prefix}dormir
🌞 ${prefix}acordar
🍽️ ${prefix}comer
🧃 ${prefix}beber
👀 ${prefix}ver
✋ ${prefix}parar
📖 ${prefix}ler
🙋 ${prefix}levantar
`;
};

exports.inforpg = inforpg;
