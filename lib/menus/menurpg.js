const menurpg = (prefix, dono, numerodono, version, nomedobot, pushname) => {
  return `
╭━━━⚔️━━━🧭━━━⚔️━━━╮
┃      MENU RPG      ┃
╰━━━⚔️━━━🧭━━━⚔️━━━╯

╭━━━ 👤 JOGADOR ━━━╮
┃ 👋 ${pushname}
┃ 👑 Dono » ${dono}
┃ 🔑 Prefixo » ${prefix}
┃ ⚙️ Versao » ${version}
┃ 🤖 Bot » ${nomedobot}
┃ 📱 Numero Dono » ${numerodono}
╰━━━━━━━━━━━━━━━━━━╯

╭━━ 🧾 CONFIG INICIAL ━━╮
┃ 📝 ➤ ${prefix}registrarrpg → registrar no RPG
┃ 🎂 ➤ ${prefix}idade → definir idade
┃ 🦸 ➤ ${prefix}personagem → escolher personagem
┃ 💼 ➤ ${prefix}profissaorpg → definir profissao
┃ 🪪 ➤ ${prefix}identidade → ver identidade RPG
┃ 🎒 ➤ ${prefix}inventario → ver inventario
╰━━━━━━━━━━━━━━━━━━━━━━━╯

╭━━ 🛍️ LOJAS ━━╮
┃ 🍎 ➤ ${prefix}lojinhafrutas
┃ 🍔 ➤ ${prefix}lojinhascomidas
┃ 🥤 ➤ ${prefix}lojinhabebida
┃ 👕 ➤ ${prefix}lojinharoupas
┃ 👟 ➤ ${prefix}lojinhasapatos
┃ 💻 ➤ ${prefix}lojinhascomputer
┃ 📱 ➤ ${prefix}lojinhastelemoveis
┃ 🏠 ➤ ${prefix}lojinhascasas
╰━━━━━━━━━━━━━━━╯

╭━━ 📚 INFO RPG ━━╮
┃ 📘 ➤ ${prefix}inforpg → manual RPG
┃ 🧑‍💼 ➤ ${prefix}profissao → menu de profissoes
╰━━━━━━━━━━━━━━━━━╯

╭━━ 🎮 ACOES RPG ━━╮
┃ 🛒 ➤ ${prefix}comprar [item]
┃ 🗑️ ➤ ${prefix}jogafora [item]
┃ 💼 ➤ ${prefix}trabalhar
┃ 🏃 ➤ ${prefix}correrrpg
┃ 🦘 ➤ ${prefix}pular
┃ 🛏️ ➤ ${prefix}deitar
┃ 😴 ➤ ${prefix}dormir
┃ 🌞 ➤ ${prefix}acordar
┃ 🍽️ ➤ ${prefix}comer
┃ 🧃 ➤ ${prefix}beber
┃ 👀 ➤ ${prefix}ver
┃ ✋ ➤ ${prefix}parar
┃ 📖 ➤ ${prefix}ler
┃ 🙋 ➤ ${prefix}levantar
╰━━━━━━━━━━━━━━━━━━╯
`;
};

exports.menurpg = menurpg;
