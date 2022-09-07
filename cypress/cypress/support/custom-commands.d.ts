declare namespace Cypress {
  interface Chainable{
    addBookBefore(bookTitle: string, bookDescription: string,
      bookAuthor: string, bookPublishedYear: number,
      bookAvailableFrom : string, bookHasEBook: boolean,
      bookCategoryIdValue: number): Chainable<Element>
  }
  interface Chainable{
    addBookBeforeTitle(bookTitle: string, bookDescription: string,
      bookAuthor: string, bookPublishedYear: number,
      bookAvailableFrom : string, bookHasEBook: boolean,
      bookCategoryIdValue: number): Chainable<Element>
  }
  interface Chainable{
    deleteBookAfter(): Chainable<Element>
  }
  interface Chainable{
    deleteBook(): Chainable<Element>
  }
  interface Chainable{
    openFirstBook(): Chainable<Element>
  }
  interface Chainable{
    openSpecifiedBook(bookId :string): Chainable<Element>
  }
  interface Chainable{
    deleteSpecifiedBook(bookId :string): Chainable<Element>
  }
  interface Chainable {
    deleteBookAfter(bookId: string): Chainable<Element>
  }
  interface Chainable{
    addBook(): Chainable<Element>
  }
}
