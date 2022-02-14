const Page = require('../page');

class InventoryPage extends Page {

    get headerText() { return browser.$('div.header_secondary_container > span') }

    async clickProductLinkByText (linkText) {
        await super.waitAndClick(browser.$(`=${linkText}`));
    }
}

module.exports = new InventoryPage();