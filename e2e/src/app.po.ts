import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitle() {
    return element(by.css('h1')).getText();
  }
  getList() {
    return element(by.css('li'));
  }
}
