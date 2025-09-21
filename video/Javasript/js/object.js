const obj = {
  nama: "ahmad",
  telp: 69,

  buah: ["apel", "jeruk", "mangga"],
  coba: function () {
    return "coba function dalam object";
  },

  boleh: true,
  "tulis aja": 1234,
};

console.log(obj.nama);
console.log(obj.telp);
console.log(obj.boleh);
console.log(obj.coba());
console.log(obj.buah[0]);
console.log(obj["tulis aja"]);
