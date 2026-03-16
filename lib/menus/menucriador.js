const menucriador = (prefix, dono, numerodono, version, nomedobot, pushname) => {
  return `
╭━━━🏠━━━🌽━━━🏠━━━━╮
┃ 👑 MENU CRIADOR 👑┃
╰━━━🏠━━━🌽━━━🏠━━━━╯

╭━━━ 👤 VISITANTE DA VILA ━━━╮
┃ 👋 ${pushname}
┃ 👑 Dono » ${dono}
┃ 🔑 Prefixo » ${prefix}
┃ ⚙️ Versao » ${version}
┃ 🤖 Bot » ${nomedobot}
┃ 📱 Numero Dono » ${numerodono}
╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯

╭━━ 🧠 CONTROLE BOT ━━╮
┃ ♻️ ➤ ${prefix}restart → Reiniciar bot
┃ 📴 ➤ ${prefix}shutdown → 1/0
┃ 📊 ➤ ${prefix}status → Ver status bot
┃ 📣 ➤ ${prefix}broadcast → texto
┃ ✉️ ➤ ${prefix}dm numero → texto
┃ 🔄 ➤ ${prefix}update → Recarregar arquivos
┃ 🏘️ ➤ ${prefix}gruposon → Listar grupos
┃ 🆔 ➤ ${prefix}divid → Ver ID do grupo
┃ 🚫 ➤ ${prefix}bangp → desligar bot do grupo
┃ ✅ ➤ ${prefix}unbangp → liga o bot no grupo
┃ 💣 ➤ ${prefix}nuke → tira todos do grupo
╰━━━━━━━━━━━━━━━━━━━━━━╯

╭━━ 👑 DONO E MENU ━━╮
┃ 1️⃣ ➤ ${prefix}dono1 → @user
┃ 2️⃣ ➤ ${prefix}dono2 → @user
┃ 3️⃣ ➤ ${prefix}dono3 → @user
┃ 4️⃣ ➤ ${prefix}dono4 → @user
┃ 🖼️ ➤ ${prefix}fotomenu → Trocar foto menu
┃ 🎵 ➤ ${prefix}audiomenu → Trocar audio menu
┃ 🔤 ➤ ${prefix}addprefixo → Trocar prefixo
┃ 👁️ ➤ ${prefix}visumsg → 1/0
┃ 📞 ➤ ${prefix}antiligar → 1/0
╰━━━━━━━━━━━━━━━━━━━━━╯

╭━━ 💎 PREMIUM ━━╮
┃ ➕ ➤ ${prefix}addcmdpremium → cmd
┃ 📋 ➤ ${prefix}listcmdpremium → Listar cmd premium
┃ 🎁 ➤ ${prefix}darpremium → @user dias
┃ ❌ ➤ ${prefix}tirarpremium → @user
╰━━━━━━━━━━━━━━━╯

╭━━ 🛡️ BLOQUEIOS ━━╮
┃ 🚫 ➤ ${prefix}blockcmd → cmd
┃ ✅ ➤ ${prefix}unblockcmd → cmd
┃ 📋 ➤ ${prefix}listdecmdblock → Lista bloqueio grupo
┃ 🌐 ➤ ${prefix}blockcmdg → cmd
┃ 🌍 ➤ ${prefix}unblockcmdg → cmd
┃ 📜 ➤ ${prefix}listcmdblockg → Lista bloqueio global
╰━━━━━━━━━━━━━━━━━━━╯

╭━━ 🚫 ANTIPALAVRA ━━╮
┃ ➕ ➤ ${prefix}addpalavra → palavra 
┃ 🗑️ ➤ ${prefix}deletepalavra → palavra 
╰━━━━━━━━━━━━━━━━━━━━╯

╭━━ 💸 ALUGUEL ━━╮
┃ 🌐 ➤ ${prefix}aluguelg → 1/0
┃ 🏘️ ➤ ${prefix}aluguelgp → 1/0
┃ 📊 ➤ ${prefix}aluguelstatus → Status aluguel
┃ 🎫 ➤ ${prefix}cartaogerar24h → Gerar codigo 24h
┃ 🔓 ➤ ${prefix}cartaousar → Ativar 24h
┃ 📊 ➤ ${prefix}statuspremium → Ver status premium
╰━━━━━━━━━━━━━━━━━━╯
`;
};

exports.menucriador = menucriador;
