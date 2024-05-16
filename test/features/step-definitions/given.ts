import { Given } from "@wdio/cucumber-framework";
import * as chai from "chai";

Given(/^Login to inventory web application$/, async function () {
  /**1. Launching the inventory app */
  await browser.url("https://www.saucedemo.com/v1/index.html");
  await browser.maximizeWindow();
  //   // await browser.setTimeout({implicit:15000, pageLoad:10000})     //Added in conf file

  //   /**2. Login the inventory app */
  //   await $(`#user-name`).setValue("standard_user");
  //   await $(`#password`).setValue("secret_sauce");
  //   await $(`#login-button`).click();

  //   let assert_val = await $(`//div[@class="product_label"]`);
  //   let assert_ele = await assert_val.getText();
  //   chai.expect(assert_ele).to.equal("Products");

  //For Reload
  /**2. Login the inventory app */
  //   await $(`#user-name`).setValue("standard_user");
  //   await $(`#password`).setValue("secret_sauce");
  //   await $(`#login-button`).click();

  //   /**Login to another
  //    * Using reload method
  //    */
  //   await browser.pause(2000);
  //   await browser.reloadSession();
  //   await browser.url("https://www.saucedemo.com/v1/index.html");
  //   await browser.maximizeWindow();
  //   await $(`#user-name`).setValue("problem_user");
  //   await $(`#password`).setValue("secret_sauce");
  //   await $(`#login-button`).click();

  //For refresh
  /**2. Login the inventory app */
  try {
    await $(`#user-nam`).setValue("standard_user");
    await $(`#password`).setValue("secret_sauce");
    await $(`#login-button`).click();
  } catch (err) {
    console.log(`Error in first login. Retrying...`);
    await browser.refresh();
    await browser.pause(2000);
    await $(`#user-name`).setValue("standard_user");
    await $(`#password`).setValue("secret_sauce");
    await $(`#login-button`).click();
  }
  await browser.back()
  await browser.pause(2000)
  await browser.forward()
  await browser.debug();
});
