function loginSteps(app, driver) {
    
    const mitra_app = app.replace(/^@/, '');
    
    const { elements } = require(`../pages/${mitra_app}`);

    async function klikMasukSebagaiTamu() {
        const buttonLoginAsGuest = await driver.$(elements.buttonLoginAsGuest);
        await buttonLoginAsGuest.click();
    }
    
    async function klikMasukDenganTelepon() {
        const buttonLoginWithPhone = await driver.$(elements.buttonLoginWithPhone);
        await buttonLoginWithPhone.click();
    }
    
    async function klikMasukDenganEmail() {
        const buttonLoginWithEmail = await driver.$(elements.buttonLoginWithEmail);
        await buttonLoginWithEmail.click();
    }

    async function klikMasukDenganGoogle() {
        const buttonLoginWithGoogle = await driver.$(elements.buttonLoginWithGoogle);
        await buttonLoginWithGoogle.click();
    }

    return {
        klikMasukSebagaiTamu,
        klikMasukDenganTelepon,
        klikMasukDenganEmail,
        klikMasukDenganGoogle,
    }
    
}
    
module.exports = { loginSteps };