import sauceLoginPage from "../pageobjects/sauce.login.page.js";
import inventoryPage from "../pageobjects/inventory.page.js";
import cartPage from "../pageobjects/cart.page.js";

describe("Remove from Cart", () => {
  it("should remove backpack from cart", async () => {
    await sauceLoginPage.open();

    await sauceLoginPage.login("standard_user", "secret_sauce");
    await inventoryPage.addBackpackToCart();
    await inventoryPage.openCart();
    await cartPage.removeBackpackFromCart();
    await expect(cartPage.backpackName).not.toExist();
    await expect(inventoryPage.cartBadge).not.toBeDisplayed();
  });
});
