const BasePage = require('../base.page');

const CartPage = {
    inventoryItemName: () => browser.$('div.inventory_item_name'),
    inventoryItemQuantity: () => browser.$('div.cart_quantity'),
    buttonCheckout: () => browser.$('button[data-test="checkout"]'),

    clickCheckout: async () => {
        await BasePage.waitAndClick(CartPage.buttonCheckout());
    }
}

module.exports = CartPage;
