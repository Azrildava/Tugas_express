// import express
import express from "express";

//init express router
const router = express.Router();

router.get('/tes/:nama/:kelas/:pts/:pas',(req,res)=>{
    var nama = req.params.nama;
    var kelas = req.params.kelas;
    var pts = parseInt(req.params.pts);
    var pas = parseInt(req.params.pas);

    var rapot = (pts + pas) /2;


    if(rapot >= 90 && rapot <= 100) {
        var grade = "Grade A"
    }else if(rapot >= 80) {
        var grade = "Grade B"
    }else if(rapot >= 70) {
        var grade = "Grade C"
    }else if(rapot >= 60) {
        var grade = "Grade D"
    }else if(rapot >= 50) {
        var grade = "Grade E"
    }else if(rapot >= 0) {
        var grade = "SING GETOL JANG !!!!"
    }else {
        var grade = "Nilai Tidak Valid"
    }
    


    res.send(
        'nama : ' + nama + '<br>' +
        'kelas : ' + kelas + '<br>' +
        'Nilai PTS : ' + pts + '<br>' +
        'Nilai PAS : ' + pas + '<br>' +
        'Nilai Rapot :' + rapot + '<br>' +
        'Keterangan : ' + grade 
    );

});


//basic route
router.get('/biodata/:nama/:Tempat/:Tanggal/:Jenis/:Agama/:Alamat/:Telepon/:Email/:Hobi/:Cita',(req,res) => {
    var nama = req.params.nama;
    var Tempat_Lahir = req.params.Tempat;
    var Tanggal_Lahir = req.params.Tanggal;
    var Jenis_kelamin = req.params.Jenis;
    var Agama = req.params.Agama;
    var Alamat = req.params.Alamat;
    var Telepon = req.params.Telepon;
    var Email = req.params.Email;
    var Hobi = req.params.Hobi;
    var Cita_cita = req.params.Cita;
    res.send(

        'Nama : ' + nama + '<br>' +
        'Tempat Lahir : ' + Tempat_Lahir + '<br>' +
        'Tanggal Lahir : '+Tanggal_Lahir + '<br>' +
        'Jenis Kelamin : ' +Jenis_kelamin+ '<br>' +
        'Agama : ' +Agama+ '<br>' +
        'Alamat : '+Alamat +'<br>'+
        'Telepon :'+ Telepon+'<br>'+
        'Email : ' + Email + '<br>' +
        'Hobi : ' +Hobi+'<br>'+
        'Cita-cita :'+Cita_cita+'<br>'

    );
});

router.get('/aritmatika',(req,res) => {
    var bilangan1 = 10;
    var bilangan2 = 5;
    var tambah = bilangan1 + bilangan2;

    var bilangan1 = 10;
    var bilangan2 = 5;
    var Pengurangan = bilangan1 - bilangan2;

    var bilangan1 = 10;
    var bilangan2 = 5;
    var pengkalian = bilangan1 * bilangan2;

    var bilangan1 = 10;
    var bilangan2 = 5;
    var pembagian = bilangan1 / bilangan2;

    res.send(
    '<h3> Penjumlahan </h3>' +
    'Bilangan ke 1 : ' +bilangan1+ '<br>' +
    'Bilangan ke 1 : ' +bilangan2+ '<br>' +
    'Hasil : ' + tambah + '<hr>' +

    '<h3> Pengurangan </h3>' +
    'Bilangan ke 1 : ' +bilangan1+ '<br>' +
    'Bilangan ke 1 : ' +bilangan2+ '<br>' +
    'Hasil : ' + Pengurangan + '<hr>' +

    '<h3> Pengkalian </h3>' +
    'Bilangan ke 1 : ' +bilangan1+ '<br>' +
    'Bilangan ke 1 : ' +bilangan2+ '<br>' +
    'Hasil : ' + pengkalian + '<hr>' +

    '<h3> Pembagian </h3>' +
    'Bilangan ke 1 : ' +bilangan1+ '<br>' +
    'Bilangan ke 1 : ' +bilangan2+ '<br>' +
    'Hasil : ' + pembagian + '<hr>' 

    
    );
      
});
router.get('/bangun_datar',(req,res) => {
    var sisi1 = 11;
    var sisi2 = 11;
    var hasil = sisi1 * sisi2;

    var panjang = 15;
    var lebar = 8;
    var hasil2 = panjang * lebar;

    var alas = 10;
    var tinggi = 5;
    var setengah = 1/2;
    var hasil3 = setengah * alas * tinggi;

    var v = 3.14;
    var Jari = 13;
    var hasil4 = v * Jari * Jari ;

    res.send(
    '<h3> Persegi</h3>' +
    'Sisi ke 1 : ' +sisi1+ '<br>' +
    'Sisi ke 2 : ' +sisi2+ '<br>' +
    'Hasil : ' + hasil + '<hr>' +

    '<h3> Persegi panjang </h3>' +
    'Panjang  : ' +panjang+ '<br>' +
    'Lebar : ' +lebar+ '<br>' +
    'Hasil : ' + hasil2  + '<hr>' +

    '<h3> Segitiga </h3>' +
    'Alas : ' +alas+ '<br>' +
    'Tinggi  : ' +tinggi+ '<br>' +
    'Setengah  : ' +setengah+ '<br>' +
    'Hasil : ' + hasil3 + '<hr>' +

    '<h3> Lingkaran </h3>' +
    'V  : ' +v+ '<br>' +
    'Jari : ' +Jari+ '<br>' +
    'Hasil : ' + hasil4+ '<hr>' 

    
    );
      
});

