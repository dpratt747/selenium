'use strict';
const config = require("../conf.js");
const browser = config.chrome.build();
const webdriver = require("selenium-webdriver");

browser.get("https://www.myvouchercodes.co.uk");

// Login Button
function getLoginButton(){
    return browser.wait(
        webdriver.until.elementsLocated(
            webdriver.By.xpath("//a[@href='/member/login?return_url=%2F&seccode=OWQ1NjI5NzM3NjBhMjEwYzQ1ZjI4MjA4ODdkZGU4YTM%3D']")
        )
    );
}

getLoginButton().then(function (element) {
    browser.findElement(webdriver.By.xpath("//a[@href='/member/login?return_url=%2F&seccode=OWQ1NjI5NzM3NjBhMjEwYzQ1ZjI4MjA4ODdkZGU4YTM%3D']")).click();
});

// browser.quit();