
const { apps } = require('../utils/apps');
const { createDriver } = require('../utils/driver');

const driver = await createDriver(apps.appPackage);

// Elements (Contoh sementara)
const elements = {
    product : driver.$('//*[@text="Sauce Labs Backpack"]/preceding-sibling::android.widget.ImageView'),
    product_price : driver.$('//*[@text="Sauce Labs Backpack"]/following-sibling::*[@resource-id="com.saucelabs.mydemoapp.android:id/priceTV"]'),
    increase_button : driver.$('//*[@content-desc="Increase item quantity"]'),
}

module.exports = {
    elements
};