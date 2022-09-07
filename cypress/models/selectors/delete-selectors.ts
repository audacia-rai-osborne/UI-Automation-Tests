export default class DeleteSelectors {
  static readonly LastPageButton = ':nth-child(3) > .paging-btn';

  static readonly DeleteMostRecentBook = ':nth-child(2) > :nth-child(6) > .table-button';

  static DeleteBookDetails(bookId: string): string {
    return `[data-id = "delete-book-from-search-table_${bookId}"]`;
  }
}
