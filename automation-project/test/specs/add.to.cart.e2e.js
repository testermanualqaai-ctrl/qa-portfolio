import sauceLoginPage from "../pageobjects/sauce.login.page";

import inventoryPage from "../pageobjects/inventory.page";

import cartPage from "../pageobjects/cart.page.js";

describe("Add to Cart", () => {
  it("should add backpack to cart", async () => {
    await sauceLoginPage.open();

    await sauceLoginPage.login("standard_user", "secret_sauce");

    await inventoryPage.addBackpackToCart();
    await inventoryPage.openCart();
    await expect(cartPage.backpackName).toHaveText("Sauce Labs Backpack");

    await expect(inventoryPage.cartBadge).toHaveText("1");
  });
});
