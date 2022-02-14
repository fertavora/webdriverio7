const Page = require('../page');

class CartPage extends Page {

    get inventoryItemName () { return browser.$('div.inventory_item_name') }
    get inventoryItemQuantity () { return browser.$('div.cart_quantity') }
    get buttonCheckout () { return browser.$('button[data-test="checkout"]') }

    async clickCheckout() {
        await super.waitAndClick(this.buttonCheckout);
    }
}

module.exports = new CartPage();
