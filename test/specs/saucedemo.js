const LoginPage = require('../pageobjects/saucedemo/login.page');
const InventoryPage = require('../pageobjects/saucedemo/inventory.page');
const InventoryItemPage = require('../pageobjects/saucedemo/inventoryItem.page');
const CartPage = require('../pageobjects/saucedemo/cart.page');
const CheckoutPage = require('../pageobjects/saucedemo/checkout.page');

const SCREENSHOT_LOCATION = './screenshots/checkout.png';
const ITEM_NAME = 'Sauce Labs Backpack';
const EXPECTED_PAYMENT_INFORMATION_VALUE = 'SauceCard #31337';
const EXPECTED_CHECKOUT_COMPLETE_MESSAGE = 'THANK YOU FOR YOUR ORDERS';
const INVENTORY_HEADER_TEXT = 'PRODUCTS';

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
        await CheckoutPage.fillCheckoutForm({
            firstName: "John",
            lastName: "Doe",
            zipCode: "90210"
        });
        await CheckoutPage.clickContinue();
        await expect(CheckoutPage.labelPaymentValue).toHaveText(EXPECTED_PAYMENT_INFORMATION_VALUE);
        await CheckoutPage.clickFinish();
        await expect(CheckoutPage.labelCompleteCheckout).toHaveText(EXPECTED_CHECKOUT_COMPLETE_MESSAGE);
        await CheckoutPage.clickBackHome();
        await expect(InventoryPage.headerText).toHaveText(INVENTORY_HEADER_TEXT);
    });

    afterEach(async () => browser.saveScreenshot(SCREENSHOT_LOCATION));
});
