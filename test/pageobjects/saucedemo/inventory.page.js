const BasePage = require('../base.page');

const InventoryPage = {
    headerText: () => browser.$('div.header_secondary_container > span'),
    
    clickProductLinkByText: async (linkText) => {
        BasePage.waitAndClick(browser.$(`=${linkText}`));
    }
}

module.exports = InventoryPage;
