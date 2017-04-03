import { PrivyChatPage } from './app.po';

describe('privy-chat App', () => {
  let page: PrivyChatPage;

  beforeEach(() => {
    page = new PrivyChatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
