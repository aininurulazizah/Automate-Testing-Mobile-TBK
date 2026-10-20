
function getTanggalBasedBulan(bulan) {
    const today = new Date();
    const day = today.getDate(); //Ambil tanggal di hari ini
    today.setDate(1); //Set tanggal jadi 1 agar tidak overflow
    today.setMonth(today.getMonth() + bulan); //Set bulan ke bulan setelah berapa 'bulan'
    const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate(); //Set tanggal terakhir di bulan tujuan
    today.setDate(Math.min(day, lastDay)); //Membandingkan tanggal hari ini (yang akan dipilih) dengan tanggal terakhir di bulan tujuan (misal tgl sekarang 31, tanggal terakhir di bulan target 28, maka yang dipilih 28)
    return today.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }); //Mengembalikan nilai tanggal tujuan
}

function getTanggalCustom({
    selang_bulan = 1,
    kurang_hari = 0,
    customMonthToIndo = false
}) {
    const d = new Date(getTanggalBasedBulan(selang_bulan));

    d.setDate(d.getDate() - kurang_hari);

    if (customMonthToIndo) {
        return d.toLocaleDateString('id-ID', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    } else {
        return d.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
}

function getLastDay({
    customMonthToIndo = false
}) {
    const today = new Date();
    const d = new Date(today);

    // Hari terakhir bulan ini
    d.setMonth(d.getMonth() + 1, 0);

    // Kalau hari ini adalah hari terakhir bulan ini,
    // ambil hari terakhir bulan berikutnya
    if (
        today.getDate() === d.getDate() &&
        today.getMonth() === d.getMonth() &&
        today.getFullYear() === d.getFullYear()
    ) {
        d.setDate(1);                // 1 bulan berikutnya
        d.setMonth(d.getMonth() + 2, 0); // hari terakhir bulan berikutnya
    }

    if (customMonthToIndo) {
        const namaBulan = d.toLocaleDateString('id-ID', { month: 'long' });
        return `${namaBulan} ${d.getDate()}, ${d.getFullYear()}`;
    }

    return d.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function generateRandomPhoneNumber() {
    const unique = Date.now().toString().slice(-10);
    const phone_num = `08${unique}`;
    return phone_num;
}

function generateRandomEmail() {
    const unique = Date.now().toString().slice(-10);
    const email = `qc${unique}@example.com`;
    return email;
}

function createPemesan() {
    return {
        NamaPemesan: "Quality Control Tiketux",
        Email: generateRandomEmail(),
        NoHP: generateRandomPhoneNumber(),
        Alamat: "Bandung",
        JenisAntarJemput: "Jemput - Antar",
        AlamatJemput: "Jl. Jemput",
        AlamatAntar: "Jl. Antar"
    };
}

const DEFAULT_PASSENGER = process.env.CI ? 1 : 1;  // Ubah "1" yang kedua jika mau mengubah jumlah penumpang, namun ini hanya berlaku di lokal 

const testData = {

    baraya: {
        Keberangkatan: "BUAH BATU",
        Tujuan: "CIBUBUR",
        TanggalPergi: getTanggalCustom({
            selang_bulan: 1,
            kurang_hari: 0,
            customMonthToIndo: true
        }),
        TanggalPulang: getTanggalCustom({
            selang_bulan: 2,
            kurang_hari: 0,
            customMonthToIndo: true
        }),
        MetodeBayar: "Pembayaran Instan",
        PlatformBayar: "QRIS"
    },

    Penumpang: {
        PenumpangDewasa: {
            Penumpang_1: {
                NamaPenumpang: "Quality Control Satu",
                JenisKelamin: "Laki-laki"
            },
            Penumpang_2: {
                NamaPenumpang: "Quality Control Dua",
                JenisKelamin: "Perempuan"
            },
            Penumpang_3: {
                NamaPenumpang: "Quality Control Tiga",
                JenisKelamin: "Perempuan"
            },
            Penumpang_4: {
                NamaPenumpang: "Quality Control Empat",
                JenisKelamin: "Laki-laki"
            },
            Penumpang_5: {
                NamaPenumpang: "Quality Control Lima",
                JenisKelamin: "Laki-laki"
            }
        },
        PenumpangBayi: {
            PenumpangBayi_1: {
                NamaPenumpang: "Quality Control Bayi Satu"
            },
            PenumpangBayi_2: {
                NamaPenumpang: "Quality Control Bayi Dua"
            },
            PenumpangBayi_3: {
                NamaPenumpang: "Quality Control Bayi Tiga"
            }
        }
    }

};

module.exports = {
    testData,
}