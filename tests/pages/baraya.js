
// Elements
const elements = {

    // Login
    buttonLoginAsGuest : '//*[@content-desc="atau masuk sebagai tamu"]',
    buttonLoginWithPhone : '//*[@content-desc="Dengan Nomor Telepon"]',
    buttonLoginWithEmail : '//*[@content-desc="Gunakan Email"]',
    buttonLoginWithGoogle : '//*[@content-desc="Gunakan Akun Google"]',

    // Reservasi
    buttonCloseBanner : '//*[@content-desc="Dismiss"]',
    buttonTravelService : '//*[@content-desc="Travel"]',
    dropdownKeberangkatan : '//*[@content-desc="Pilih Keberangkatan"]',
    dropdownTujuan : '//*[@content-desc="Pilih Tujuan"]',
    datePickerKeberangkatan : '//*[@content-desc="Pilih Tanggal Berangkat"]',
    buttonNextMonth : '//*[@bounds="[923,1286][1058,1421]"]',
    buttonPreviousMonth : '//*[@bounds="[23,1286][158,1421]"]',
    optionDateKeberangkatan : (keyword) => `//*[contains(@content-desc, "${keyword}")]`,
    optionKeberangkatan : (keyword) => `//android.widget.ImageView[contains(@content-desc, "${keyword}")]`,
    optionTujuan : (keyword) => `//android.widget.ImageView[contains(@content-desc, "${keyword}")]`,
    buttonCariTiket : '//*[@content-desc="Cari Tiket"]',

    // Daftar Jadwal
    parentCardJadwalPertama : '//android.widget.ScrollView/*[@index="5"]/*[@index="0"]',
    cardJadwalPertama : './*[@index="0"]',
    labelHargaTiket : './/*[@content-desc and contains(@content-desc, "Rp ")]',
    buttonPilihJadwal : './/*[@content-desc="Pilih"]',

    // Halaman Kursi
    cardKursi : '//*[@content-desc and contains(@content-desc, "Pilih Kursi Pergi")]/parent::*/parent::*/child::*[@index="8"]',
    listKursiTersedia : './/*[@clickable="true"]',
    labelTotaltiket : '//*[@content-desc and contains(@content-desc, "Pilih Kursi Pergi")]/parent::*/parent::*/child::*[@index="10"]',
    buttonPilihKursi : '//*[@content-desc and contains(@content-desc, "Pilih Kursi Pergi")]/parent::*/parent::*/child::*[@index="11"]',

    // Detail Pemesanan
    labelFieldPemesan : '//*[@content-desc="Nama"]',
    labelFieldNoHp : '//*[@content-desc="No.HP"]',
    labelFieldEmail : '//*[@content-desc="Email"]',
    fieldPemesan : '//*[@content-desc="Nama"]/following-sibling::android.widget.EditText[1]',
    fieldNoHp : '//*[@content-desc="No.HP"]/following-sibling::android.widget.EditText[1]',
    fieldEmail : '//*[@content-desc="Email"]/following-sibling::android.widget.EditText[1]',
    scrollView: '//android.widget.ScrollView',
    fieldPenumpang : '//*[@content-desc="Detail Penumpang"]/following-sibling::android.widget.EditText',
    // nextFieldPenumpang : './/following-sibling::android.widget.EditText[1]',

}

module.exports = { elements };