#language: pt
#encoding: UTF-8
@TesteAuto
Funcionalidade: THE INTERNET LOGIN

  Contexto: 
    Dado que o usuario acessa a area de login do sistema

  @Teste_001
  Cenario: CST001 - LOGIN COM SUCESSO
    Quando preencher login "tomsmith" e senha "SuperSecretPassword!"
    Entao o sistema exibe na tela a mensagem "You logged into a secure area!"

  @Teste_002
  Cenario: CST002 - FAZER LOGIN E DESLOGAR DO SISTEMA
    E preencher login "tomsmith" e senha "SuperSecretPassword!"
    E o sistema exibe na tela a mensagem "You logged into a secure area!"
    Quando deslogar do sistema
    Entao o sistema exibe na tela a mensagem "You logged out of the secure area!"

  @Teste_003
  Cenario: CST003 - FAZER LOGIN E DESLOGAR DO SISTEMA 5 VEZES
    Quando logar e deslogar do sistema 5 vezes
    Entao o sistema exibe na tela a mensagem "Login Page"

  @Teste_004
  Cenario: CST004 - LOGIN COM PASSWORD INCORRETA
    Quando preencher login "tomsmith" e senha "SuperSecretPassword"
    Entao o sistema exibe na tela a mensagem "Your password is invalid!"

  @Teste_005
  Cenario: CST005 - LOGIN COM USERNAME INCORRETO
    Quando preencher login "1234" e senha "SuperSecretPassword!"
    Entao o sistema exibe na tela a mensagem "Your username is invalid!"

  @Teste_006
  Cenario: CST006 - LOGIN COM USERNAME E SEM PASSWORD
    Quando preencher login "tomsmith" e senha ""
    Entao o sistema exibe na tela a mensagem "Your password is invalid!"

  @Teste_007
  Cenario: CST007 - LOGIN SEM USERNAME E COM PASSWORD
    Quando preencher login "" e senha "SuperSecretPassword!"
    Entao o sistema exibe na tela a mensagem "Your username is invalid!"

  @Teste_008
  Cenario: CST008 - LOGIN SEM USERNAME E SEM PASSWORD
    Quando preencher login "" e senha ""
    Entao o sistema exibe na tela a mensagem "Your username is invalid!"
