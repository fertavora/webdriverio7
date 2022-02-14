const { loginPage, inventoryPage, inventoryItemPage, cartPage, checkoutPage } = require("../pageobjects/saucedemo");

const SCREENSHOT_LOCATION = './screenshots/checkout.png';
const ITEM_NAME = 'Sauce Labs Backpack';
const EXPECTED_PAYMENT_INFORMATION_VALUE = 'SauceCard #31337';
const EXPECTED_CHECKOUT_COMPLETE_MESSAGE = 'THANK YOU FOR YOUR ORDER';
const INVENTORY_HEADER_TEXT = 'PRODUCTS';

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
        await checkoutPage.fillCheckoutForm({
            firstName: "John",
            lastName: "Doe",
            zipCode: "90210"
        });
        await checkoutPage.clickContinue();
        await expect(checkoutPage.labelPaymentValue()).toHaveText(EXPECTED_PAYMENT_INFORMATION_VALUE);
        await checkoutPage.clickFinish();
        await expect(checkoutPage.labelCompleteCheckout()).toHaveText(EXPECTED_CHECKOUT_COMPLETE_MESSAGE);
        await checkoutPage.clickBackHome();
        await expect(inventoryPage.headerText()).toHaveText(INVENTORY_HEADER_TEXT);
    });

    afterEach(async () => browser.saveScreenshot(SCREENSHOT_LOCATION));
});
