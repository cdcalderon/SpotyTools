import { SpotyToolsPage } from './app.po';

describe('spoty-tools App', () => {
  let page: SpotyToolsPage;

  beforeEach(() => {
    page = new SpotyToolsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
