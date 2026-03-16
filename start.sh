#!/bin/bash

clear

while true
do
echo ""
echo "  ======================================"
echo "          CHAVES-BOT - MENU"
echo "  ======================================"
echo ""
echo "  1 - Iniciar / Reiniciar o bot"
echo "  2 - Conectar via codigo"
echo "  3 - Conectar via QR Code"
echo "  4 - Limpar sessao (QR antigo)"
echo "  5 - Instalar / Atualizar dependencias"
echo "  6 - Sair"
echo ""

read -p "Digite o numero da opcao: " opcao

if [ "$opcao" = "1" ]; then
    export AUTH_MODE="qr"
    export PAIRING_NUMBER=""
    runbot_simple
fi

if [ "$opcao" = "2" ]; then
    read -p "Digite seu numero com DDI (ex: 3519XXXXXXXX): " numparear
    if [ -z "$numparear" ]; then
        echo "Numero invalido."
        read -p "Pressione ENTER..."
        continue
    fi

    echo "Limpando sessao antiga para gerar novo codigo..."
    clear_session
    export AUTH_MODE="code"
    export PAIRING_NUMBER="$numparear"

    echo "Conectando via codigo..."
    runbot
fi

if [ "$opcao" = "3" ]; then
    export AUTH_MODE="qr"
    export PAIRING_NUMBER=""
    echo "Conectando via QR..."
    runbot
fi

if [ "$opcao" = "4" ]; then
    echo "Limpando sessao antiga..."
    clear_session
    echo "Sessao limpa."
    read -p "Pressione ENTER..."
fi

if [ "$opcao" = "5" ]; then
    echo "Instalando/atualizando dependencias..."
    npm install
    echo "Feito. Reinicie o bot."
    read -p "Pressione ENTER..."
fi

if [ "$opcao" = "6" ]; then
    echo "Saindo..."
    sleep 1
    exit
fi

done


runbot() {
while true
do
node index.js
EXIT_CODE=$?

if [ "$EXIT_CODE" = "82" ]; then
    echo ""
    echo "Restart solicitado pelo bot. Iniciando novamente..."
    sleep 1
else
    echo ""
    echo "O bot fechou com erro. Veja a mensagem acima."
    read -p "Pressione ENTER..."
    break
fi
done
}

runbot_simple() {
while true
do
node index.js
EXIT_CODE=$?

if [ "$EXIT_CODE" = "82" ]; then
    echo ""
    echo "Restart solicitado pelo bot. Iniciando novamente..."
    sleep 1
else
    break
fi
done
}

clear_session() {
echo "Encerrando processos do navegador/bot..."

pkill -f chrome
pkill -f edge
pkill -f node

sleep 2

rm -rf .wwebjs_auth
rm -rf .wwebjs_cache
rm -rf .edge-wwebjs
}