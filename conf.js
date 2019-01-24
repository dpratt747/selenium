require("chromedriver");
require("geckodriver");
require("iedriver");
const webDriver = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
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
            // .chrome();


        switch(browserName){
            case 'chrome':
                const chromeCapabilities = webDriver.Capabilities.chrome();
                // https://peter.sh/experiments/chromium-command-line-switches/
                const chromeOptions = { 'args': ['--start-maximized', '--headless', '--test-type', 'window-size=1200,1100'] };
                return chromeCapabilities.set('chromeOptions', chromeOptions);
            case 'firefox':
                const firefoxCapabilities = webDriver.Capabilities.chrome();
                // const firefoxOptions = { 'args': ['--start-maximized', '--headless', '--test-type', 'window-size=1200,1100'] };
                return firefoxCapabilities.set('chromeOptions', firefoxOptions);
            case 'internet explorer':
                break;
            default:
                throw Error("Unsupported browser passed " + browserName )
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

exports.getDriverByName = function (browserName) {
  switch(browserName){
      case "chrome":
          return new SeleniumConfig('chrome').build();
      case "firefox":
          return new SeleniumConfig('firefox'.build());
      case "internet explorer":
          return new SeleniumConfig('internet explorer').build();
  }
};
exports.sandbox_domain = "http://uk.sb.tgvg.net";
exports.live_domain = "https://www.myvouchercodes.co.uk";
