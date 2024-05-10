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

/*
WebInteractions
*/

Given(/^A Web page is opened$/, async function () {
  await browser.url("/inputs");
  await browser.maximizeWindow();
  await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
});

When(/^Perform web interactions$/, async function () {
  /**
   * Input box
   * Actions
   * 1. Type into input box
   * 2. Clear the field and type or just add value
   * 3. Click and type
   * 4. Slow typing
   */

  let num = 12345;
  let strNum = num.toString();
  let element = await $(`[type=number]`);
  //await element.scrollIntoView()
  //await element.setValue(strNum)  //setValue and addValue methods accept any datatype as the argument
  await element.click();
  for (let i = 0; i < strNum.length; i++) {
    let charStr = strNum.charAt(i);
    await browser.pause(1000);
    await browser.keys(charStr); //This method to type the number in the field slowly
  }
  await browser.debug();
});
