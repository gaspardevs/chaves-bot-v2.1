const fs = require('fs-extra');

var mensagens = ["Calma, Calma! O chaves-bot já vai voltar do barril... aguarde um instante."," O chaves-bot está resolvendo isso mais rápido que o Seu Madruga fugindo do aluguel... aguarde!","Só um momentinho! O chaves-bot foi ali pegar um sanduíche de presunto.","Processando... não contavam com minha astúcia!","Aguarde! O Professor Girafales está organizando os cálculos do sistema.","Um estante... A Dona Florinda já abriu a porta do servidor.","O Chaves-bit está pensando... Isso, isso, isso!"]

const enviar = {
    espere: mensagens[Math.floor(Math.random() * mensagens.length)],
    aguarde: 'estou enviando... Espere um pouco, está vindo mais rapido que o seu madruga fugindo do aluguel.',
    sucesso: 'opah que sucesso hein? o comando da vila foi executado com sucesso!',
    antipv: 'antipv ativado com sucesso! Agora ninguém mande carta no meu barril',
    antipv1: 'antipv1 ativado com sucesso! Agora se mandar carta no barril vai ser castigado!',
    botoff: 'pena estou fechando a vila! pede para o patrão abrir com a chave mestre!',
    visumensagens: 'estou olhando as cartas por você, pode sair que fico de olho no aluguel!',
    privado: 'os comandos so podem ser usado na vila, não pode usar fora! Só os que são permitidos',
    antipalavra: "Ops! Mensagem removida... nada de palavrões na vila!",
    messagefig: "Sua figurinha saiu do barril! Aproveite!",
    Wecome: "isso isso isso entrou aqui sem querer querendo? se divirta na vila, segue as regras se não o Seu Madruga vem te combrar aluguel",
    saida: "saiu do grupo igual o chaves sai do barril: do nada!",
    ban: "levou um 'tesouro do Seu Madruga': BAN!",
    mutado: "cala, cala, cala... você me deixa louco!",
    antilink: "Aqui não é a vila dos links não, hein! Antilink ativado",
    adm: "Subiu de nivel igual o Seu Madruga subindo no Aluguel!",
    membro: "Isso, Isso, Isso! Novo membro no pedaço!",
    antilink1: "Ei, ei, ei! Link aqui não! a vila tá protegida!",
    bandono: "Tentaviva inválida! O criador do bot é intocável!",
    Banbot: "Isso, Isso, Isso... não dá pra me banir!",
    block: "Ops! Você foi bloqueado de usar os comandos... sem querer querendo!",

}

module.exports = { mensagens, enviar }