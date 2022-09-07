import Env from '../../../models/env';
import ApiRoutesBooks from '../../../models/routes';
import SearchSelectors from '../../../models/selectors/search-selectors';

let title = null;

describe('As a user I can search for a book using the title', () => {
  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl);
    cy.addBookBeforeTitle('Name', 'Description', 'Author', 2020, '2022-08-18T10:19:23.968Z', true, 1).then((response) => { title = response; });
  });
  // afterEach(() => {
  //   cy.deleteSpecifiedBook(title);
  // });

  it('Allows a user to search for a books name', () => {
    // Make sure the request to search for the book is intercepted
    cy.intercept(ApiRoutesBooks.SearchBook).as('searchBook');

    // search for book using title
   cy.searchBook(title);

    // Check that the request to search for the book returns a 200 status code
    cy.wait('@searchBook').then((intercept) => {
      const { statusCode } = intercept.response;
      expect(statusCode).to.equal(200);
    });
  });
});

