import {Given} from '@wdio/cucumber-framework'
import * as chai from "chai";

Given(/^Login to inventory web application$/, async function(){
    /**1. Launching the inventory app */
    await browser.url("https://www.saucedemo.com/v1/index.html")
    await browser.maximizeWindow()
    await browser.setTimeout({implicit:15000, pageLoad:10000})

    /**2. Login the inventory app */
    await $(`#user-name`).setValue("standard_user")
    await $(`#password`).setValue("secret_sauce")
    await $(`#login-button`).click()

    let assert_val = await $(`//div[@class="product_label"]`)
    let assert_ele = await assert_val.getText()
    chai.expect(assert_ele).to.equal("Products")

    // await browser.debug()


})
