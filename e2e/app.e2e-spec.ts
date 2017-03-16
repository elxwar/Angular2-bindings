import { TestAppLessPage } from './app.po';

describe('test-app-less App', () => {
  let page: TestAppLessPage;

  beforeEach(() => {
    page = new TestAppLessPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
