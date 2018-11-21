require("chromedriver");
require("geckodriver");



/**
 *
 * @param browser String - possible values
 * @returns {*}
 */

function driverCreationChrome(browser) {
    const webDriver = require("selenium-webdriver");
    return new webDriver.Builder()
        .forBrowser(browser);
}

exports.chrome = driverCreationChrome("chrome");
exports.firefox = driverCreationChrome("firefox");
// exports.safari = driverCreationChrome("safari");