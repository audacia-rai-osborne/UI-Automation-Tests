// wont work as some book data is not included
import Env from '../../../models/env';
import ApiRoutesBooks from '../../../models/routes';
import AddSelectors from '../../../models/selectors/add-selectors';

describe('As a user I can add a new book as long as I use the form correctly', () => {
  it('Allows a user to add a new book', () => {
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
    // cy.get(AddSelectors.YearBookPublished).type('2000');

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

    // Check that the request to add the book returns a 400 status code
    cy.wait('@addBook').then((intercept) => {
      const { statusCode } = intercept.response;
      expect(statusCode).to.equal(400);
    });

    // check validation error appears
    cy.get(AddSelectors.ValidationError).contains('Published Year is required');

  });
});
