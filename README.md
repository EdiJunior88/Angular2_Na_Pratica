<h1>Angular2</h1>
<h2>Com Node/npm, Typescript, SystemJS e Visual Studio Code</h2>

<p>Esta obra tem como objetivo apresentar o framework Angular, em sua nova versão, na qual foi totalmente reescrita. Quase todos os conceitos da versão 1 ficaram obsoletos e novas técnicas estão sendo utilizadas no Angular 2, com o objetivo de prover um framework mais dinâmico e moderno.</p>

<p>Antes de abordarmos o Angular 2 é necessário rever algumas tecnologias que são vitais para o desenvolvimento de qualquer biblioteca utilizando HTML/Javascript. Primeiro, usaremos extensivamente o Node, que é uma forma de executar Javascript no servidor. O uso do Node será vital para que possamos manipular bibliotecas em nosso projeto, que serão instaladas através do gerenciador de pacotes do Node chamado npm.</p>

<hr>

<strong>1 - Introdução</strong>

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

<strong>2 - TypeScript1</strong>

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

<strong>3 - Um pouco de prática </strong>
<ol>
  <li>Projeto AngularBase</li>
  <ol>
    <li>Configurando o projeto</li>
    <li>Erros ao instalar o Angular 2</li>
    <li>Configurando a compilação do TypeScript</li>
    <li>Criando o primeiro componente Angular 2</li>
    <li>Criando o bootstrap</li>
    <li>Criando o arquivo html</li>
  </ol>
  <li>Criando uma pequena playlist</li>
  <ol>
    <li>Estrutura inicial dos arquivos</li>
    <li>Criando um arquivo de configuração da aplicação</li>
    <li>Adicionando bootstrap</li>
    <li>Criando a classe Video</li>
    <li>Criando uma lista simples de vídeos</li>
    <li>Criando sub-componentes</li>
    <li>Formatando o template</li>
    <li>Repassando valores entre componentes</li>
    <li>Selecionando um vídeo</li>
    <li>Eventos</li>
    <li>Propagando eventos</li>
    <li>Exibindo os detalhes do vídeo</li>
    <li>Editando os dados do video selecionado</li>
    <li>Editando o título</li>
    <li>Criando um novo item</li>
    <li>Algumas considerações</li>
  </ol>
  <li>Criando Componentes</li>
  <li>Componentes Hierárquicos</li>
</ol>

<strong>4 - Um pouco de teoria</strong>
<ol>
  <li>Visão Geral</li>
  <li>Módulo (module)</li>
  <ol>
    <li>Library Module</li>
  </ol>
  <li>Componente (component)</li>
  <li>Template</li>
  <ol>
    <li>Interpolation (Uso de {{ }})</li>
    <li>Template Expressions</li>
  </ol>
  <li>Property Bind</li>
  <ol>
    <li>Laços</li>
    <li>Pipes (Operador |)</li>
  </ol>
  <li>Metadata (annotation)</li>
  <li>Serviço (Service)</li>
  <li>Injeção de dependência</li>
  <ol>
    <li>Uso do @Injectable()</li>
  </ol>
</ol>

ormulários 8
5.1 Criando o projeto inicial 108
5.2 Uso do ngControl . . 114
5.3 Exibindo uma mensagem de erro . . 116
5.4 Desabilitando o botão de submit do formulário 117
5.5 Submit do formulário 118
5.6 Controlando a visibilidade do formulário 9 16. Conexão com o servidor . 122
6.1 Criando o projeto . . 122
6.2 Uso da classe Http . 123
6.3 Utilizando services . 128
6.4 Organização do projeto28
6.5 Model user 130
6.6 Service user 131
6.7 Alterando o componente AppComponent 2
6.8 Enviando dados 3
CONTEÚDO 17. Routes . 135
7.1 Aplicação AngularRoutes 5
7.2 Dividindo a aplicação em partes 137
7.3 Criando a área onde os componentes serão carregados . 138
7.4 Configurando o router38
7.5 Criando links para as rotas 9
7.6 Repassando parâmetros40 18. Exemplo Final - Servidor 142
8.1 Criando o servidor RESTful . . 142
8.2 O banco de dados MongoDB . . 142
8.3 Criando o projeto . . 146
8.4 Estrutura do projeto 147
8.5 Configurando os modelos do MondoDB48
8.6 Configurando o servidor Express . . 149
8.7 Testando o servidor . 158
8.8 Testando a api sem o Angular . 159 19. Exemplo Final - Cliente . 165
9.1 Arquivos iniciais . . 165
9.2 Preparando o Template base da aplicação 0
9.3 Implementando o roteamento (Router)72
9.Criando componentes . 172
9.Configurando o @RouteConfig74
9.3.3 Configurando o menu . 175
9.3.4 Configurando o router-outlet 176
9.4 Exibindo Posts 6
9.5 Login 0
9.6 Services . . 183
9.6.1 LoginService 183
9.6.2 UserService . 184
9.6.3 HeadersService85
9.7 Conectando no servidor 186
9.8 Posts89
9.8.1 PostService . 191
9.9 Refatorando a tela inicial 192
9.10 Conclusão . 196 20. Utilizando Sublime Text . 197
CONTEÚDO
10.1 Instalação . 197
10.2 Adicionando suporte a linguagem TypeScript . 197
10.3 Automatizando a build TypeScript . . 199 21. Publicando a aplicação em um servidor cloud . . 201
11.1 Criando a conta na Digital Ocean . . 201
11.2 Criando o droplet (servidor) . . 202
11.3 Configurando o acesso SSH . . 204
11.4 Criando o usuário . . 206
11.5 Instalando o git 8
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
