import Page from "./page";

class CartPage extends Page {
  get backpackName() {
    return $(`[data-test="inventory-item-name"]`);
  }
  get removeBackpackButton() {
    return $("button[id='remove-sauce-labs-backpack']");
  }
  async removeBackpackFromCart() {
    await this.removeBackpackButton.click();
  }
  get checkoutButton() {
    return $("#checkout");
  }
  get checkoutButton() {
    return $("#checkout");
  }
  async goToCheckout() {
    await this.checkoutButton.click();
  }
}
export default new CartPage();
