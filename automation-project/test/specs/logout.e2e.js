import sauceLoginPage from "../pageobjects/sauce.login.page";
import inventoryPage from "../pageobjects/inventory.page";

describe("Logout", () => {
  it("should logout successfully", async () => {
    await sauceLoginPage.open();
    await sauceLoginPage.login("standard_user", "secret_sauce");
    await inventoryPage.logout();
    await expect(sauceLoginPage.btnSubmit).toBeDisplayed();
  });
});
