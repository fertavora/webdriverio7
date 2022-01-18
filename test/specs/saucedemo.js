const { loginPage, inventoryPage, inventoryItemPage, cartPage } = require("../pageobjects/saucedemo");
const SCREENSHOT_LOCATION = './screenshots/checkout.png';
const ITEM_NAME = 'Sauce Labs Backpack';

describe('SauceDemo Tests', () => {
    it('Place an order with one product', async () => {
        await loginPage.login('standard_user', 'secret_sauce');
        await inventoryPage.clickProductLinkByText(ITEM_NAME);
        await expect(await inventoryItemPage.getInventoryItemName()).toEqual(ITEM_NAME);
        await inventoryItemPage.clickAddToCart();
        await inventoryItemPage.clickGoToCart();
        await expect(cartPage.inventoryItemQuantity()).toHaveText('1');
        await expect(cartPage.inventoryItemName()).toHaveText(ITEM_NAME);
        await cartPage.clickCheckout();
        //await expect(inventoryItemPage.itemName()).toHaveText('Sauce Labs Backpack');
        await browser.saveScreenshot(SCREENSHOT_LOCATION);
    });
});
