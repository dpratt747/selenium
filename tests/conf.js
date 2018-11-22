require("chromedriver");
require("geckodriver");
require("iedriver");


class SeleniumConfig {
    constructor(browser) {
        return this.driverCreation(browser);
    }

    driverCreation(browser) {
        const webDriver = require("selenium-webdriver");
        const ieCapabilities = {
            "ignoreZoomSetting": true,
            "EnableNativeEvents": false
        };

        const a = new webDriver.Capabilities(ieCapabilities);

        return new webDriver.Builder()
            .forBrowser(browser);
    }
}



exports.chrome = new SeleniumConfig("chrome");
exports.firefox = new SeleniumConfig("firefox");
exports.internetexplorer = new SeleniumConfig("internet explorer");
