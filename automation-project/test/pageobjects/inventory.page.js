import Page from "./page";

class InventoryPage extends Page {
  get title() {
    return $(".title");
  }
  get addBackpackButton() {
    return $("#add-to-cart-sauce-labs-backpack");
  }
  get cartBadge() {
    return $(".shopping_cart_badge");
  }
  get cartLink() {
    return $(".shopping_cart_link");
  }
  get burgerMenuButton() {
    return $("#react-burger-menu-btn");
  }
  get logoutLink() {
    return $("#logout_sidebar_link");
  }
  get sortDropdown() {
    return $(".product_sort_container");
  }
  get inventoryItems() {
    return $$(".inventory_item_name");
  }
  async sortByNameZtoA() {
    await this.sortDropdown.selectByVisibleText("Name (Z to A)");
  }
  async addBackpackToCart() {
    await this.addBackpackButton.click();
  }
  async openCart() {
    await this.cartLink.click();
  }
  async logout() {
    await this.burgerMenuButton.click();
    await this.logoutLink.click();
  }
}
export default new InventoryPage();
