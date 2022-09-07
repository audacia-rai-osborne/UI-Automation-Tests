export default class SearchSelectors {
  static readonly AuthorNameSearchBox = ':nth-child(2) > #search-arg-book-title';

  static readonly SearchButton = '.search';

  static readonly LastPageButton = '[data-id=":nth-child(3) > .paging-btn"]';

  static readonly ClearSearch = '.clear';

  static readonly SearchedBook = 'tr > :nth-child(2)';

  static readonly TitleSearchBox = ':nth-child(1) > #search-arg-book-title';
}
