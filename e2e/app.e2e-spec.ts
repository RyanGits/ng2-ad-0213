import { Ng2AdPage } from './app.po';

describe('ng2-ad App', function() {
  let page: Ng2AdPage;

  beforeEach(() => {
    page = new Ng2AdPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
