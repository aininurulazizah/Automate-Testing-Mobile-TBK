function reservasiSteps(app, driver) {
    
    const mitra_app = app.replace(/^@/, '');
    
    const { elements } = require(`../pages/${mitra_app}`);
    const { tapByCoordinates } = require('../utils/helper');

    async function closeBanner() {
        const buttonCloseBanner = await driver.$(elements.buttonCloseBanner);
        while (await buttonCloseBanner.isExisting()) {
            await tapByCoordinates(driver, 933, 776);  //elemen close banner melalui koordinat langsung;
        }
    }
    
    async function pilihLayananTravel() {
        const buttonTravelService = await driver.$(elements.buttonTravelService);
        await buttonTravelService.click();
    }

    async function pilihKeberangkatan(keberangkatan) {
        const dropdownKeberangkatan = await driver.$(elements.dropdownKeberangkatan);
        const optionKeberangkatan = await driver.$(elements.optionKeberangkatan(keberangkatan));
        await dropdownKeberangkatan.click();
        await optionKeberangkatan.scrollIntoView();
        await optionKeberangkatan.click();
    }

    async function pilihTujuan(tujuan) {
        const dropdownTujuan = await driver.$(elements.dropdownTujuan);
        const optionTujuan = await driver.$(elements.optionTujuan(tujuan));
        await dropdownTujuan.click();
        await optionTujuan.scrollIntoView();
        await optionTujuan.click();
    }

    async function pilihTanggalBerangkat(tanggal) {
        const datePickerKeberangkatan = await driver.$(elements.datePickerKeberangkatan);
        const buttonNextMonth = await driver.$(elements.buttonNextMonth);
        const optionDateKeberangkatan = await driver.$(elements.optionDateKeberangkatan(tanggal));

        await datePickerKeberangkatan.click();

        while(!(await optionDateKeberangkatan.isExisting())) {
            await buttonNextMonth.click();
        }
    
        await optionDateKeberangkatan.click();

    }

    async function pilihTanggalPulang(tanggal) {

    }

    async function cariTiket() {
        const buttonCariTiket = await driver.$(elements.buttonCariTiket);
        await buttonCariTiket.click();
    }

    return {
        closeBanner,
        pilihLayananTravel,
        pilihKeberangkatan,
        pilihTujuan,
        pilihTanggalBerangkat,
        pilihTanggalPulang,
        cariTiket,
    }
    
}
    
module.exports = { reservasiSteps };