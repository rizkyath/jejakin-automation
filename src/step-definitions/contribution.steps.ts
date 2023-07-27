import { Given, When, Then } from "@wdio/cucumber-framework";
import contributionPage from "../objects/contribution.page";
import action from "../utils/action";

Given("User accesses contribution page", async() => {
  await contributionPage.open("order?totalCarbon=760928")
});

When("User contribute with planting program", async() => {
  await action.tapOn(await contributionPage.plantingTambakrejo);
  await action.setValue(await contributionPage.inputFullName, "User Test");
  await action.setValue(await contributionPage.inputEmail, "automation@jejakin.com");
  await action.tapOn(await contributionPage.buttonPaymentMethod);
  await action.tapOn(await contributionPage.paymentMethodQRIS);
  await action.tapOn(await contributionPage.checkBoxTermsCondition);
  await action.tapOn(await contributionPage.buttonPay);
  await driver.pause(3000);
});

When("User contribute with adoption program", async() => {
  await action.tapOn(await contributionPage.optionAdoptionProgram);
  await action.tapOn(await contributionPage.adoptionMahoni);
  await action.setValue(await contributionPage.inputFullName, "User Test");
  await action.setValue(await contributionPage.inputEmail, "automation@jejakin.com");
  await action.tapOn(await contributionPage.buttonPaymentMethod);
  await action.tapOn(await contributionPage.paymentMethodQRIS);
  await action.tapOn(await contributionPage.checkBoxTermsCondition);
  await action.tapOn(await contributionPage.buttonPay);
  await driver.pause(3000);
});

Then("User can see QRIS barcode", async() => {
  await action.tapOn(await contributionPage.onQrisPayment);
});