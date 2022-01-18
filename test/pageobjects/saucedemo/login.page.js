const LoginPage = {
    inputUsername: () => browser.$('input[data-test="username"]'),
    inputPassword: () => browser.$('input[data-test="password"]'),
    buttonLogin: () => browser.$('input[data-test="login-button"]'),

    login: async (username, password) => {
        await browser.url('/')
        await LoginPage.inputUsername().waitForDisplayed();
        await LoginPage.inputUsername().setValue(username);
        await LoginPage.inputPassword().setValue(password);
        await LoginPage.buttonLogin().click();
    }
}

module.exports = LoginPage;
