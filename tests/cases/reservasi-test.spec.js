const { test } = require("@playwright/test");
const { apps } = require('../utils/apps');
const { createDriver } = require('../utils/driver');


for (const app of apps.filter(app => app.enabled)) {

    test.describe(`Mobile Reservation`, () => {
        let driver;
        
         // Membuat sesi dan membuka aplikasi untuk setiap test case
        test.beforeEach(async () => {
          driver = await createDriver(app.appPackage);
          await driver.activateApp(app.appPackage);
        });
        
        // Menutup sesi aplikasi untuk setiap test case
        test.afterEach(async () => {
            if (driver) {
              await driver.deleteSession();
            }  
        });

        // Test case dan langkah - langkah-nya
        test(`${app.tag} - Mobile - Test Case 1 - One Way Trip`, async () => {
        
            console.log(`Menjalankan ${app.tag} - Test Case 1 - One Way Trip`);
            
        });

        test(`${app.tag} - Mobile - Test Case 2 - Round Trip`, async () => {
        
          console.log(`Menjalankan ${app.tag} - Test Case 2 - Round Trip`);
          
      });
        
    });
    
};
