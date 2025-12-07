console.log("---Tiket Masuk Zoo---");
let pengunjung = [{nama: "Judy", umur: 4}, {nama: "Joko", umur: 35}, {nama: "Sela", umur: 65}, {nama: "Zell", umur: 10}];

//Harga tiket dasar
let hargaTiket = 50000;

//Looping
for(let i = 0; i < pengunjung.length; i++){
    let namaPengunjung = pengunjung[i].nama;
    let umurPengunjung = pengunjung[i].umur;
    let pesan = ""; 

//Percabangan
if(umurPengunjung < 5){
    pesan = "Free! Untuk Balita";
}else if(umurPengunjung <= 17){
    pesan = "Diskon 50% Harga Tiket: " + (hargaTiket / 2);
}else if(umurPengunjung >= 60){
    pesan = "Diskon 30% Harga Tiket: " + (hargaTiket * 0.7);
}else{
    pesan = "Harga Normal: " + hargaTiket;
}

console.log("Nama Pengungjung   : " + namaPengunjung);
console.log("Umur               : " + umurPengunjung + " Tahun");
console.log("Keterangan:        : " + pesan);
}
