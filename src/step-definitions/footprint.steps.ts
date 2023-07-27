import { Given, When, Then } from "@wdio/cucumber-framework";
import homePage from "../objects/home.page";
import action from '../utils/action';
import footprintPage from "../objects/footprint.page";
import contributionPage from "../objects/contribution.page";

Given("User accesses the carbon footprint calculation page", async() => {
  await homePage.open("carbon");
  await action.expectToExist(await footprintPage.titlePage);
});

When("User tap on choose flight route", async() => {
  await action.tapOn(await footprintPage.buttonEditFlight);
  await action.expectToExist(await footprintPage.searchBarAirport);
  await action.expectToExist(await footprintPage.soetta);
});

When("User choose Bandar Soetta for departure", async() => {
  await action.tapOn(await footprintPage.soetta);
  await action.expectToExist(await footprintPage.popupTitleArrival);
  await action.expectToNotExist(await footprintPage.soetta);
});

When("User choose Bandar Ngurah Rai for arrival", async() => {
  await action.tapOn(await footprintPage.ngurahRai);
}); 

When("User search {string} airport for departure", async(airport: string) => {
  await action.setValue(await footprintPage.searchBarAirport, airport);
  await action.tapOn(await footprintPage.buttonSearch);
});

When("User change passenger number to {string}", async(passengerNumber: string) => {
  await action.tapOn(await footprintPage.buttonEditPassenger);
  await action.setValue(await footprintPage.passengerNumber, passengerNumber);
  await action.tapOn(await footprintPage.buttonSavePassenger);
});

When("User change cabin class to {string}", async(cabinClass: string) => {
  await action.tapOn(await footprintPage.buttonEditPassenger);
  switch (cabinClass) {
    case "economy":
      await action.tapOn(await footprintPage.classEconomy);
      break;
    case "business":
      await action.tapOn(await footprintPage.classBusiness);
      break;
    case "first":
      await action.tapOn(await footprintPage.firstClass);
      break;
    default:
      throw new Error("no such case");
  }
});

When("User switch pagination calculation view", async() => {
  await action.tapOn(await footprintPage.switchPaginationCalculation);
});

When("User change travel purpose", async() => {
  await action.tapOn(await footprintPage.buttonEditTravelPurpose);
  await action.tapOn(await footprintPage.purposeBusinessTrip);
});

When("User tap on take action", async() => {
  await action.tapOn(await footprintPage.buttonTakeAction);
});

Then("User can see first airport item is {string}", async(airport: string) => {
  await driver.pause(3000);
  await action.expectToHaveText(await footprintPage.firstItemAirport, airport);
});

Then("User can see carbon footprint calculation", async() => {
  await action.expectToExist(await footprintPage.titleFootprintCalculation);
});

Then("User can see carbon footprint statistics", async() => {
  await action.expectToExist(await footprintPage.footprintFlight);
  await action.expectToExist(await footprintPage.footprintHotel);
  await action.expectToExist(await footprintPage.footprintTransportation);
});

Then("User can see contribution page", async() => {
  await action.expectToExist(await contributionPage.onContributionPage);
});
