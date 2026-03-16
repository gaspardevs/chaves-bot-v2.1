const lojinhacomida = (prefix, dono, numerodono, version, nomedobot, pushname) => {
  return `
╭━━━🍔━━━🛒━━━🍔━━━╮
┃   LOJA COMIDAS    ┃
╰━━━🍔━━━🛒━━━🍔━━━╯

👤 ${pushname}
👑 Dono: ${dono}
🔑 Prefixo: ${prefix}
⚙️ Versao: ${version}
🤖 Bot: ${nomedobot}
📱 Dono: ${numerodono}

Itens:
🍔 hamburguer → 150 moedas
🌭 cachorro-quente → 120 moedas
🍕 pizza → 200 moedas
🍟 batata-fritas → 100 moedas
🍚 arroz → 80 moedas
🫘 feijao → 90 moedas
🍝 macarrao → 130 moedas
🍗 frango-frito → 300 moedas
🥩 bife → 280 moedas
🥗 salada → 120 moedas
🍳 omelete → 100 moedas
🍲 sopa → 90 moedas
🥪 sanduiche → 110 moedas
🍝 lasanha → 250 moedas
`;
};

exports.lojinhacomida = lojinhacomida;
