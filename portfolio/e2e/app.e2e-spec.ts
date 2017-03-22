import { PhiMergePage } from './app.po';

describe('phi-merge App', function() {
  let page: PhiMergePage;

  beforeEach(() => {
    page = new PhiMergePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
