#language: pt
#encoding: UTF-8
@TesteAuto
Funcionalidade: THE INTERNET LOGIN

  Contexto: 
    Dado que o usuario acessa a area de login do sistema

  @Teste_001
  Esquema do Cenario: CST001 - LOGIN COM SUCESSO
    Quando preencher login "<login>" e senha "<senha>"
    Entao o sistema exibe na tela a mensagem "<mensagem>"

    Exemplos: 
      | login    | senha                | mensagem                       |
      | tomsmith | SuperSecretPassword! | You logged into a secure area! |

  @Teste_002
  Esquema do Cenario: CST002 - FAZER LOGIN E DESLOGAR DO SISTEMA
    E preencher login "<login>" e senha "<senha>"
    E o sistema exibe na tela a mensagem "<mensagem1>"
    Quando deslogar do sistema
    Entao o sistema exibe na tela a mensagem "<mensagem2>"

    Exemplos: 
      | login    | senha                | mensagem1                      | mensagem2                          |
      | tomsmith | SuperSecretPassword! | You logged into a secure area! | You logged out of the secure area! |

  @Teste_003
  Cenario: CST003 - FAZER LOGIN E DESLOGAR DO SISTEMA 5 VEZES
    Quando logar e deslogar do sistema 5 vezes
    Entao o sistema exibe na tela a mensagem "Login Page"

  @Teste_004
  Esquema do Cenario: CST004 - LOGIN COM PASSWORD INCORRETA
    Quando preencher login "<login>" e senha "<senha>"
    Entao o sistema exibe na tela a mensagem "<mensagem>"

    Exemplos: 
      | login    | senha               | mensagem                  |
      | tomsmith | SuperSecretPassword | Your password is invalid! |

  @Teste_005
  Esquema do Cenario: CST005 - LOGIN COM USERNAME INCORRETO
    Quando preencher login "<login>" e senha "<senha>"
    Entao o sistema exibe na tela a mensagem "<mensagem>"

    Exemplos: 
      | login | senha                | mensagem                  |
      |  1234 | SuperSecretPassword! | Your username is invalid! |

  @Teste_006
  Esquema do Cenario: CST006 - LOGIN COM USERNAME E SEM PASSWORD
    Quando preencher login "<login>" e senha "<senha>"
    Entao o sistema exibe na tela a mensagem "<mensagem>"

    Exemplos: 
      | login    | senha | mensagem                  |
      | tomsmith |       | Your password is invalid! |

  @Teste_007
  Esquema do Cenario: CST007 - LOGIN SEM USERNAME E COM PASSWORD
    Quando preencher login "<login>" e senha "<senha>"
    Entao o sistema exibe na tela a mensagem "<mensagem>"

    Exemplos: 
      | login | senha                | mensagem                  |
      |       | SuperSecretPassword! | Your username is invalid! |

  @Teste_008
  Esquema do Cenario: CST008 - LOGIN SEM USERNAME E SEM PASSWORD
    Quando preencher login "<login>" e senha "<senha>"
    Entao o sistema exibe na tela a mensagem "<mensagem>"

    Exemplos: 
      | login | senha | mensagem                  |
      |       |       | Your password is invalid! |
