const LoginPage = require('../pageobjects/saucedemo/login.page');
const InventoryPage = require('../pageobjects/saucedemo/inventory.page');
const InventoryItemPage = require('../pageobjects/saucedemo/inventoryItem.page');
const CartPage = require('../pageobjects/saucedemo/cart.page');

const SCREENSHOT_LOCATION = './screenshots/checkout.png';
const ITEM_NAME = 'Sauce Labs Backpack';

describe('SauceDemo Tests', () => {
    it('Place an order with one product', async () => {
        await LoginPage.login('standard_user', 'secret_sauce');
        await InventoryPage.clickProductLinkByText(ITEM_NAME);
        await expect(await InventoryItemPage.getInventoryItemName()).toEqual(ITEM_NAME);
        await InventoryItemPage.clickAddToCart();
        await InventoryItemPage.clickGoToCart();
        await expect(CartPage.inventoryItemQuantity).toHaveText('1');
        await expect(CartPage.inventoryItemName).toHaveText(ITEM_NAME);
        await CartPage.clickCheckout();
        //await expect(inventoryItemPage.itemName()).toHaveText('Sauce Labs Backpack');
        await browser.saveScreenshot(SCREENSHOT_LOCATION);
    });
});
