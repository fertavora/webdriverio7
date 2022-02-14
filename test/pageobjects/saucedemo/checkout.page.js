class Checkout {
  get inputFirstName () { return browser.$('#first-name') }
  get inputLastName () { return browser.$('#last-name') }
  get inputZipCode () { return browser.$('#postal-code') }
  get btnContinue () { return browser.$('#continue') }
  get btnFinish () { return browser.$('#finish') }
  get btnBackHome () { return browser.$('#back-to-products') }
  get labelPaymentValue () { return browser.$('div.summary_value_label:nth-child(2)') }
  get labelCompleteCheckout () { return browser.$('h2.complete-header') }

  async fillCheckoutForm(buyerInfo) {
    await this.inputFirstName.waitForDisplayed();
    await this.inputFirstName.setValue(buyerInfo.firstName);
    await this.inputLastName.setValue(buyerInfo.lastName);
    await this.inputZipCode.setValue(buyerInfo.zipCode);
  }

  async clickContinue() {
    await this.btnContinue.click();
  }

  async clickFinish() {
    await this.btnFinish.click();
  }

  async clickBackHome() {
    await this.btnBackHome.click();
  }

}

module.exports = new Checkout();