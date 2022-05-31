<h1>Angular2</h1>
<h2>Com Node/npm, Typescript, SystemJS e Visual Studio Code</h2>

<p>Esta obra tem como objetivo apresentar o framework Angular, em sua nova versão, na qual foi totalmente reescrita. Quase todos os conceitos da versão 1 ficaram obsoletos e novas técnicas estão sendo utilizadas no Angular 2, com o objetivo de prover um framework mais dinâmico e moderno.</p>

<p>Antes de abordarmos o Angular 2 é necessário rever algumas tecnologias que são vitais para o desenvolvimento de qualquer biblioteca utilizando HTML/Javascript. Primeiro, usaremos extensivamente o Node, que é uma forma de executar Javascript no servidor. O uso do Node será vital para que possamos manipular bibliotecas em nosso projeto, que serão instaladas através do gerenciador de pacotes do Node chamado npm.</p>

<hr>

<strong>Introdução</strong>

<ol>
  <li>Pré requisitos</li>
  <ol>
    <li>Node</li>
    <li>Servidor web</li>
    <li>Arquivo package.json</li>
    <li>Erros ao instalar o Angular 2</li>
    <li>Arquivo package.json</li>
    <li>Editores de texto e IDEs</li>
  </ol>
  <li>Além do Javascript</li>
  <li>TypeScript</li>
  <li>Código fonte</li>
</ol>

<strong>TypeScript1</strong>
<ol>
  <li>Instalando TypeScript</li>
  <li>Uso do Visual Studio Code</li>
  <ol>
    <li>Detectando alterações</li>
    <li>Debug no Visual Studio Code</li>
    <li>Debug no navegador</li>
  </ol>
  <li>Tipos</li>
  <ol>
    <li>Tipos Básicos</li>
    <li>Arrays</li>
    <li>Enum</li>
    <li>Any</li>
    <li>Void</li>
  </ol>
  <li>Classes</li>
  <ol>
    <li>Construtor</li>
    <li>Visibilidade de métodos e propriedades</li>
  </ol>
  <li>Herança</li>
  <li>Accessors (get/set)</li>
  <li>Métodos Estáticos</li>
  <li>Interfaces</li>
  <li>Funções</li>
  <ol>
    <li>Valor padrão</li>
    <li>Valor opcional</li>
  </ol>
  <li>Parâmetros Rest</li>
  <li>Parâmetros no formato JSON</li>
  <li>Módulos</li>
  <ol>
    <li>Exemplo com Systemjs</li>
    <li>Omitindo arquivos js e map no VSCode</li>
    <li>Uso do SystemJS</li>
  </ol>
  <li>Decorators (ou annotation)</li>
  <li>Conclusão</li>
</ol>

3. Um pouco de prática . . . 49
   3.1 Projeto AngularBase 49
   3.1.1 Configurando o projeto 49
   3.1.2 Erros ao instalar o Angular 2 49
   3.1.3 Configurando a compilação do TypeScript . . . 50
   3.1.4 Criando o primeiro componente Angular 2 . . . 52
   3.1.5 Criando o bootstrap . . 53
   3.1.6 Criando o arquivo html 53
   3.2 Criando uma pequena playlist . 55
4. Estrutura inicial dos arquivos 56
5. Criando um arquivo de configuração da aplicação7
6. Adicionando bootstrap . 59
7. Criando a classe Video . 61
8. Criando uma lista simples de vídeos . 62
9. Criando sub-componentes . . 63
10. Formatando o template . 65
11. Repassando valores entre componentes 67
12. Selecionando um vídeo . 70
    3.0 Eventos . . . 70
    3.1 Propagando eventos . . 72
    3.2 Exibindo os detalhes do vídeo 74
    3.3 Editando os dados do video selecionado8
    3.4 Editando o título . . . . 81
    CONTEÚDO
    3.5 Criando um novo item . 84
    3.6 Algumas considerações 85
    3.3 Criando Componentes6
    3.4 Componentes Hierárquicos . . . 93
