let tblmenu = [
  { idmenu: 1, idkategori: 1, menu: "apel", gambar: "apel.jpg", harga: 3000 },
  {
    idmenu: 2,
    idkategori: 1,
    menu: "pisang",
    gambar: "pisang.jpg",
    harga: 5000,
  },
  {
    idmenu: 3,
    idkategori: 2,
    menu: "nasi padang",
    gambar: "np.jpg",
    harga: 8000,
  },
  {
    idmenu: 4,
    idkategori: 2,
    menu: "nasi ayam",
    gambar: "na.jpg",
    harga: 7000,
  },
  { idmenu: 5, idkategori: 3, menu: "es teh", gambar: "teh.jpg", harga: 3000 },
  {
    idmenu: 5,
    idkategori: 3,
    menu: "es jeruk",
    gambar: "jeruk.jpg",
    harga: 5000,
  },
];

let tampil = tblmenu.map(function (kolom) {
  return `
    <div class="produk-content">
        <div class="image">
            <img src="images/${kolom.gambar}" alt="">
        </div>
        <div class="titel">
            <h2>${kolom.menu}</h2>
        </div>
        <div class="harga">
            <h2>Rp. ${kolom.harga}</h2>
        </div>
        <div class="btn-beli">
            <button data-id=${kolom.harga}>Beli</button>
          </div>
    </div>
    `;
});

let isi = document.querySelector(".produk");
isi.innerHTML = tampil;

let btnbeli = document.querySelector(".btn-beli > button");
let cart = [];
for (let index = 0; index < btnbeli.length; index++) {
  btnbeli[index].onclick = function () {
    // console.log(btnbeli[index].dataset["idmenu"]);
    // cart.push(btnbeli[index].dataset["idmenu"]);
    tblmenu.filter(function (a) {
      if (a.idmenu == btnbeli[index].dataset["idmenu"]) {
        cart.push(a);
        console.log(cart);
      }
    });
  };
}

// console.log(cart);
