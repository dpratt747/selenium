'use strict';
const config = require("../conf.js");
const {By, Key, until} = require("selenium-webdriver");
// select the browser you wish to use
const browser = config.chrome.build();
const expect = require("chai").expect;


describe("Home page login", () => {
    // runs before all the test cases
    before(async () => {
        // Maximises screen size
        await browser.manage().window().maximize();
        // Opens an instance of the webpage
        browser.get("https://www.myvouchercodes.co.uk");
    });

    // runs before each test case
    beforeEach(async () => {
         await browser.sleep(2000);
    });

    // runs after all test have completed;
    after(async () => {
        // closes browser after everything has ran
       // await browser.quit();
    });

    // runs after each test
    // afterEach(async (test) => {
    //
    // });

    it("Clicking the sign in button should redirect to the sign in page", async () => {
        // xpath for signup button
        const signupButton = By.xpath("//i[@class='icon-thumbsup']");

        // have to wait for the buttons as the load slowly - fix this bro
        await browser.wait(until.elementsLocated(signupButton));

        // finds element by xpath
        await browser.findElement(signupButton).click();

        // gets page title
        const title = await browser.getTitle();

        // checks title is equals to the expected value
        expect(title).to.equal("Join Now - MyVoucherCodes");
    });

    it("Should fill form with user data", async () => {
        // elements xpaths
        const signupForm = By.xpath("//div[@class='c-signup-content__left u-mb']");
        const emailField = By.xpath("//input[@id='LayoutInputText__field']");

        // form details
        const email = "email@emailaddress.com";

        // clicks form field and then enters values do this for each field
        await browser.findElement(emailField).click();
        await browser.findElement(emailField).clear();
        await browser.findElement(emailField).sendKeys(email);

    });

});