13. Um pouco de teoria6
    4.1 Visão Geral 96
    4.2 Módulo (module) . . 97
14. Library Module8
    4.3 Componente (component) . . . 99
    4.4 Template . 100
    4.4.1 Interpolation (Uso de {{ }}) . . 101
    4.4.2 Template Expressions . 101
    4.5 Property Bind01
    4.5.1 Laços02
    4.5.2 Pipes (Operador |) . . . 103
    4.6 Metadata (annotation)03
    4.7 Serviço (Service) . . 104
    4.8 Injeção de dependência04
    4.8.1 Uso do @Injectable() . . 106
15. Formulários . . . 108
    5.1 Criando o projeto inicial . . . . 108
    5.2 Uso do ngControl . . 114
    5.3 Exibindo uma mensagem de erro . . 116
    5.4 Desabilitando o botão de submit do formulário 117
    5.5 Submit do formulário 118
    5.6 Controlando a visibilidade do formulário . . . 119
16. Conexão com o servidor . 122
    6.1 Criando o projeto . . 122
    6.2 Uso da classe Http . 123
    6.3 Utilizando services . 128
    6.4 Organização do projeto28
    6.5 Model user 130
    6.6 Service user 131
    6.7 Alterando o componente AppComponent . . . 132
    6.8 Enviando dados . . . 133
    CONTEÚDO
17. Routes . 135
    7.1 Aplicação AngularRoutes . . . 135
    7.2 Dividindo a aplicação em partes 137
    7.3 Criando a área onde os componentes serão carregados . 138
    7.4 Configurando o router38
    7.5 Criando links para as rotas . . . 139
    7.6 Repassando parâmetros40
18. Exemplo Final - Servidor 142
    8.1 Criando o servidor RESTful . . 142
    8.2 O banco de dados MongoDB . . 142
    8.3 Criando o projeto . . 146
    8.4 Estrutura do projeto 147
    8.5 Configurando os modelos do MondoDB48
    8.6 Configurando o servidor Express . . 149
    8.7 Testando o servidor . 158
    8.8 Testando a api sem o Angular . 159
19. Exemplo Final - Cliente . 165
    9.1 Arquivos iniciais . . 165
    9.2 Preparando o Template base da aplicação . . . 170
    9.3 Implementando o roteamento (Router)72
    9.3.1 Criando componentes . 172
    9.3.2 Configurando o @RouteConfig74
    9.3.3 Configurando o menu . 175
    9.3.4 Configurando o router-outlet 176
    9.4 Exibindo Posts . . . 176
    9.5 Login . . . 180
    9.6 Services . . 183
    9.6.1 LoginService 183
    9.6.2 UserService . 184
    9.6.3 HeadersService85
    9.7 Conectando no servidor . . . . 186
    9.8 Posts89
    9.8.1 PostService . 191
    9.9 Refatorando a tela inicial . . . . 192
    9.10 Conclusão . 196
20. Utilizando Sublime Text . 197
    CONTEÚDO
    10.1 Instalação . 197
    10.2 Adicionando suporte a linguagem TypeScript . 197
    10.3 Automatizando a build TypeScript . . 199
21. Publicando a aplicação em um servidor cloud . . 201
    11.1 Criando a conta na Digital Ocean . . 201
    11.2 Criando o droplet (servidor) . . 202
    11.3 Configurando o acesso SSH . . 204
    11.4 Criando o usuário . . 206
    11.5 Instalando o git . . . 208
    11.6 Instalando Node . . 209
    11.7 Instalando o nginx . 209
    11.8 Instalando os módulos do node 211
    11.9 Recompilando os arquivos TypeScript 211
    11.10 Teste inicial 212
    11.11 Integração entre nginx e node . 212
    11.12 Algumas considerações sobre node+nginx . . 216
    11.13 Domínio . . 216
    11.14 Conclusão . 218

<hr>

<hr>

<h4><b>Aulas:</b> 📚 11 capítulos</h4>
<h4><b>Status do Curso:</b> :speech_balloon: Estudando</h4>
