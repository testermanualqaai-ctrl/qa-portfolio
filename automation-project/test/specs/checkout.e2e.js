import { userData } from "../../constants/testData.js";
import sauceLoginPage from "../pageobjects/sauce.login.page";
import inventoryPage from "../pageobjects/inventory.page";
import cartPage from "../pageobjects/cart.page";
import checkoutPage from "../pageobjects/checkuot.page";

describe("Checkout Flow", () => {
  it("should complete checkout successfully", async () => {
    await sauceLoginPage.open();
    await sauceLoginPage.login("standard_user", "secret_sauce");
    await inventoryPage.addBackpackToCart();
    await inventoryPage.openCart();
    await cartPage.goToCheckout();
    await checkoutPage.fillCheckoutForm(
      userData.firstName,
      userData.lastName,
      userData.postalCode,
    );

    await checkoutPage.continueCheckout();
    await checkoutPage.finishCheckout();
    await expect(checkoutPage.BackHomeButton).toBeDisplayed();
  });
});
