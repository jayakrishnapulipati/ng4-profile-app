import { ProfileAppPage } from './app.po';

describe('profile-app App', () => {
  let page: ProfileAppPage;

  beforeEach(() => {
    page = new ProfileAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
