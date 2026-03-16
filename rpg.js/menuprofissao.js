const menuprofissao = (prefix, dono, numerodono, version, nomedobot, pushname) => {
  return `
╭━━━💼━━━📚━━━💼━━━╮
┃  MENU PROFISSAO   ┃
╰━━━💼━━━📚━━━💼━━━╯

👤 ${pushname}
👑 Dono: ${dono}
🔑 Prefixo: ${prefix}
⚙️ Versao: ${version}
🤖 Bot: ${nomedobot}
📱 Dono: ${numerodono}

Profissoes:
🩺 medico → 500 moedas/mes
🩹 enfermeiro → 400 moedas/mes
📖 professor → 450 moedas/mes
🏗️ engenheiro → 600 moedas/mes
⚖️ advogado → 550 moedas/mes
👮 policial → 500 moedas/mes
🚒 bombeiro → 480 moedas/mes
📰 jornalista → 400 moedas/mes
👨‍🍳 chef de cozinha → 450 moedas/mes
🚗 motorista → 350 moedas/mes
🎨 pintor → 300 moedas/mes
🎭 ator → 600 moedas/mes
🎤 cantor → 650 moedas/mes
💻 programador → 700 moedas/mes
🌾 agricultor → 350 moedas/mes

Use:
${prefix}profissaorpg [profissao]
`;
};

exports.menuprofissao = menuprofissao;
