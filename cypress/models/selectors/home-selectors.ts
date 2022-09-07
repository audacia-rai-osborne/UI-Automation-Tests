export default class HomeSelectors {
  static readonly LastPageButton = ':nth-child(3) > .paging-btn';

  static readonly BookTitle = '#book-title';

  static readonly UpdateButton = '.update-button';

  static readonly ReturnToMainFromUpdate = '[data-id = "to-search-page-from-update-book-button"]';

  static OpenBookDetails(bookId: string): string {
    return `[data-id = "open-book-from-search-table_${bookId}"]`;
  }
}
