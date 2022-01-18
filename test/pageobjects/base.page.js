const BasePage = {
    waitAndClick: async (element) => {
        await element.waitForClickable();
        await element.click();
    },

    waitAndGetText: async (element) => {
        await element.waitForDisplayed();
        return element.getText();
    }
}

module.exports = BasePage;
