const menu = (prefix, dono, numerodono, nomecriador, version, nomedobot, pushname) => {
  return `
╭━━━🏠━━━🌽━━━🏠━━━╮
┃ 🌟 CHAVES-BOT 🌟 ┃
╰━━━🏠━━━🌽━━━🏠━━━╯

╭━━━ 👤 VISITANTE DA VILA ━━━╮
┃ 👋 ${pushname}
┃ 👑 Dono » ${dono}
┃ 🛠️ Criador » ${nomecriador}
┃ 🔑 Prefixo » ${prefix}
┃ ⚙️ Versao » ${version}
┃ 🤖 Bot » ${nomedobot}
┃ 📱 Numero Dono » ${numerodono}
╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯

╭━━ 📚 OUTROS MENUS ━━╮
┃ 🎉 ➤ ${prefix}menubrincadeira → Menu de brincadeiras
┃ 🛡️ ➤ ${prefix}menuadm → Menu de admin
┃ 👑 ➤ ${prefix}menucriador → Menu do criador
┃ 🖼️ ➤ ${prefix}menufigurinha → Menu de figurinhas
┃ 🧠 ➤ ${prefix}menuia → Menu de IA
┃ 🎨 ➤ ${prefix}menulogo → Menu de logos
┃ 💎 ➤ ${prefix}menupremium → Menu premium
┃ ⚔️ ➤ ${prefix}menurpg → Menu RPG
╰━━━━━━━━━━━━━━━━━━━━━━╯

╭━━ ℹ️ INFORMACAO ━━╮
┃ 📡 ➤ ${prefix}ping → latencia
┃ 📋 ➤ ${prefix}info →  dados do bot
┃ 📘 ➤ ${prefix}infocmd →  uso de comando
┃ 💡 ➤ ${prefix}sugestao → Enviar sugestao
┃ 🐞 ➤ ${prefix}relatarbug → Relatar erro
┃ ⭐ ➤ ${prefix}avalie → Avaliar bot
╰━━━━━━━━━━━━━━━━━━━━╯

╭━━ 🎭 FALAS DA TURMA ━━╮
┃ 😂 ➤ ${prefix}chaves → Frase do Chaves
┃ 🎈 ➤ ${prefix}quico → Frase do Quico
┃ 🎀 ➤ ${prefix}chiquinha → Frase da Chiquinha
┃ 💼 ➤ ${prefix}srbarriga → Frase do Sr Barriga
┃ ☕ ➤ ${prefix}donaflorinda → Frase da Dona Florinda
┃ 📚 ➤ ${prefix}girafales → Frase do Girafales
┃ 🧢 ➤ ${prefix}seumadruga → Frase do Seu Madruga
┃ 🍬 ➤ ${prefix}inhonho → Frase do Inhonho
┃ 🧙 ➤ ${prefix}bruxado71 → Frase da Bruxa do 71
╰━━━━━━━━━━━━━━━━━━━━━━━╯

╭━━ 🎵 PLAY ━━╮
┃ ▶️ ➤ ${prefix}play → Buscar musica/audio
┃ 🗣️ ➤ ${prefix}toaudio → texto para audio
┃ 📝 ➤ ${prefix}totext → audio para texto
╰━━━━━━━━━━━━━━╯

╭━━ ⚙️ OUTROS COMANDOS ━━╮
┃ 📺 ➤ ${prefix}canalcriador → Canal do criador
┃ 🎊 ➤ ${prefix}parabenizar → @user
┃ 🔢 ➤ ${prefix}totalcmd → Ver total de comandos
┃ 👤 ➤ ${prefix}perfil → @user
┃ 🏆 ➤ ${prefix}topativo → Ver ranking ativo
┃ 🧠 ➤ ${prefix}conselho → Receber conselho
┃ 📖 ➤ ${prefix}bibliafrases → Frase biblica
┃ ⏰ ➤ ${prefix}lembrete → Criar lembrete
┃ 📊 ➤ ${prefix}cmdusados → Ver top comandos
┃ 💬 ➤ ${prefix}topmsg → Ver top mensagens
┃ ⛅ ➤ ${prefix}clima → clima do pais
┃ 🎭 ➤ ${prefix}chatfake → fake chat
┃ 👁️ ➤ ${prefix}rvisu → marca mensagem
┃ 🔗 ➤ ${prefix}convite → Link do grupo
┃ 🤖 ➤ ${prefix}alugarbot → alugar o bot
┃ 🛒 ➤ ${prefix}comprarbot → comprar o bot
┃ 🏪 ➤ ${prefix}lojinhaaluguel → loja de precos
┃ 🔢 ➤ ${prefix}gerarnumero → DD
┃ 🧮 ➤ ${prefix}calcular → 1+1
┃ 💎 ➤ ${prefix}comprarpremium → Como comprar premium
┃ 💎 ➤ ${prefix}premium → Ver plano premium
┃ 📐 ➤ ${prefix}bhaskara → Fazer conta em bhaskara
┃ 📣 ➤ ${prefix}marcar → Marcar todos
╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯
`;
};

exports.menu = menu;
