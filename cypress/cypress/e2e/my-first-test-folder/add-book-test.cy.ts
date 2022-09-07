import Env from '../../../models/env';
import ApiRoutesBooks from '../../../models/routes';
import AddSelectors from '../../../models/selectors/add-selectors';
import DeleteSelectors from '../../../models/selectors/delete-selectors';

const bookId = null;
describe('As a user I can add a book', () => {
  it('Allows a user to add a book', () => {
  // visit homepage of book website
    cy.visit(Env.homeURL);

    // click add a new book button
    cy.get(AddSelectors.AddBookButton).click();

    // add a book title
    cy.get(AddSelectors.BookTitle).type('Brand new book');

    // add a description
    cy.get(AddSelectors.BookDescription).type('Brand new book described');

    // add an author name
    cy.get(AddSelectors.BookAuthor).type('New author name');

    // add a published year
    cy.get(AddSelectors.YearBookPublished).type('2000');

    // add a date
    cy.get(AddSelectors.AvailableFrom).click().type('2019-03-27');

    // has e book
    cy.get(AddSelectors.EBook).click();

    // choose category
    cy.get(AddSelectors.FieldSelect).type('Fiction');
    cy.get(AddSelectors.SearchedCategory).click();

    // Make sure the request to add the book is intercepted
    cy.intercept(ApiRoutesBooks.AddBook).as('addBook');

    // add the new book
    cy.get(AddSelectors.AddBookButton).click();

    // Check that the request to add the book returns a 200 status code
    cy.wait('@addBook').then((intercept) => {
      const { statusCode } = intercept.response;
      expect(statusCode).to.equal(201);
    });

    cy.url().should('contain', '.net/book/').then(() => {
      cy.get('[data-id="to-search-page-from-update-book-button"]').click();

      // check by visiting final page
      // cy.visit('https://audacia-training-automationtesting-ui.azurewebsites.net/');
      cy.get(AddSelectors.LastPageButton).click();
      cy.get(AddSelectors.MostRecentBook).should('be.visible').contains('Brand new book');

      // delete book to return to original form
      cy.deleteBook();
    });
  });
});

// would have delete book on the end of this so no table data is being changed rather than delete-book bein its own individual test
