const BasePage = require('../base.page');

const InventoryPage = {
    clickProductLinkByText: async (linkText) => {
        BasePage.waitAndClick(browser.$(`=${linkText}`));
    }
}

module.exports = InventoryPage;
