function reservasiSteps(app, driver) {
    
    const mitra_app = app.replace(/^@/, '');
    
    const { elements } = require(`../pages/${mitra_app}`);

    async function closeBanner() {
        const buttonCloseBanner = await driver.$(elements.buttonCloseBanner);
        while (await buttonCloseBanner.isExisting()) {
            console.log('banner ditemukan');
            await buttonCloseBanner.click();
            await driver.debug();
        }
    }
    
    async function functionY() {
        
    }

    async function functionZ() {
        
    }

    return {
        closeBanner,
    }
    
}
    
module.exports = { reservasiSteps };