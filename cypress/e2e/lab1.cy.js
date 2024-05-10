describe('template spec', () => {
    it('passes', () => {
        cy.visit('https://my-app.rodrigoferreirap68681.workers.dev')
    })
    it('h1 contains "MEICM"', () => {
        cy.visit('https://my-app.rodrigoferreirap68681.workers.dev');
        cy.get('h1').contains('MEICM')
    })
})