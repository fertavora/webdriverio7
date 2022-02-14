const CheckoutPage = {
  inputFirstName: () => browser.$('#first-name'),
  inputLastName: () => browser.$('#last-name'),
  inputZipCode: () => browser.$('#postal-code'),
  btnContinue: () => browser.$('#continue'),
  btnFinish: () => browser.$('#finish'),
  btnBackHome: () => browser.$('#back-to-products'),
  labelPaymentValue: () => browser.$('div.summary_value_label:nth-child(2)'),
  labelCompleteCheckout: () => browser.$('h2.complete-header'),

  fillCheckoutForm: async (buyerInfo) => {
    await CheckoutPage.inputFirstName().waitForDisplayed();
    await CheckoutPage.inputFirstName().setValue(buyerInfo.firstName);
    await CheckoutPage.inputLastName().setValue(buyerInfo.lastName);
    await CheckoutPage.inputZipCode().setValue(buyerInfo.zipCode);
  },

  clickContinue: async () => {
    await CheckoutPage.btnContinue().click();
  },

  clickFinish: async () => {
    await CheckoutPage.btnFinish().click();
  },

  clickBackHome: async () => {
    await CheckoutPage.btnBackHome().click();
  }
}

module.exports = CheckoutPage;
