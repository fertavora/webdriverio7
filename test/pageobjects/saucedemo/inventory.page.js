const Page = require('../page');

class InventoryPage extends Page {

    async clickProductLinkByText (linkText) {
        await super.waitAndClick(browser.$(`=${linkText}`));
    }
}

module.exports = new InventoryPage();