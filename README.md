# Trabalho Prático S206 - Testes de UI com Cypress

Repositório para entrega do trabalho prático de S206-L1 sobre testes de UI utilizando a ferramenta Cypress.

## Descrição do projeto:

Os seguintes testes foram elaborados para o site IMDb(Internet Movie Database). O site contém uma base de dados com inúmeros filmes, séries, documentários, entre outros, sendo possível buscar por eles para ver suas sinopses, críticas, e a potuação geral obtida pela obra. Os testes desenvolvidos para a página são os seguintes:

1. Alterar o idioma do site: A página possui o recurso de troca de idioma, logo foi testado alterar para o português e averiguar se a mudança ocorreu efetivamente.

2. Visualizar lista de filmes mais bem avaliados: Foi testado entrar na página que contém os 250 filmes mais bem avaliados de todos.

3. Pesquisar por um nome de filme: Através da barra de pesquisa do site, aplicando o filtro de títulos, foi realiado o teste para buscar um filme com nome "Jurassic Park".

4. Pesquisar por um nome de celebridade: Por meio da barra de pesquisa do site, aplicando o filtro de celebridades, foi realiado o teste para buscar uma celebridade com nome "Stallone".

5. Tentar logar no site (Falha): Foi testado tentar realizar um login sem digitar a senha, esperando uma falha.

6. Acessar página Forgot Password: Por meio do botão de Forgot Password na aba de Login foi averiguado se o site iria para a nova página corretamente.

Link do site testado: https://www.imdb.com/

## Executando o projeto:

Siga os seguintes passos para executar o projeto:

1. Clone esse repositório na sua máquina.

2. Instalar o Node por meio do link: https://nodejs.org/en/ 

3. Dentro da pasta 'testes' realize a instalação do Cypress por meio do terminal digitando o comando:

```
npm install cypress
```

4. Para executar os testes via terminal utilize o comando:

```
./node_modules/.bin/cypress run --spec 'cypress/e2e/**/'
```

### Gerar um relatório HTML com os resultados dos testes:

1. Execute o comando abaixo para instalar as dependências necessárias:
```
npm i --save-dev cypress-mochawesome-reporter
```

2. Execute os testes via terminal utilizando o comando abaixo:
```
./node_modules/.bin/cypress run --spec 'cypress/e2e/**/'
```