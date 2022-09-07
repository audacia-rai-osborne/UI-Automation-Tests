/**
 * Mappings for environment variables
 */

export default class Env {
  // homepage URL
  static readonly homeURL = Cypress.env('LOGIN_URL');

  static readonly BaseUrlApi = Cypress.env('BASE_URL_API');
}
