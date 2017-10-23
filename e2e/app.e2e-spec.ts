import { CartItemPage } from './app.po';

describe('cart-item App', () => {
  let page: CartItemPage;

  beforeEach(() => {
    page = new CartItemPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
