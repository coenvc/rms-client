import { RmtsClientPage } from './app.po';

describe('rmts-client App', function() {
  let page: RmtsClientPage;

  beforeEach(() => {
    page = new RmtsClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
