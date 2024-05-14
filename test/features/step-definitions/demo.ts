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
  await browser.url("/frames");
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

  // let num = 12345;
  // let strNum = num.toString();
  // let element = await $(`[type=number]`);
  //await element.scrollIntoView()
  //await element.setValue(strNum)  //setValue and addValue methods accept any datatype as the argument
  //   await element.click();
  //   for (let i = 0; i < strNum.length; i++) {
  //     let charStr = strNum.charAt(i);
  //     await browser.pause(1000);
  //     await browser.keys(charStr); //This method to type the number in the field slowly
  //   }
  //   await browser.debug();

  /**
   * 2.Dropdown
   * Actions:
   * 1. Assert default option is selected
   * 2. Select by attribute, text, index
   * 3. Get a list of options
   */

  //1. Assert default option is selected
  /*let element = await $(`//select/option[@selected="selected"]`)
  let value = await element.getText()
  chai.expect(value).to.equal("Please select an option")
  await browser.debug() */

  //2. Select by attribute, text, index
  //These methods can be performed if there is no dynamic tests
  // let ele = await $(`#dropdown`);
  //It will consider the last one for the run
  // await ele.selectByAttribute("value", "1");
  // await ele.selectByIndex(0);
  // await ele.selectByVisibleText("Option 2");
  // await browser.debug();

  //3. Get a list of options
  /*let eleArr = await $$(`select > option`);  //css selector
  let arr = [];
  for (let i = 0; i < eleArr.length; i++) {
    let ele = eleArr[i];
    let val = await ele.getText();
    arr.push(val);
    console.log(val);
  }
  console.log(`>> Options Array: ${arr}`);
  await browser.debug(); */

  /**
   * 3. Checkbox
   * Actions:
   * 1. Select an option
   * 2. Unselect an option(if selected)
   * 3. Assert if option is selected
   * 4. Select all options
   */

  //1. Select an option
  // let select_element = await $(`//form[@id="checkboxes"]/input[1]`);
  // await select_element.click();
  //2. Unselect an option(if selected)
  // let unselect_element = await $(`//form[@id="checkboxes"]/input[2]`);
  // await unselect_element.click();
  // await browser.debug();

  //2. Unselect an option(if selected)
  /* let element = await $(`//form[@id="checkboxes"]/input[1]`);
  if (!(await element.isSelected())) {
    await element.click(); //isSelected() will return boolean
  }
  await browser.debug(); */

  //3. Assert if option is selected
  /*let element = await $(`//form[@id="checkboxes"]/input[2]`);
  let ischecked = await element.isSelected()
  chai.expect(ischecked).to.be.true
  await browser.debug() */

  //4. Select all options
  /*  let elementArr = await $$(`//form[@id="checkboxes"]/input`)
  for(let i=0; i< elementArr.length; i++){
    let ele = elementArr[i]
    if(!await ele.isSelected()){
      await ele.click()
    }
  }
  await browser.debug()
  */

  /**
   * 4. Window handling
   * Steps:
   * 1. launch the browser
   * 2. Open another windows
   * 3. Switch to the window based on title
   * 4. Switch back to the main window
   *
   * Methods used:
   * 1. getTitle()
   * 2. getWindowHandle()
   * 3. getWindowHandles()
   * 4. switchToWindow()
   */

  //Open new window
/*  (await $(`=Click Here`)).click(); //using link text
  (await $(`=Elemental Selenium`)).click();

  let currentWinTitle = await browser.getTitle();
  let parentWinHandle = await browser.getWindowHandle();
  console.log(`>> currentWinTitle: ${currentWinTitle}`);

  //Switch to specific window
  let windowHandles = await browser.getWindowHandles(); //will return string[]
  console.log(windowHandles.length)
  for (let i = 0; i < windowHandles.length; i++) {
  
    console.log(`>> Windowhandle: ${windowHandles[i]}`); //It will log all the windowHandle value
    await browser.switchToWindow(windowHandles[i]);
    currentWinTitle = await browser.getTitle();
    console.log(currentWinTitle);
    if (currentWinTitle === "Home | Elemental Selenium") {
      await browser.switchToWindow(windowHandles[i]);
      let titleElement = await $(`title=Home | Elemental Selenium`);
      // let title = await titleElement.getText()
      //getProperty() The method returns a Promise that resolves to the value of the specified property.

      let titleProperty = await titleElement.getProperty("innerText"); // or 'textContent'
      //If the left operand evaluates to true then the right operand will perform or return falsy
      // console.log(titleProperty)
      // let title = titleProperty && titleProperty.toString();
      console.log(`>> TitleEleSel: ${titleProperty}`);
      break;
    }
 }  
  // switch back to parent window
  await browser.switchToWindow(parentWinHandle);
  let parentWindowText = (await $(`<h3>`))
  let parentWindow =  await parentWindowText.getText();
  console.log(`>> ParentWindowText: ${parentWindow}`);

  await browser.debug();  */

  /**
   * 5. Handling alerts
   * 
   * Methods used: Browser commands
   * 1. isAlertOpen()  //return boolean
   * 2. acceptAlert()  //clcick ok
   * 3. dismissAlert()  //click cancel
   * 4. getAlertText()  //retrive prompt alert message
   * 5. sendAlertText() //send text
   */

 /* await $(`button=Click for JS Alert`).click()
  if(await browser.isAlertOpen()){    //Check first if there is any alert present
    await browser.acceptAlert()
    let assert_val = await (await $(`//p[@id="result"]`))
    let assert_ele = await assert_val.getText()
    console.log(`>> Assert: ${assert_ele}`);
    chai.expect(assert_ele).to.equal(`You successfully clicked an alert`)
  } */

/*  await $(`button=Click for JS Confirm`).click()
  if(await browser.isAlertOpen()){
    await browser.dismissAlert()
    let confirmEle = await $(`p=You clicked: Cancel`)
    let confirmAssert = await confirmEle.getText()
    console.log(`>> confirmAssert: ${confirmAssert}`);
    chai.expect(confirmAssert).to.equal(`You clicked: Cancel`)
  } */

 /* await $(`button=Click for JS Prompt`).click()
  if(await browser.isAlertOpen()){
    let alert_Text = await browser.getAlertText()
    console.log(`>> alert_Text: ${alert_Text}`);
    await browser.sendAlertText(`This is JS Prompt!!!`)
    await browser.acceptAlert()
  } */

  /**
   * 6. File uploading
   */
  // console.log(process.cwd())
  //This is achieved when their is input tag
  // await $(`#file-upload`).addValue(`${process.cwd()}/data/fileupload/dummy.txt`)
  // await $(`#file-submit`).click()

  /**
   * 7. Frames
   * Methods used:
   * 1. switchToFrame()
   * 2. switchToParentFrame()
   */

  await $(`=iFrame`).click()
  let frame_ele = await $(`#mce_0_ifr`)
  //Switching to iframe
  await browser.switchToFrame(frame_ele)
  //interacting inside the frame
  await $(`#tinymce`).setValue(`Typing in the frame`)
  //switching back to the main frame
  await browser.switchToParentFrame()

  await browser.debug()



});



