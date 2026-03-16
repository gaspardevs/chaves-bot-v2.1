const lojinhafrutas = (prefix, dono, numerodono, version, nomedobot, pushname) => {
  return `
╭━━━🍎━━━🛒━━━🍎━━━╮
┃   LOJA FRUTAS    ┃
╰━━━🍎━━━🛒━━━🍎━━━╯

👤 ${pushname}
👑 Dono: ${dono}
🔑 Prefixo: ${prefix}
⚙️ Versao: ${version}
🤖 Bot: ${nomedobot}
📱 Dono: ${numerodono}

Itens:
🍎 maca → 5 moedas
🍇 uva → 9 moedas
🍌 banana → 3 moedas
🍍 abacaxi → 8 moedas
🍉 melancia → 4 moedas
🍊 laranja → 2 moedas
🍊 tangerina → 6 moedas
🥭 manga → 10 moedas
🍑 pessego → 5 moedas
🍐 pera → 1 moeda
🍋 limao → 2 moedas
`;
};

exports.lojinhafrutas = lojinhafrutas;
