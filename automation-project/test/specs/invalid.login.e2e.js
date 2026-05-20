import page from "../pageobjects/sauce.login.page.js";

describe("Invalid Login", () => {
  it("should not login with invalid credentials", async () => {
    await page.open();

    await page.login("standard_user", "wrong_password");
    await expect(page.errorMessage).toBeDisplayed();
  });
});
