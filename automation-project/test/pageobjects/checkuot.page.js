import Page from "./page.js";

class CheckoutPage extends Page {
  get firstNameInput() {
    return $("#first-name");
  }
  get lastNameInput() {
    return $("#last-name");
  }
  get postalCodeInput() {
    return $("#postal-code");
  }
  get continueButton() {
    return $("#continue");
  }
  get finishButton() {
    return $("#finish");
  }
  get BackHomeButton() {
    return $("#back-to-products");
  }
  async backHome() {
    await this.BackHomeButton.click();
  }
  async fillCheckoutForm(firstName, lastName, postalCode) {
    await this.firstNameInput.setValue(firstName);
    await this.lastNameInput.setValue(lastName);
    await this.postalCodeInput.setValue(postalCode);
  }
  async continueCheckout() {
    await this.continueButton.click();
  }
  async finishCheckout() {
    await this.finishButton.click();
  }
}
export default new CheckoutPage();
