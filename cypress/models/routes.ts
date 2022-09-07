import Env from './env';

export default class ApiRoutesBooks {
  static readonly AddBook = `${Env.BaseUrlApi}book/Add`;

  static readonly EditBook = `${Env.BaseUrlApi}book/Update`;

  static readonly DeleteBook = `${Env.BaseUrlApi}book/`;

  static readonly SearchBook = `${Env.BaseUrlApi}book/search`;
}
