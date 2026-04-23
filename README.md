# Teste Pratico Tre

## Sobre o projeto

Este projeto e uma aplicacao web desenvolvida em Angular para cadastro e consulta de pessoas.
O sistema consome uma API externa, exibe indicadores em cards, lista os registros cadastrados e oferece interacoes como busca, visualizacao de detalhes, cadastro e exclusao.

O foco da aplicacao e entregar uma interface simples para gerenciamento de dados cadastrais, organizando as responsabilidades em componentes e paginas separados.

## Funcionalidades

- Exibicao de resumo com total de pessoas, cidades e estados.
- Listagem de pessoas cadastradas.
- Busca por nome, CPF e email.
- Abertura de modal com detalhes da pessoa selecionada.
- Abertura de formulario para novo cadastro.
- Exclusao de registro com confirmacao em modal.
- Feedback visual com notificacoes usando toast.

## Tecnologias utilizadas

- Angular 21
- TypeScript
- HTML
- CSS
- Angular Forms
- Angular HttpClient
- Angular Animations
- ngx-toastr
- Vitest

## Bibliotecas e recursos usados

### Angular

O projeto foi criado com Angular CLI e usa componentes standalone.

### HttpClient

Utilizado para comunicacao com a API de pessoas.

### FormsModule

Usado para o binding dos campos do formulario e da busca.

### ngx-toastr

Responsavel pelas notificacoes de sucesso e erro nas operacoes de cadastro e exclusao.

### provideAnimationsAsync

Necessario para o funcionamento das animacoes usadas pelo toastr.

## Estrutura do projeto

```text
src/
	app/
		app.config.ts
		app.css
		app.html
		app.routes.ts
		app.spec.ts
		app.ts
		components/
			cards/
				cards.css
				cards.html
				cards.spec.ts
				cards.ts
			header/
				header.css
				header.html
				header.spec.ts
				header.ts
		pages/
			formulario/
				formulario.css
				formulario.html
				formulario.spec.ts
				formulario.ts
			lista/
				lista.css
				lista.html
				lista.spec.ts
				lista.ts
```

## Organizacao por pasta

### `components`

Contem partes reutilizaveis da interface.

- `header`: cabecalho principal da aplicacao.
- `cards`: indicadores com totais carregados da API.

### `pages`

Contem as areas principais da aplicacao.

- `lista`: listagem, busca, detalhes e exclusao.
- `formulario`: cadastro de pessoa e reaproveitamento de dados para preenchimento.

### Arquivos principais da aplicacao

- `app.ts`: componente raiz.
- `app.html`: estrutura principal da tela.
- `app.config.ts`: configuracao global, providers, HttpClient e toastr.
- `app.routes.ts`: configuracao de rotas. Atualmente esta vazio.

## Como a aplicacao funciona

### Header

Exibe o titulo do sistema e um texto de apoio no topo da pagina.

### Cards

Faz requisicao para a API e calcula:

- total de pessoas
- total de cidades
- total de estados

### Lista

Faz a leitura da API e mostra os registros em tabela.
Tambem concentra as acoes principais:

- busca por texto
- abertura do formulario
- visualizacao de detalhes
- confirmacao de exclusao

### Formulario

Responsavel pelo envio dos dados para cadastro de uma nova pessoa.
Tambem consegue receber uma pessoa selecionada para preencher os campos da tela.

## Integracao com API

O projeto consome uma API Oracle ORDS no endpoint abaixo:

```text
https://gbebca2c3091cae-internshipdb1.adb.sa-saopaulo-1.oraclecloudapps.com/ords/estagio/pessoa/
```

### Operacoes usadas atualmente

- `GET`: carregar lista de pessoas.
- `POST`: cadastrar nova pessoa.
- `DELETE`: remover pessoa pelo CPF.

## Instalacao e execucao

### 1. Instalar dependencias

```bash
npm install
```

### 2. Rodar o projeto em desenvolvimento

```bash
npm start
```

Depois disso, acesse:

```text
http://localhost:4200/
```

## Scripts disponiveis

### Iniciar servidor local

```bash
npm start
```

### Gerar build

```bash
npm run build
```

### Executar testes

```bash
npm test
```

### Build em modo watch

```bash
npm run watch
```

## Dependencias do projeto

### Dependencias principais

- `@angular/animations`
- `@angular/common`
- `@angular/compiler`
- `@angular/core`
- `@angular/forms`
- `@angular/platform-browser`
- `@angular/router`
- `ngx-toastr`
- `rxjs`
- `tslib`

### Dependencias de desenvolvimento

- `@angular/build`
- `@angular/cli`
- `@angular/compiler-cli`
- `jsdom`
- `prettier`
- `typescript`
- `vitest`

## Observacoes

- O projeto utiliza componentes standalone.
- A aplicacao depende da disponibilidade da API externa para carregar e enviar dados.
- O arquivo de rotas existe, mas a navegacao por rotas ainda nao esta sendo usada.

## Ideia visual usada como referencia

https://agile-tweak-98318116.figma.site/
