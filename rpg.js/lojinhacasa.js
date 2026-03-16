const lojinhacasa = (prefix, dono, numerodono, version, nomedobot, pushname) => {
  return `
╭━━━🏠━━━🛒━━━🏠━━━╮
┃    LOJA CASAS     ┃
╰━━━🏠━━━🛒━━━🏠━━━╯

👤 ${pushname}
👑 Dono: ${dono}
🔑 Prefixo: ${prefix}
⚙️ Versao: ${version}
🤖 Bot: ${nomedobot}
📱 Dono: ${numerodono}

Itens:
🛖 barraco → 500 moedas
🏚️ casa simples → 1000 moedas
🏠 casa pequena → 1500 moedas
🪵 casa de madeira → 1800 moedas
🌾 casa de campo → 2500 moedas
🏠 casa normal → 3000 moedas
🏡 casa grande → 4000 moedas
🏘️ casa moderna → 5000 moedas
🏰 mansao → 7000 moedas
🏢 apartamento → 3500 moedas
🏙️ cobertura → 8000 moedas
🏖️ casa na praia → 9000 moedas
⛰️ casa na montanha → 8500 moedas
💎 casa de luxo → 10000 moedas
🏰 castelo → 15000 moedas
`;
};

exports.lojinhacasa = lojinhacasa;
