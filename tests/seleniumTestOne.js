'use strict';

require("chromedriver");
const webDriver = require("selenium-webdriver");


function driverCreationChrome() {
    return new webDriver.Builder()
        .forBrowser("chrome")
        .build();
}

const browser = driverCreationChrome();
browser.get("https://www.myvouchercodes.co.uk/black-friday-deals");

const promise = browser.getTitle();

promise.then(function (title) {
   console.log(title);
});

browser.quit();