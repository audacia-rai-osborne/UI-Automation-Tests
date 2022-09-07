import Env from '../../../models/env';
import SecondPageSelectors from '../../../models/selectors/second-page-selectors';

describe('As a user I can go to the second page of books', () => {
  it('Allows a user to go to the second page', () => {
    // visit homepage of book website
    cy.visit(Env.homeURL);

    // Click on second page button
    cy.get(SecondPageSelectors.SecondPageButton).click();

    // Check second page has been reached
    cy.get(SecondPageSelectors.ThirdPageButton).should('be.visible');

    //Return to first page 
    cy.get(SecondPageSelectors.FirstPageButton).click()
  });
});
