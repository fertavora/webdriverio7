const Page = require('../page');

class InventoryItemPage extends Page {

    get itemName () { return browser.$('div.inventory_details_name') }
    get buttonAddToCart () { return browser.$('button[data-test^="add-to-cart-"]') }
    get buttonGoToCart () { return browser.$('a.shopping_cart_link') }

    async getInventoryItemName () {
        return super.waitAndGetText(this.itemName);
    }

    async clickAddToCart () {
        await super.waitAndClick(this.buttonAddToCart);
    }

    async clickGoToCart () {
        await super.waitAndClick(this.buttonGoToCart);
    }
}

module.exports = new InventoryItemPage();
