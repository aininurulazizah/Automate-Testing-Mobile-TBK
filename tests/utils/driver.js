const { remote } = require('webdriverio');

async function createDriver(appPackage) {
    const driver = await remote({
        logLevel: 'warn',
        hostname: '127.0.0.1',
        port: 4723,
        capabilities: {
          platformName: 'Android',
          'appium:automationName': 'UiAutomator2',
          'appium:deviceName': 'Samsung',
          'appium:appPackage': appPackage,
          'appium:appActivity': '.MainActivity',
          'appium:appWaitActivity': '*',
          'appium:noReset': true,
          'appium:appWaitDuration': 30000,
        },
    });
    
    return driver;
}

module.exports = { createDriver };