import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitle()).toEqual('Hello Angular!');
  });
   it('should contain a list', () => {
    page.navigateTo();
    expect(page.getList()).toBeTruthy();
  });
});
