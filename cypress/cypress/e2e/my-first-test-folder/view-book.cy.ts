import ViewSelectors from '../../../models/selectors/view-selectors';

let bookId = null;
let title = null;

describe('As a user I can view a book', () => {
  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl);
    cy.addBookBefore('Name', 'Description', 'Author', 2020, '2022-08-18T10:19:23.968Z', true, 1).then((response) => { bookId = response });
  });
  afterEach(() => {
    cy.deleteSpecifiedBook(bookId);
  });

  it('Allows a user to view a book', () => {
    // open first book
    // cy.openFirstBook();

    // open specfied book
    cy.openSpecifiedBook(bookId);

    // check correct book has been opened
    // --> chekc using checking title is correct, need to also return title from created of book in beforeEach

    // Return to main screen
    cy.get(ViewSelectors.ReturnToMainFromUpdate).click();
  });
});
