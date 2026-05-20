import sauceLoginPage from "../pageobjects/sauce.login.page";
import inventoryPage from "../pageobjects/inventory.page";
import cartPage from "../pageobjects/cart.page";

describe("Checkout Flow without products", () => {
  it("should not allow checkout with empty cart", async () => {
    await sauceLoginPage.open();

    await sauceLoginPage.login(
      "standard_user",
      "secret_sauce",
    );

    await inventoryPage.openCart();

    await cartPage.goToCheckout();

   await expect(browser).toHaveUrl(
  expect.stringContaining("cart.html"),
    );
  });
});