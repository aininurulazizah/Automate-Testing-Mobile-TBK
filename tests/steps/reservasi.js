function reservasiSteps(app, driver) {
    
    const mitra_app = app.replace(/^@/, '');
    
    const { expect } = require('@playwright/test');
    const { elements } = require(`../pages/${mitra_app}`);
    const { tapByCoordinates, normalizeRupiah } = require('../utils/helper');

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

    async function pilihJadwal() {
        const parentCardJadwal = await driver.$(elements.parentCardJadwalPertama);
        const cardJadwal = await parentCardJadwal.$(elements.cardJadwalPertama);
        const hargaTiket = await cardJadwal.$(elements.labelHargaTiket);
        const buttonPilihJadwal = await cardJadwal.$(elements.buttonPilihJadwal);
        const harga_tiket = normalizeRupiah(await hargaTiket.getAttribute('contentDescription'));
        
        await buttonPilihJadwal.click();
        return harga_tiket;
    }

    async function pilihKursi(jumlah_penumpang, harga_tiket) {
        const cardKursi = await driver.$(elements.cardKursi);
        const listKursiTersedia = await cardKursi.$$(elements.listKursiTersedia);
        const buttonPilihKursi = await driver.$(elements.buttonPilihKursi);

        for(let i = 0; i < jumlah_penumpang; i++) {
            await listKursiTersedia[i].click();
        }

        //Validasi total tiket
        const labelTotaltiket = await driver.$(elements.labelTotaltiket);
        const total_tiket_exp = jumlah_penumpang * harga_tiket;
        const total_tiket_act = normalizeRupiah(await labelTotaltiket.getAttribute('contentDescription'));

        expect(total_tiket_act).toBe(total_tiket_exp);

        await buttonPilihKursi.click();

        return total_tiket_act;

    }

    async function isiDataPemesan(pemesan) {
        const labelFieldPemesan = await driver.$(elements.labelFieldPemesan);
        const labelFieldNoHp = await driver.$(elements.labelFieldNoHp);
        const labelFieldEmail = await driver.$(elements.labelFieldEmail);
        const fieldPemesan = await driver.$(elements.fieldPemesan);
        const fieldNoHp = await driver.$(elements.fieldNoHp);
        const fieldEmail = await driver.$(elements.fieldEmail);

        await fieldPemesan.click();
        await fieldPemesan.setValue(pemesan.NamaPemesan);
        await labelFieldPemesan.click();

        await fieldNoHp.click();
        await fieldNoHp.setValue(pemesan.NoHP);
        await labelFieldNoHp.click();

        await fieldEmail.click();
        await fieldEmail.setValue(pemesan.Email);
        await labelFieldEmail.click();
    }

    async function isiDataPenumpang(jumlah_penumpang, penumpang) {

    }

    return {
        closeBanner,
        pilihLayananTravel,
        pilihKeberangkatan,
        pilihTujuan,
        pilihTanggalBerangkat,
        pilihTanggalPulang,
        cariTiket,
        pilihJadwal,
        pilihKursi,
        isiDataPemesan,
        isiDataPenumpang,
    }
    
}
    
module.exports = { reservasiSteps };