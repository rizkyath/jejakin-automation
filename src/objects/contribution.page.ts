import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ContributionPage extends Page {
  get onContributionPage() { return $("//h3[text()='Where would you like to contribute in?']"); }
  get optionPlantingProgram() { return $("//li[text()='Planting Program']"); }
  get optionAdoptionProgram() { return $("//li[text()='Adoption Program']"); }
  get optionSustainableProgram() { return $("//li[text()='Sustainable Program']"); }
  get inputFullName() { return $("//input[@id='input-fullname']"); }
  get inputEmail() { return $("//input[@id='input-email']"); }
  get checkBoxTermsCondition() { return $("//span[@for='checkbox-agree' and text()='I agree with the']"); }
  get buttonPaymentMethod() { return $("//div[@id='card-select-payment']"); }
  get paymentMethodQRIS() { return $("//h5[text()='Pay with QRIS']"); }
  get buttonPay() { return $("//span[contains(text(), 'Pay & Offset')]/parent::button"); }
  get onQrisPayment() { return $("//h3[text()='Scan the QR Code to process your payment']"); }

  get plantingTambakrejo() { return $("//h1[text()='Mangrove Edupark Area Tambakrejo']"); }
  get adoptionMahoni() { return $("//h1[contains(text(), 'Mahoni')]"); }
}

export default new ContributionPage();
