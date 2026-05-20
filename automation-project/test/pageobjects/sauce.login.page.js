import Page from "./page.js";
class SauceLoginPage extends Page {
  get inputUsername() {
    return $("#user-name");
  }

  get inputPassword() {
    return $("#password");
  }
  get btnSubmit() {
    return $('input[value="Login"]');
  }
  get errorMessage() {
    return $('[data-test="error"]');
  }
  async open() {
    await browser.url("https://saucedemo.com");
  }
  async login(username, password) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.waitForClickable({ timeout: 5000 });
    await this.btnSubmit.click();
  }
}
export default new SauceLoginPage();
