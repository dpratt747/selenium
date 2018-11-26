require("chromedriver");
require("geckodriver");
require("iedriver");
const webDriver = require("selenium-webdriver");
const fs = require("fs");

class SeleniumConfig {
    constructor(browserName) {
        this.constructor.initDir();
        return this.constructor.driverCreation(browserName);

    }

    static initDir() {
        const dir = "./screenshots";
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
    };

    static getBrowserCapabilities(browserName) {
        const pref = new webDriver.logging.Preferences();
        const chromeCapabilities = webDriver.Capabilities.chrome().setLoggingPrefs(pref.setLevel(webDriver.logging.Type.BROWSER, webDriver.logging.Level.DEBUG));
        const fireCapabilities = webDriver.Capabilities.firefox().setLoggingPrefs(pref.setLevel(webDriver.logging.Type.BROWSER, webDriver.logging.Level.DEBUG));

        if (browserName === "chrome") {
            return chromeCapabilities;
        } else if (browserName === "firefox") {
            return fireCapabilities;
        }
    };

    static driverCreation(browserName) {
        return new webDriver.Builder()
            .withCapabilities(this.getBrowserCapabilities(browserName))
            .forBrowser(browserName);
    };
}

/***
 *
 * @param test this.currentTest
 * @param driver selenium-webdriver
 */

exports.captureFailures = function (test, driver) {
    if (test.state === "failed") {
        const time = "_" + Math.floor(Date.now() / 1000 | 0).toString();
        driver.takeScreenshot(true).then(function (image) {
            fs.writeFileSync(`screenshots\\${test.title + time}.png`, image, "base64", function (err) {
                console.log(err);
            });
        });
    }
};

exports.chrome = new SeleniumConfig("chrome");
exports.firefox = new SeleniumConfig("firefox");
exports.internetexplorer = new SeleniumConfig("internet explorer");
