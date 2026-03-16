@echo off
setlocal

title Chaves-bot - Menu
color 0f
 
:inicio
cls
echo.
echo   ======================================
echo           CHAVES-BOT - MENU
echo   ======================================
echo.
echo   1 - Iniciar / Reiniciar o bot
echo   2 - Conectar via codigo
echo   3 - Conectar via QR Code
echo   4 - Limpar sessao (QR antigo)
echo   5 - Instalar / Atualizar dependencias
echo   6 - Sair
echo.
set /p opcao=Digite o numero da opcao: 

if "%opcao%"=="1" goto iniciar
if "%opcao%"=="2" goto codigo
if "%opcao%"=="3" goto qr
if "%opcao%"=="4" goto limpar
if "%opcao%"=="5" goto deps
if "%opcao%"=="6" goto sair

echo.
echo Opcao invalida.
pause
goto inicio

:iniciar
echo.
echo Iniciando bot (modo simples)...
set AUTH_MODE=qr
set PAIRING_NUMBER=
set PUPPETEER_BROWSER_URL=
call :runbot_simple
goto inicio

:codigo
echo.
set /p numparear=Digite seu numero com DDI (ex: 3519XXXXXXXX): 
if "%numparear%"=="" (
  echo Numero invalido.
  pause
  goto inicio
)
echo Limpando sessao antiga para gerar novo codigo...
call :clear_session
set AUTH_MODE=code
set PAIRING_NUMBER=%numparear%
echo Conectando via codigo...
call :runbot
goto inicio

:qr
echo.
set AUTH_MODE=qr
set PAIRING_NUMBER=
echo Conectando via QR...
call :runbot
goto inicio

:runbot
set "PUPPETEER_BROWSER_URL="
node index.js
set EXIT_CODE=%ERRORLEVEL%
if "%EXIT_CODE%"=="82" (
  echo.
  echo Restart solicitado pelo bot. Iniciando novamente...
  timeout /t 1 >nul
  goto runbot
)
if errorlevel 1 (
  echo.
  echo O bot fechou com erro. Veja a mensagem acima.
  pause
)
exit /b 0

:runbot_simple
node index.js
set EXIT_CODE=%ERRORLEVEL%
if "%EXIT_CODE%"=="82" (
  echo.
  echo Restart solicitado pelo bot. Iniciando novamente...
  timeout /t 1 >nul
  goto runbot_simple
)
if errorlevel 1 (
  echo.
  echo O bot fechou com erro. Veja a mensagem acima.
  pause
)
exit /b 0

:limpar
echo.
echo Limpando sessao antiga...
call :clear_session
echo Sessao limpa.
pause
goto inicio

:clear_session
echo Encerrando processos do navegador/bot...
taskkill /f /t /im msedge.exe >nul 2>nul
taskkill /f /t /im chrome.exe >nul 2>nul
taskkill /f /t /im node.exe >nul 2>nul
timeout /t 2 >nul

if exist .wwebjs_auth rd /s /q .wwebjs_auth
if exist .wwebjs_cache rd /s /q .wwebjs_cache
if exist .edge-wwebjs rd /s /q .edge-wwebjs

if exist .wwebjs_auth (
  echo.
  echo Nao foi possivel apagar .wwebjs_auth (arquivos em uso).
  echo Feche o Edge e qualquer node.exe e tente novamente.
)
if exist .edge-wwebjs (
  echo.
  echo Nao foi possivel apagar .edge-wwebjs.
  echo Feche o Microsoft Edge e tente novamente.
)
exit /b 0

:deps
echo.
echo Instalando/atualizando dependencias...
npm install
echo Feito. Reinicie o bot.
pause
goto inicio

:sair
echo.
echo Saindo...
timeout /t 1 >nul
exit /b 0
