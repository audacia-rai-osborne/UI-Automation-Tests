import Env from '../../../models/env';
import ApiRoutesBooks from '../../../models/routes';
// import ApiRoutesBooks from '../../../models/routes';

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
    // Make sure the request to delete the book is intercepted
    cy.intercept('DELETE', ApiRoutesBooks.DeleteBook + bookId).as('deleteBook');

    // delete book
    cy.deleteSpecifiedBook(bookId);

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
