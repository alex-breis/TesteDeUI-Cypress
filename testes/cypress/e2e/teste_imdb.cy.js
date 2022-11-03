/// <reference types="cypress"/>

describe("Cenário de teste para o site IMDb", ()=>{

  it('Caso de teste: Alterando o idioma do site com sucesso', ()=>{
    cy.visit('https://www.imdb.com/')
    cy.get('.sc-bBXqnf > .ipc-button').click()
    cy.get('#language-option-pt-BR > .ipc-list-item__text').click()
    cy.get(':nth-child(2) > .ipc-page-grid__item > .ipc-title > hgroup > .ipc-title__text').should('have.text','Em destaque hoje')
  })

  it('Caso de teste: Visualizar lista com os filmes mais bem avaliados com sucesso', ()=>{
    cy.visit('https://www.imdb.com/')
    cy.get('#imdbHeader-navDrawerOpen').click()
    cy.get('.sc-cb2ab421-0 > :nth-child(1) > .navlinkcat__targetWrapper > [data-testid="category-expando"] > .navlinkcat__itemTitle').click()
    cy.get('[href="/chart/top/?ref_=nv_mv_250"] > .ipc-list-item__text').click()
    cy.get('.article > .header').should('have.text','IMDb Top 250 Movies')
  })

  it('Caso de teste: Pesquisar por nome do filme com sucesso', ()=>{
    cy.visit('https://www.imdb.com/')
    cy.get('.sc-3c88d23-0 > .sc-dQppl > .ipc-button > .ipc-button__text').click()
    cy.get('#navbar-search-category-select-contents > .ipc-list > :nth-child(2) > .ipc-list-item__text').click()
    cy.get('#suggestion-search').type("Jurassic Park")
    cy.get('#react-autowhatever-1--item-0 > [data-testid="search-result--const"]').click()
    cy.get('[data-testid="hero-title-block__title"]').should('contain.text','Jurassic Park')

  })

  it('Caso de teste: Pesquisar por nome da celebridade com sucesso', ()=>{
    cy.visit('https://www.imdb.com/')
    cy.get('.sc-3c88d23-0 > .sc-dQppl > .ipc-button > .ipc-button__text').click()
    cy.get('#navbar-search-category-select-contents > .ipc-list > :nth-child(4) > .ipc-list-item__text').click()
    cy.get('#suggestion-search').type("Stallone")
    cy.get('#react-autowhatever-1--item-0 > [data-testid="search-result--const"]').click()
    cy.get('.header > .itemprop').should('have.text','Sylvester Stallone')
   
  })

  it('Caso de teste: Logar em uma conta com falha', ()=>{
    cy.Acessar_login()
    cy.get('#ap_email').type("email@teste.com")
    cy.get('#signInSubmit').click()
    cy.get('#auth-password-missing-alert > .a-box-inner').should('contain.text','Enter your password')

  })

  it('Caso de teste: Acessar página Forgot Password com sucesso', ()=>{
    cy.Acessar_login()
    cy.get('#auth-fpp-link-bottom').click()
    cy.get('h1').should('contain.text','Password assistance')
  })
  
})