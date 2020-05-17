describe( 'Check that home page works', () => {
    it('navigate to home page', () => {
        cy.visit( 'http://localhost:3000/' );
    });
} );

describe( 'Check navbar', () => {
    it('When it click in the profile link should delivery it to the profile page', () => {
        
        cy.get(".go-to-Profile").click();

        cy.location().should((loc) => {
            expect(loc.pathname).to.eq('/profile')
        })
        
        
    });
} )
