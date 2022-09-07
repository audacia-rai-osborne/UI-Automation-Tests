declare namespace Cypress {
  interface Chainable{
    addBookBefore(bookTitle: string, bookDescription: string,
      bookAuthor: string, bookPublishedYear: number,
      bookAvailableFrom : string, bookHasEBook: boolean,
      bookCategoryIdValue: number): Chainable<Element>

    addBookBeforeTitle(bookTitle: string, bookDescription: string,
      bookAuthor: string, bookPublishedYear: number,
      bookAvailableFrom : string, bookHasEBook: boolean,
      bookCategoryIdValue: number): Chainable<Element>
 
    deleteBookAfter(): Chainable<Element>
  
    deleteBook(): Chainable<Element>
  
    openFirstBook(): Chainable<Element>

    openSpecifiedBook(bookId :string): Chainable<Element>

    deleteSpecifiedBook(bookId :string): Chainable<Element>
 
    deleteBookAfter(bookId: string): Chainable<Element>
  
    addBook(): Chainable<Element>

    searchBook(title: string): Chainable<Element>
  }
}
