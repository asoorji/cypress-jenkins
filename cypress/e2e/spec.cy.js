///<reference types="cypress"/>

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://konga.com', {
      onBeforeLoad(win) {
        win.fbq = cy.stub();  // Stubbing the fbq function
      },
    });
    cy.get('.f6ed2_25oVd > .c3171_2iDwi > #jsSearchInput').type('freezer');
    cy.get('.f6ed2_25oVd > .fdd83_39Iap').click();

    cy.wait(10000);

    cy.scrollTo('bottom');  
    // cy.get('.b49ee_2pjyI > :nth-child(1) > :nth-child(1) > .a2cf5_2S5q5').click();
    // cy.get('._7bc9f_Ef1Zw > ._2aac2_3bwnD > ._0a08a_3czMG').scrollIntoView()
    // .should('be.visible')
    // .click();
  });
});
