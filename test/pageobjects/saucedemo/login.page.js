const Page = require('../page');

class LoginPage extends Page {

    get inputUsername () { return browser.$('input[data-test="username"]') }
    get inputPassword () { return browser.$('input[data-test="password"]') }
    get buttonLogin () { return browser.$('input[data-test="login-button"]') }

    async login(username, password) {
        await super.open('/')
        await this.inputUsername.waitForDisplayed();
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.buttonLogin.click();
    }
}

module.exports = new LoginPage();
