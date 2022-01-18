const BasePage = require('../base.page');

const InventoryItemPage = {
    itemName: () => browser.$('div.inventory_details_name'),
    buttonAddToCart: () => browser.$('button[data-test^="add-to-cart-"]'),
    buttonGoToCart: () => browser.$('a.shopping_cart_link'),

    getInventoryItemName: async () => {
        return BasePage.waitAndGetText(InventoryItemPage.itemName());
    },

    clickAddToCart: async () => {
        await BasePage.waitAndClick(InventoryItemPage.buttonAddToCart());
    },

    clickGoToCart: async () => {
        await BasePage.waitAndClick(InventoryItemPage.buttonGoToCart());
    }
}

module.exports = InventoryItemPage;
