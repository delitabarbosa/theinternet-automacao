$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Automacao.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    },
    {
      "line": 2,
      "value": "#encoding: UTF-8"
    }
  ],
  "line": 4,
  "name": "THE INTERNET LOGIN",
  "description": "",
  "id": "the-internet-login",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 3,
      "name": "@TesteAuto"
    }
  ]
});
formatter.before({
  "duration": 60049702500,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 7,
  "name": "que o usuario acessa a area de login do sistema",
  "keyword": "Dado "
});
formatter.match({
  "location": "StepsDefinitions.queOUsuarioAcessaAAreaDeLoginDoSistema()"
});
formatter.result({
  "duration": 13083626800,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "CST001 - LOGIN COM SUCESSO",
  "description": "",
  "id": "the-internet-login;cst001---login-com-sucesso",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 9,
      "name": "@Teste_001"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "preencher login \"tomsmith\" e senha \"SuperSecretPassword!\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "o sistema exibe na tela a mensagem \"You logged into a secure area!\"",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "tomsmith",
      "offset": 17
    },
    {
      "val": "SuperSecretPassword!",
      "offset": 36
    }
  ],
  "location": "StepsDefinitions.preencherLoginESenha(String,String)"
});
formatter.result({
  "duration": 4976337500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You logged into a secure area!",
      "offset": 36
    }
  ],
  "location": "StepsDefinitions.oSistemaExibeNaTelaAMensagem(String)"
});
formatter.result({
  "duration": 1137104000,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 4141330300,
  "status": "passed"
});
formatter.before({
  "duration": 63139432500,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 7,
  "name": "que o usuario acessa a area de login do sistema",
  "keyword": "Dado "
});
formatter.match({
  "location": "StepsDefinitions.queOUsuarioAcessaAAreaDeLoginDoSistema()"
});
formatter.result({
  "duration": 10242437300,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "CST002 - FAZER LOGIN E DESLOGAR DO SISTEMA",
  "description": "",
  "id": "the-internet-login;cst002---fazer-login-e-deslogar-do-sistema",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 14,
      "name": "@Teste_002"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "preencher login \"tomsmith\" e senha \"SuperSecretPassword!\"",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "o sistema exibe na tela a mensagem \"You logged into a secure area!\"",
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "deslogar do sistema",
  "keyword": "Quando "
});
formatter.step({
  "line": 19,
  "name": "o sistema exibe na tela a mensagem \"You logged out of the secure area!\"",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "tomsmith",
      "offset": 17
    },
    {
      "val": "SuperSecretPassword!",
      "offset": 36
    }
  ],
  "location": "StepsDefinitions.preencherLoginESenha(String,String)"
});
formatter.result({
  "duration": 4938812400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You logged into a secure area!",
      "offset": 36
    }
  ],
  "location": "StepsDefinitions.oSistemaExibeNaTelaAMensagem(String)"
});
formatter.result({
  "duration": 1129250600,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.deslogarDoSistema()"
});
formatter.result({
  "duration": 3819994600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You logged out of the secure area!",
      "offset": 36
    }
  ],
  "location": "StepsDefinitions.oSistemaExibeNaTelaAMensagem(String)"
});
formatter.result({
  "duration": 1132240500,
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 3082471400,
  "status": "passed"
});
formatter.before({
  "duration": 53559518500,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 7,
  "name": "que o usuario acessa a area de login do sistema",
  "keyword": "Dado "
});
formatter.match({
  "location": "StepsDefinitions.queOUsuarioAcessaAAreaDeLoginDoSistema()"
});
formatter.result({
  "duration": 14368801900,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "CST003 - FAZER LOGIN E DESLOGAR DO SISTEMA 5 VEZES",
  "description": "",
  "id": "the-internet-login;cst003---fazer-login-e-deslogar-do-sistema-5-vezes",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 21,
      "name": "@Teste_003"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "logar e deslogar do sistema 5 vezes",
  "keyword": "Quando "
});
formatter.step({
  "line": 24,
  "name": "o sistema exibe na tela a mensagem \"Login Page\"",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 28
    }
  ],
  "location": "StepsDefinitions.logarEDeslogarDoSistemaVezes(int)"
});
formatter.result({
  "duration": 44873060000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login Page",
      "offset": 36
    }
  ],
  "location": "StepsDefinitions.oSistemaExibeNaTelaAMensagem(String)"
});
formatter.result({
  "duration": 1148223500,
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 2973072200,
  "status": "passed"
});
formatter.before({
  "duration": 56023193400,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 7,
  "name": "que o usuario acessa a area de login do sistema",
  "keyword": "Dado "
});
formatter.match({
  "location": "StepsDefinitions.queOUsuarioAcessaAAreaDeLoginDoSistema()"
});
formatter.result({
  "duration": 11218444700,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "CST004 - LOGIN COM PASSWORD INCORRETA",
  "description": "",
  "id": "the-internet-login;cst004---login-com-password-incorreta",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 26,
      "name": "@Teste_004"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "preencher login \"tomsmith\" e senha \"SuperSecretPassword\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 29,
  "name": "o sistema exibe na tela a mensagem \"Your password is invalid!\"",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "tomsmith",
      "offset": 17
    },
    {
      "val": "SuperSecretPassword",
      "offset": 36
    }
  ],
  "location": "StepsDefinitions.preencherLoginESenha(String,String)"
});
formatter.result({
  "duration": 4825478000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your password is invalid!",
      "offset": 36
    }
  ],
  "location": "StepsDefinitions.oSistemaExibeNaTelaAMensagem(String)"
});
formatter.result({
  "duration": 1123650100,
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 2859738200,
  "status": "passed"
});
formatter.before({
  "duration": 62443022400,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 7,
  "name": "que o usuario acessa a area de login do sistema",
  "keyword": "Dado "
});
formatter.match({
  "location": "StepsDefinitions.queOUsuarioAcessaAAreaDeLoginDoSistema()"
});
formatter.result({
  "duration": 8573520900,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "CST005 - LOGIN COM USERNAME INCORRETO",
  "description": "",
  "id": "the-internet-login;cst005---login-com-username-incorreto",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 31,
      "name": "@Teste_005"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "preencher login \"1234\" e senha \"SuperSecretPassword!\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 34,
  "name": "o sistema exibe na tela a mensagem \"Your username is invalid!\"",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "1234",
      "offset": 17
    },
    {
      "val": "SuperSecretPassword!",
      "offset": 32
    }
  ],
  "location": "StepsDefinitions.preencherLoginESenha(String,String)"
});
formatter.result({
  "duration": 4941909200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your username is invalid!",
      "offset": 36
    }
  ],
  "location": "StepsDefinitions.oSistemaExibeNaTelaAMensagem(String)"
});
formatter.result({
  "duration": 1129041300,
  "status": "passed"
});
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "duration": 3781872200,
  "status": "passed"
});
formatter.before({
  "duration": 56559244700,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 7,
  "name": "que o usuario acessa a area de login do sistema",
  "keyword": "Dado "
});
formatter.match({
  "location": "StepsDefinitions.queOUsuarioAcessaAAreaDeLoginDoSistema()"
});
formatter.result({
  "duration": 11104615400,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "CST006 - LOGIN COM USERNAME E SEM PASSWORD",
  "description": "",
  "id": "the-internet-login;cst006---login-com-username-e-sem-password",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 36,
      "name": "@Teste_006"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "preencher login \"tomsmith\" e senha \"\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 39,
  "name": "o sistema exibe na tela a mensagem \"Your password is invalid!\"",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "tomsmith",
      "offset": 17
    },
    {
      "val": "",
      "offset": 36
    }
  ],
  "location": "StepsDefinitions.preencherLoginESenha(String,String)"
});
formatter.result({
  "duration": 4943993000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your password is invalid!",
      "offset": 36
    }
  ],
  "location": "StepsDefinitions.oSistemaExibeNaTelaAMensagem(String)"
});
formatter.result({
  "duration": 1124306500,
  "status": "passed"
});
formatter.embedding("image/png", "embedded5.png");
formatter.after({
  "duration": 3738305500,
  "status": "passed"
});
formatter.before({
  "duration": 57376460300,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 7,
  "name": "que o usuario acessa a area de login do sistema",
  "keyword": "Dado "
});
formatter.match({
  "location": "StepsDefinitions.queOUsuarioAcessaAAreaDeLoginDoSistema()"
});
formatter.result({
  "duration": 10337785700,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "CST007 - LOGIN SEM USERNAME E COM PASSWORD",
  "description": "",
  "id": "the-internet-login;cst007---login-sem-username-e-com-password",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 41,
      "name": "@Teste_007"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "preencher login \"\" e senha \"SuperSecretPassword!\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 44,
  "name": "o sistema exibe na tela a mensagem \"Your username is invalid!\"",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 17
    },
    {
      "val": "SuperSecretPassword!",
      "offset": 28
    }
  ],
  "location": "StepsDefinitions.preencherLoginESenha(String,String)"
});
formatter.result({
  "duration": 4914272100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your username is invalid!",
      "offset": 36
    }
  ],
  "location": "StepsDefinitions.oSistemaExibeNaTelaAMensagem(String)"
});
formatter.result({
  "duration": 1120842000,
  "status": "passed"
});
formatter.embedding("image/png", "embedded6.png");
formatter.after({
  "duration": 3752835700,
  "status": "passed"
});
formatter.before({
  "duration": 60931750900,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 7,
  "name": "que o usuario acessa a area de login do sistema",
  "keyword": "Dado "
});
formatter.match({
  "location": "StepsDefinitions.queOUsuarioAcessaAAreaDeLoginDoSistema()"
});
formatter.result({
  "duration": 8445736300,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "CST008 - LOGIN SEM USERNAME E SEM PASSWORD",
  "description": "",
  "id": "the-internet-login;cst008---login-sem-username-e-sem-password",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 46,
      "name": "@Teste_008"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "preencher login \"\" e senha \"\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 49,
  "name": "o sistema exibe na tela a mensagem \"Your username is invalid!\"",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 17
    },
    {
      "val": "",
      "offset": 28
    }
  ],
  "location": "StepsDefinitions.preencherLoginESenha(String,String)"
});
formatter.result({
  "duration": 4917008500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your username is invalid!",
      "offset": 36
    }
  ],
  "location": "StepsDefinitions.oSistemaExibeNaTelaAMensagem(String)"
});
formatter.result({
  "duration": 1111174700,
  "status": "passed"
});
formatter.embedding("image/png", "embedded7.png");
formatter.after({
  "duration": 3731948800,
  "status": "passed"
});
});