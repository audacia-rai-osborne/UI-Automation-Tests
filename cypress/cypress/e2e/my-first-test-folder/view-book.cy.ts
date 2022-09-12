import ApiRoutesBooks from '../../../models/routes';
import ViewSelectors from '../../../models/selectors/view-selectors';

let bookId = null;

describe('As a user I can view a book', () => {
  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl);
    cy.addBookBefore('Name', 'Description', 'Author', 2020, '2022-08-18T10:19:23.968Z', true, 1).then((response) => { bookId = response });
  });
  afterEach(() => {
    cy.deleteSpecifiedBook(bookId);
  });

  it('Allows a user to view a book', () => {
    it('Allows a user to search for a books name', () => {
      // Make sure the request to search for the book is intercepted
 cy.intercept(ApiRoutesBooks.GetBook+bookId).as('getBook');
  
      // open specfied book
      cy.openSpecifiedBook(bookId);
      // Check that the request to search for the book returns a 200 status code
cy.wait('@getBook').then((intercept) => {
 const { statusCode } = intercept.response;
 expect(statusCode).to.equal(200)

    // Return to main screen
    cy.get(ViewSelectors.ReturnToMainFromUpdate).click();
})
  });
})
});