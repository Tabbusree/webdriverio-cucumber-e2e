import { Then } from "@wdio/cucumber-framework";
import * as chai from "chai";

Then(/^Inventory page should list (.*)$/, async function (noOfProducts) {
  /**Getting the number of products list */
  if (!noOfProducts)
    throw Error(`Invalid product count provided: ${noOfProducts}`);
  let eleArr = await $$(`.inventory_item_name`);
  chai.expect(eleArr.length).to.equal(parseInt(noOfProducts));
  console.log(`>>Array length: ${eleArr.length}`);
});
/**
 * Steps:
 * 1. Get price list
 * 2. Convert string to number
 * 3. Assert if any value is <=0
 */
Then(/^Validate all products have valid price$/, async function () {
  /**1. Get price list */
  let eleArr = await $$(`.inventory_item_price`);
  let priceStrArr = [];
  for (let i = 0; i < eleArr.length; i++) {
    let priceStr = await eleArr[i].getText();
    priceStrArr.push(priceStr);
  }
  console.log(`>>Price with $: ${priceStrArr}`);

  /**2. Convert string to number*/
  let priceNumArr = priceStrArr.map((ele) => +ele.replace("$", ""));
  console.log(`>> Price in numbers: ${priceNumArr}`);

  /**3. Assert if any value is <=0 */
  let invalidPriceArr = priceNumArr.filter(ele => (ele <= 0));
  chai.expect(invalidPriceArr.length).to.equal(0);
  // await browser.debug()
});
