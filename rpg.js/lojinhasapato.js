const lojinhasapato = (prefix, dono, numerodono, version, nomedobot, pushname) => {
  return `
╭━━━👟━━━🛒━━━👟━━━╮
┃    LOJA SAPATOS   ┃
╰━━━👟━━━🛒━━━👟━━━╯

👤 ${pushname}
👑 Dono: ${dono}
🔑 Prefixo: ${prefix}
⚙️ Versao: ${version}
🤖 Bot: ${nomedobot}
📱 Dono: ${numerodono}

Itens:
👟 tenis adidas → 450 moedas
👟 tenis nike → 500 moedas
👟 tenis puma → 400 moedas
👞 sapato gucci → 5000 moedas
👟 vans → 300 moedas
👟 converse → 320 moedas
`;
};

exports.lojinhasapato = lojinhasapato;
