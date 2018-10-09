import { AnalyticaPage } from './app.po';

describe('analytica App', () => {
  let page: AnalyticaPage;

  beforeEach(() => {
    page = new AnalyticaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
