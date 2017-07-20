import { SuperHeroProjectInAngular4Page } from './app.po';

describe('super-hero-project-in-angular4 App', () => {
  let page: SuperHeroProjectInAngular4Page;

  beforeEach(() => {
    page = new SuperHeroProjectInAngular4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
