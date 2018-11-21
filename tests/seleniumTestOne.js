'use strict';

require("chromedriver");
const config = require("./conf.js");

const browser = config.chrome.build();
browser.get("https://www.myvouchercodes.co.uk/black-friday-deals");

const promise = browser.getTitle();

promise.then(function (title) {
   console.log(title);
});

// browser.quit();