//route

router.get('/bersarang/:nama/:jurusan/:kelas', (req,res) => {
    
    var nama = req.params.nama;
    var jurusan = req.params.jurusan;
    var kelas = req.params.kelas;

    if (jurusan == 'RPL') {
        if (kelas == '10 RPL')
            var ket = "Anda Kelas 10 RPL"
           else if (kelas == '11 RPl') {
            var ket = "Anda kelas 11 RPL"
        }else if (jurusan == 'RPL') {
            var ket = "Anda kelas 12 RPL"
        }else  {
            var ket = "Anda Jurusan alumni cuyy"
        }
    }else if (jurusan == 'TKRO') {
        if (kelas == '10 TKRO')
        var ket = "Anda Kelas 10 TKRO"
       else if (kelas == '11 TKRO') {
        var ket = "Anda kelas 11 TKRO"
    }else if (jurusan == 'TKRO') {
        var ket = "Anda kelas 12 TKRO"
    }else  {
        var ket = "Anda Jurusan alumni cuyy"
    }
    }else if (jurusan == 'TBSM') {
        if (kelas == '10 TBSM')
        var ket = "Anda Kelas 10 TBSM"
       else if (kelas == '11 TBSM') {
        var ket = "Anda kelas 11 TBSM"
    }else if (jurusan == 'TBSM') {
        var ket = "Anda kelas 12 TBSM"
    }else  {
        var ket = "Anda Jurusan alumni cuyy"
    }
    }else {
        var ket = "Jurusan tidak tersedia"
    }

    res.send(
        'Nama : ' + nama + '<br>' +
        'Jurusan : ' + ket + '<br>'
    );
});


//route

router.get('/latihan/:Nama/:Tanggal/:jenis/:Pesanan/:Jumlah', (req,res) => {

    var nama_pembeli = req.params.Nama;
    var Tanggal = req.params.Tanggal;
    var Jenis = req.params.jenis;
    var pesanan = req.params.Pesanan;
    var Jumlah = req.params.Jumlah; 

    if (Jenis == 'makanan') {
        if (pesanan== 'nasi goreng') {
            var harga = 20000
        } else if (pesanan == 'Mie Goreng') {
            var harga = 30000;
        } else if (pesanan == 'Ayam Goreng') {
            var harga = 40000;
        }else {
            var pesanan = "Belum tersedia"
        }
    }else if (Jenis == 'minuman') {
        if (pesanan== 'Air Mineral') {
            var harga = 10000;
        } else if (pesanan == 'Jus') {
            var harga = 20000;
        } else if (pesanan == 'Kopi') {
            var harga = 30000;
        }else {
            var pesanan = "Belum tersedia"
        }
    }

    var total = Jumlah * harga;
    if (total >= 100000) {
        var diskon = total * 0.5;
    } else {
        var diskon = 0
    }
    var total_pembayaran = total - diskon;

    res.send(
        '<H3><center>Starling</center></H3>' + '<br>' +
        'Nama pembeli      : ' + nama_pembeli + '<br>' +
        'Tanggal           : ' + Tanggal + '<br>' +
        'Jenis             : ' + Jenis + '<br>' +
        'Pesanan           : ' + pesanan + '<br>' +
        'Harga             : ' + harga + '<br>' +
        'Jumlah            : ' + Jumlah + '<br>' +
        
        '-------------------------------------'+ '<br>' +

        'total             : ' + total + '<br>' +
        'diskon            : ' + diskon + '<br>' +
        'total Pembayaran  : ' + total_pembayaran + '<br>' +
        '<h3><center>------->TERIMAKASIH<-------</center></h3>'

      );
});

//router samplee

router.get('/sample', (req,res) => {

    res.send(
        '<h3>Selamat Datang</h3>'
    )

});

//export default router
export default router;