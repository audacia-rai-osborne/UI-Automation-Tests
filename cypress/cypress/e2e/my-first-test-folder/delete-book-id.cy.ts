import Env from '../../../models/env';
import ApiRoutesBooks from '../../../models/routes';
import DeleteSelectors from '../../../models/selectors/delete-selectors';

let bookId = null;
describe('As a user I can delete a book', () => {
  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl);
    cy.addBookBefore('Name', 'Description', 'Author', 2020, '2022-08-18T10:19:23.968Z', true, 1).then((response) => { bookId = response; });
  });
  // afterEach(() => {
  //   cy.deleteSpecifiedBook(bookId);
  // });

  it('Allows a user to delete a book', () => {
  // delete book
    // cy.deleteSpecifiedBook(bookId);
    // visit homepage of book website
    cy.visit(Env.homeURL);

    // Click on last button
    cy.get(DeleteSelectors.LastPageButton).click();

    // delete specified book
    cy.get(DeleteSelectors.DeleteBookDetails(bookId)).click();

    // Make sure the request to delete the book is intercepted
    // cy.intercept('DELETE', 'https://audacia-training-automationtesting-api.azurewebsites.net/book/').as('deleteBook');
    const toIntercept = 'https://audacia-training-automationtesting-api.azurewebsites.net/book/${bookId}';
    cy.intercept(ApiRoutesBooks.DeleteBook)
    cy.intercept(toIntercept).as('deleteBook');

    // click on pop up to confirm delete
    cy.get('.action-button').contains('Confirm').click();

    // // Check that the request to edit the book returns a 200 status code
    cy.wait('@deleteBook').then((intercept) => {
      const { statusCode } = intercept.response;
      expect(statusCode).to.equal(200);
    });

    // Restore to original
    // have to add a new book
  });
});

// just lump this in with add book in practice really
