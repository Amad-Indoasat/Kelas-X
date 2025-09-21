let fungsi = function (nama) {
  console.log("belajar function" + nama);
};

fungsi(" dulu");

let contoh = (nama) => {
  console.log("belajar function" + nama);
};

contoh(" Bambang");

let tambah = function (a, b) {
  return a + b;
};

console.log(tambah(60, 9));

let plus = (a, b) => a + b;
console.log(plus(60, 9));

let hasil = (a) => a * 3;

console.log(hasil(5));

let lagi = () => console.log("coba lagi");

lagi();

let belajar = () => {
  console.log("baris 1");
  console.log("baris 2");
  console.log("baris 3");
  console.log("baris lainnya");
};

belajar();

let nilai = 7;
let uji = nilai < 9 ? () => (predikat = "dungu") : () => (predikat = "pintar");
console.log(uji());
