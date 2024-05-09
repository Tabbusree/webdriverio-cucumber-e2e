import { Given, When, Then } from "@wdio/cucumber-framework";
import * as chai from "chai";

Given(/^Google page is opened$/, async function () {
  console.log(`Before opening browser`);
  await browser.url("https://www.google.com");
  browser.pause(1000);
  console.log(`After opening browser`);
});

When(/^Search with (.*)$/, async function (searchItem) {
  console.log(`>>searchItem: ${searchItem}`);
  let element = await $(`[name=q]`);
  await element.setValue(searchItem);
  await browser.keys("Enter");
});

Then(/^Click on first search result$/, async function () {
  let element = await $(`<h3>`);
  await element.click();
});

Then(/^Url should match (.*)$/, async function (expectedUrl) {
  console.log(`>> ExpectedUrl: ${expectedUrl}`);
  let actualUrl = await browser.getUrl();
  chai.expect(actualUrl).to.equal(expectedUrl);
});
