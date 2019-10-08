// PERHITUNGAN DANA PENDIDIKAN

// perhitungan usia
function hitungJumlah() {
    var umur    = document.getElementById('usia').value;
    var batas   = 18;
    var hasil  = batas - umur;
    if(hasil < 0) {
        document.getElementById('jangka').value = "Batas Usia Hanya 18"
    } else {
        document.getElementById('jangka').innerHTML = hasil;
    }
}

// perhitungaan biaya
function hitungBiaya() {
    // hitungan pertama
    var biaya   = document.getElementById('biaya').value;
    var inflasi = document.getElementById('inflasi').value;
    inflasi     = inflasi/100;
    var jangka  = document.getElementById('jangka').value;
    var hitung  = Math.pow(1 + inflasi, jangka);
    var hitung2 = Math.floor(biaya * hitung);
    var formatU = add_commas(hitung2);
    document.getElementById('biaya_nanti').innerHTML = "Rp. "+formatU;

    // hitungan kedua
    var asumsi          = document.getElementById('asumsi').value;
    asumsi              = asumsi/100;
    var diskonto        = 1/(1+(asumsi/12));
    var hasil1          = (hitung2*(asumsi/12*diskonto));
    var akhir           = jangka*12;
    var hasil2          = ((1 + asumsi/12));
    var hasil_akhir     = Math.pow(hasil2, akhir);
    var hasil_akhir_2   = hasil_akhir - 1;
    var hasil_final     = Math.floor(hasil1/hasil_akhir_2);
    var formatU2        = add_commas(hasil_final);
    document.getElementById('tabungan_bulanan').innerHTML = "Rp. "+formatU2;
}

// PERHITUNGAN PROTEKSI JIWA

// hitung kewajiban
function hitungKewajiban() {
    var kpr         = parseInt(document.getElementById('saldo_kpr').value);
    var kpm         = parseInt(document.getElementById('saldo_kpm').value);
    var kk          = parseInt(document.getElementById('saldo_kk').value);
    var kb          = parseInt(document.getElementById('saldo_kb').value);
    var kl          = parseInt(document.getElementById('saldo_kl').value);
    var hitungan    = kpr + kpm + kk + kb + kl;
    var hitunganA   = add_commas(hitungan);
    document.getElementById('total').innerHTML = "Rp. "+hitunganA;

    // hitungan UpIdeal
    var tahun       = parseInt(document.getElementById('penghasilan_tahun').value);
    var bulan       = document.getElementById('penghasilan_bulan').value;
    var asumsi      = document.getElementById('asumsi_bunga').value;
    asumsi          = asumsi/100;
    var upideal     = ((tahun/asumsi) + hitungan);
    var hitunganB   = add_commas(upideal)
    document.getElementById('up_ideal').innerHTML = "Rp. "+hitunganB;

    // hitung UpMinimal
    var upminimal   = ((bulan * 12)/asumsi + hitungan);
    var hitunganC   = add_commas(upminimal);
    document.getElementById('up_minimal').innerHTML = "Rp. "+hitunganC;
}