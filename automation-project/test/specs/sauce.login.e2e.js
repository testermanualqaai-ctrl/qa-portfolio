import sauceLoginPage from "../pageobjects/sauce.login.page.js";

describe("Sauce Demo Login", () => {
  it("should login with valid credentials", async () => {
    await sauceLoginPage.open();

    await sauceLoginPage.login("standard_user", "secret_sauce");

    await expect(browser).toHaveUrl(expect.stringContaining("inventory"));
  });
});
