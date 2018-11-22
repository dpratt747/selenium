'use strict';
const config = require("../conf.js");
const {By, Key, until} = require("selenium-webdriver");
// select the browser you wish to use
const browser = config.chrome.build();
const expect = require("chai").expect;


describe("Home page login", () => {
    // runs before all the test cases
    before(async () => {
        // Opens an instance of the webpage
        browser.manage().window().maximize();
        browser.get("https://www.myvouchercodes.co.uk");
    });

    // runs before each test case
    beforeEach(async () => {
        // await browser.sleep(2000);
    });

    // runs after all test have completed;
    after(async () => {
       await browser.quit();
    });

    afterEach(async (test) => {
        console.log(test);
    });

    it("Clicking the sign in button should redirect to the sign in page", async () => {
        const signupButton = By.xpath("//i[@class='icon-thumbsup']");
        await browser.wait(until.elementsLocated(signupButton));
        await browser.findElement(signupButton).click();
        const title = await browser.getTitle();
        expect(title).to.equal("Join Now - MyVoucherCodes");
    });

});

// browser.quit();