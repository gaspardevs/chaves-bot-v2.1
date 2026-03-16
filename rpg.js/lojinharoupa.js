const lojinharoupas = (prefix, dono, numerodono, version, nomedobot, pushname) => {
  return `
╭━━━👕━━━🛒━━━👕━━━╮
┃    LOJA ROUPAS    ┃
╰━━━👕━━━🛒━━━👕━━━╯

👤 ${pushname}
👑 Dono: ${dono}
🔑 Prefixo: ${prefix}
⚙️ Versao: ${version}
🤖 Bot: ${nomedobot}
📱 Dono: ${numerodono}

Itens:
👕 camiseta → 100 moedas
👔 camisa → 150 moedas
👖 calca → 200 moedas
👖 calca jeans → 250 moedas
🩳 shorts → 180 moedas
🧥 jaqueta → 400 moedas
🧥 casaco → 450 moedas
🧥 moletom → 300 moedas
👗 vestido → 350 moedas
👗 saia → 250 moedas
👚 blusa → 150 moedas
🤵 terno → 700 moedas
👔 gravata → 100 moedas
🧢 bone → 80 moedas
🎩 chapeu → 120 moedas
`;
};

exports.lojinharoupa = lojinharoupas;
