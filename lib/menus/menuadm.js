const menuadm = (prefix, dono, numerodono, version, nomedobot, pushname) => {
  return `
╭━━━🏠━━━🌽━━━🏠━━━╮
┃ 🛡️ MENU ADMIN 🛡️  ┃
╰━━━🏠━━━🌽━━━🏠━━━╯

╭━━━ 👤 VISITANTE DA VILA ━━━╮
┃ 👋 ${pushname}
┃ 👑 Dono » ${dono}
┃ 🔑 Prefixo » ${prefix}
┃ ⚙️ Versao » ${version}
┃ 🤖 Bot » ${nomedobot}
┃ 📱 Numero Dono » ${numerodono}
╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯

╭━━ 🔥 MODERACAO ━━╮
┃ 🧹 ➤ ${prefix}antipalavra → 1/0
┃ 🔗 ➤ ${prefix}antilink → 1/0
┃ 🚫 ➤ ${prefix}antilink1 → 1/0
┃ 🚷 ➤ ${prefix}antispam → 1/0
┃ 🔇 ➤ ${prefix}mutar → @user
┃ 🔊 ➤ ${prefix}desmutar → @user
┃ ⛔ ➤ ${prefix}ban → @user
┃ ➕ ➤ ${prefix}adicionar numero → numero
┃ 🧱 ➤ ${prefix}block → @user
┃ 🟢 ➤ ${prefix}desblock → @user
┃ 🛡️ ➤ ${prefix}antifake → 1/0
╰━━━━━━━━━━━━━━━━━━━╯

╭━━ ⚙️ GRUPO ━━╮
┃ 👑 ➤ ${prefix}promover → @user
┃ ⏰ ➤ ${prefix}a-f-gp → tempo para abrir e fechar gp
┃ ⏹️ ➤ ${prefix}a-f-gp-parar → para o abrir e fechar automatico
┃ 🗑️ ➤ ${prefix}deletarmsg → marca mensagem
┃ 👤 ➤ ${prefix}rebaixar → @user
┃ 🔒 ➤ ${prefix}fechargp → Fechar grupo
┃ 🔓 ➤ ${prefix}abrirgrupo → Abrir grupo
┃ 👋 ➤ ${prefix}bemvindo → 1/0
┃ 🚪 ➤ ${prefix}saida → 1/0
┃ 📝 ➤ ${prefix}msgbenvindo → texto
┃ 📤 ➤ ${prefix}msgsaida → texto
┃ 🤖 ➤ ${prefix}automsg → 1/0
╰━━━━━━━━━━━━━━━╯

╭━━ 🛠️ EXTRA ADM ━━╮
┃ ⚠️ ➤ ${prefix}adverter → @user
┃ ⚠️ ➤ ${prefix}tiraradvertencia → @user 
┃ 📋 ➤ ${prefix}listadvertidos → Ver advertidos
┃ 🧽 ➤ ${prefix}limpargp → Limpar mensagens
┃ ⏱️ ➤ ${prefix}tmpocmd seg → Tempo entre comandos
┃ 👮 ➤ ${prefix}so_adm → 1/0
┃ 🖼️ ➤ ${prefix}fundobv → Fundo de boas-vindas
┃ 🚪 ➤ ${prefix}fundosaida → Fundo de saida
╰━━━━━━━━━━━━━━━━━━╯

`;
};

exports.menuadm = menuadm;
