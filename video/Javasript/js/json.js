document.querySelector("#klik").addEventListener("click", tampil);

function tampil(params) {
  let url = "js/tblmenu.json";
  fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      let output =
        "<h1>DATA MENU</h1> <table border=1px><th>menu</th><th>harga</th><th>warna</th>";
      data.forEach((element) => {
        output += `<tr>
          <td>${element.menu}</td>
          <td>${element.harga}</td>
          <td>${element.warna[0]}</td>
        </tr>`;
      });
      output += "</table>";
      document.querySelector("#isi").innerHTML = output;
    });
}

// let tblmenu = [
// {

//   "idmenu": 1,
//   "idkategori": 1,
//   "menu": "apel",
//   "harga": 3000,
//   "warna": ["merah", "kuning", "hijau"],
//   "stok": true,
//   "keterangan": null

// },
// {

//   "idmenu": 1,
//   "idkategori": 1,
//   "menu": "pisang",
//   "harga": 2000,
//   "warna": ["potasium", "kuning"],
//   "stok": true,
//   "keterangan": null

// },

// ]
