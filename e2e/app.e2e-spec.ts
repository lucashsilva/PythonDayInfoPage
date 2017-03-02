import { PythonDayInfoPagePage } from './app.po';

describe('python-day-info-page App', () => {
  let page: PythonDayInfoPagePage;

  beforeEach(() => {
    page = new PythonDayInfoPagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
