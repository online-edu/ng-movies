import { browser, element, by } from 'protractor';

export class MovieAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('movie-root h1')).getText();
  }
}
