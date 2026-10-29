
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

}

module.exports = { elements };