import ApiRoutesBooks from '../../../models/routes';
import HomeSelectors from '../../../models/selectors/home-selectors';

let bookId = null;

describe('As a user I can edit a books details as long as I use the form correctly', () => {
  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl);
    cy.addBookBefore('Name', 'Description', 'Author', 2020, '2022-08-18T10:19:23.968Z', true, 1).then((response) => { bookId = response; });
  });
  afterEach(() => {
    cy.deleteBookAfter(bookId);
  });

  it('Allows a user to edit a books name', () => {
    // open book
    cy.openSpecifiedBook(bookId);

    // Clear and then add new book title
    cy.get(HomeSelectors.BookTitle).clear().type('New book title');

    // Make sure the request to edit the book is intercepted
    cy.intercept(ApiRoutesBooks.EditBook).as('editBook');

    // Save changes
    cy.get(HomeSelectors.UpdateButton).click();

    // Check that the request to edit the book returns a 200 status code
    cy.wait('@editBook').then((intercept) => {
      const { statusCode } = intercept.response;
      expect(statusCode).to.equal(200);
    });

    // Return to search page
    cy.get(HomeSelectors.ReturnToMainFromUpdate).click();
    cy.url().should('contain', '').then(() => {
      // Click on last button
      cy.get(HomeSelectors.LastPageButton).click();

      // // Click on open button of book we want to edit
      // // cy.get('[data-id=open-book-from-search-table_166]').click();
      cy.get(HomeSelectors.OpenBookDetails(bookId)).click();
      // // cy.get(':nth-child(3) > :nth-child(5) > .table-button').click();

      // // Check name has changed
      cy.get(HomeSelectors.BookTitle).should('be.visible').should('have.value', 'New book title');

      // // Return book name to original
      cy.get(HomeSelectors.BookTitle).clear();
      cy.get(HomeSelectors.BookTitle).type('Original book title');
      cy.get(HomeSelectors.UpdateButton).click();
    });
  });
});

// original id was specific and couldnt be found again --> can make selector take that into account, pass in specfied book id instead
