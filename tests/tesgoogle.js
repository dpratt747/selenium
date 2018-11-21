const wdio = require("webdriverio");

const opts = {
  port: 4723,
  desiredCapabilities: {
    platformName: "Android",
    platformVersion: "8.0",
    deviceName: "Android Emulator",
    app: "/path/to/the/downloaded/ApiDemos.apk",
    automationName: "UiAutomator2"
  }
};

const client = wdio.remote(opts);
