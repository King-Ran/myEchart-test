import { EchartOnePage } from './app.po';

describe('echart-one App', () => {
  let page: EchartOnePage;

  beforeEach(() => {
    page = new EchartOnePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
