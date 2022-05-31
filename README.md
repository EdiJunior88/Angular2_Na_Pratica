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

<strong>5 - Formulários 8</strong>

<ol>
  <li>Criando o projeto inicial</li>
  <li>Uso do ngControl</li>
  <li>Exibindo uma mensagem de erro</li>
  <li>Desabilitando o botão de submit do formulário</li>
  <li>Submit do formulário</li>
  <li>Controlando a visibilidade do formulário</li>
</ol>

<strong>6 - Conexão com o servidor</strong>

<ol>
  <li>Criando o projeto</li>
  <li>Uso da classe Http</li>
  <li>Utilizando services</li>
  <li>Organização do projeto</li>
  <li>Model user</li>
  <li>Service user</li>
  <li>Alterando o componente AppComponent</li>
  <li>Enviando dados</li>
</ol>

<strong>7 - Routes</strong>

<ol>
  <li>Aplicação AngularRoutes</li>
  <li>Dividindo a aplicação em partes</li>
  <li>Criando a área onde os componentes serão carregados</li>
  <li>Configurando o router</li>
  <li>Criando links para as rotas</li>
  <li>Repassando parâmetros</li>
</ol>

<strong>8 - Exemplo Final - Servidor</strong>

<ol>
  <li>Criando o servidor RESTful</li>
  <li>O banco de dados MongoDB</li>
  <li>Criando o projeto</li>
  <li>Estrutura do projeto</li>
  <li>Configurando os modelos do MondoDB</li>
  <li>Configurando o servidor Express</li>
  <li>Testando o servidor</li>
  <li>Testando a api sem o Angular</li>
</ol>

<strong>9 - Exemplo Final - Cliente</strong>

<ol>
  <li>Arquivos iniciais</li>
  <li>Preparando o Template base da aplicação</li>
  <li>Implementando o roteamento (Router)</li>
  <ol>
    <li>Criando componentes</li>
    <li>Configurando o @RouteConfig</li>
    <li>Configurando o menu</li>
    <li>Configurando o router-outlet</li>
  </ol>
  <li>Exibindo Posts</li>
  <li>Login</li>
  <li>Services</li>
  <ol>
    <li>LoginService</li>
    <li>UserService</li>
    <li>HeadersService</li>
  </ol>
  <li>Conectando no servidor</li>
  <li>Posts</li>
  <ol>
    <li>PostService</li>
  </ol>
  <li>Refatorando a tela inicial</li>
  <li>Conclusão</li>
</ol>

10. Utilizando Sublime Text 197
    10.1 Instalação 197
    10.2 Adicionando suporte a linguagem TypeScript 197
    10.3 Automatizando a build TypeScript 199 21. Publicando a aplicação em um servidor cloud 201
    11.1 Criando a conta na Digital Ocean 201
    11.2 Criando o droplet (servidor) 202
    11.3 Configurando o acesso SSH 204
    11.4 Criando o usuário 206
    11.5 Instalando o git 8
    11.6 Instalando Node 209
    11.7 Instalando o nginx 209
    11.8 Instalando os módulos do node 211
    11.9 Recompilando os arquivos TypeScript 211
    11.10 Teste inicial 212
    11.11 Integração entre nginx e node 212
    11.12 Algumas considerações sobre node+nginx 216
    11.13 Domínio 216
    11.14 Conclusão 218

<hr>

<hr>

<h4><b>Aulas:</b> 📚 11 capítulos</h4>
<h4><b>Status do Curso:</b> :speech_balloon: Estudando</h4>
