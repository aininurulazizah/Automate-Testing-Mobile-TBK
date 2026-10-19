const { test } = require("@playwright/test");
const { apps } = require('../utils/apps');
const { createDriver } = require('../utils/driver');
const { loginSteps } = require('../steps/login');
const { reservasiSteps } = require('../steps/reservasi');


for (const app of apps.filter(app => app.enabled)) {

    test.describe(`Mobile Reservation`, () => {
        let driver;
        let steps;
        
         // Membuat sesi dan membuka aplikasi untuk setiap test case
        test.beforeEach(async () => {
          driver = await createDriver(app.appPackage);
          await driver.activateApp(app.appPackage);

          // Menyiapkan steps test
          steps = reservasiSteps(app.tag, driver);
          const login_steps = loginSteps(app.tag, driver);

          // Precondition : Login
          await login_steps.klikMasukSebagaiTamu();
        });
        
        // Menutup sesi aplikasi untuk setiap test case
        test.afterEach(async () => {
          if (driver) {
            await driver.terminateApp(app.appPackage);
            await driver.deleteSession();
            driver = undefined;
          }  
        });

        // Test case dan langkah - langkah-nya
        test(`${app.tag} - Mobile - Test Case 1 - One Way Trip`, async () => {
        
            await steps.closeBanner();
            
        });

        test(`${app.tag} - Mobile - Test Case 2 - Round Trip`, async () => {
        
          console.log(`Menjalankan ${app.tag} - Test Case 2 - Round Trip`);
          
      });
        
    });
    
};
