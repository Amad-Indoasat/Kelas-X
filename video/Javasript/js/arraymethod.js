let nilai = [
  { nama: "naldo", ipa: 80, bid: 90, mtk: 90 },
  { nama: "pesi", ipa: 90, bid: 80, mtk: 85 },
  { nama: "bape", ipa: 87, bid: 80, mtk: 90 },
  { nama: "marimar", ipa: 85, bid: 78, mtk: 80 },
];

let nama = ["naldo", "pesi", "bape", "marimar"];
// nama.push("ramos", "marsel");

// console.log(nama.shift);

// nama.unshift("amad", "pep");

let mapel = ["ipa", "bhs", "mtk"];

// console.log(nama.concat(mapel));

// console.log(nama.concat(["ips", "pkn", "sejarah"]));

// console.log(nama.splice(3, 4));

// console.log(nama.slice(0, 3));

// console.log(nama.pop());

// console.log(nilai[0].nama);
// console.log(nama[1]);

// nama.forEach(a => console.log(a));

// nilai.filter(function (a) {
//   if (a.ipa > 80) {
//     console.log(a.nama);
//   }
// });

// console.log(nilai);

// nilai.filter((a) => (a.ipa > 80 && a.mtk > 80 ? console.log(a.nama) : null));

// let siswa = nilai.map(function (a) {
//   return a.nama;
// });

// let siswa = nilai.map((a) => [a.nama, a.ipa]);

// console.log(siswa);

// mapel.sort();

// console.log(mapel);

// let hasil = nilai.reduce(function (a, b) {
//   return (a = a + b.ipa);
// }, 0);

let hasil = nilai.reduce((a, b) => (a = a + b.ipa), 0);

console.log(hasil);
