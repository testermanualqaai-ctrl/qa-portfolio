import sauceLoginPage from "../pageobjects/sauce.login.page";
import inventoryPage from "../pageobjects/inventory.page";

describe("Sort Products", () => {
  it("should sort products from Z to A", async () => {
    await sauceLoginPage.open();
    await sauceLoginPage.login("standard_user", "secret_sauce");
    await inventoryPage.sortByNameZtoA();
    const productNames = await inventoryPage.inventoryItems;
    await expect(productNames[0]).toHaveText(
      "Test.allTheThings() T-Shirt (Red)",
    );
    await expect(productNames[5]).toHaveText("Sauce Labs Backpack"
    );
  });
});
