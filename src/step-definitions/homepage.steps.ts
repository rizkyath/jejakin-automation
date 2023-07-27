import { Given, When, Then } from "@wdio/cucumber-framework";
import homePage from "../objects/home.page";
import action from '../utils/action';
import footprintPage from "../objects/footprint.page";

Given("User accesses the homepage", async() => {
  await homePage.open("");
});

When("User tap on FaQ button", async() => {
  await action.tapOn(await homePage.buttonFaQ);
});

Then("User can see FaQ page", async() => {
  await action.expectToExist(await homePage.titleFaQ);
});

When("User tap on start button", async() => {
  await action.tapOn(await homePage.buttonStart);
});

Then("User redirected to carbon footprint calculation page", async() => {
  await action.expectToExist(await footprintPage.titlePage);
});
