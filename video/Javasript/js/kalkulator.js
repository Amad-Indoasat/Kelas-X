let btn = document.querySelectorAll(".btn-angka > button");
let tampil = document.querySelector("#tampil");
let mat = document.querySelectorAll(".btn-mat > button");
let pilihan = null;
let x;
let y;

// console.log(mat);

// tampil.value = btn[5].innerHTML;

// console.log(btn[6].innerHTML);

for (let index = 0; index < array.length; index++) {
  btn[index].onclick = function () {
    // console.log(btn[index].innerHTML);

    if (tampil.value == "0") {
      tampil.value = btn[index].innerHTML;
    } else {
      tampil.value += btn[index].innerHTML;
    }
  };
}

mat[0].onclick = function () {
  tampil.value = "0";
};

mat[1].onclick = function () {
  tampil.value = "tambah";
  x = tampil.value;
  tampil.value = "0";
};

mat[2].onclick = function () {
  tampil.value = "kurang";
  x = tampil.value;
  tampil.value = "0";
};

mat[3].onclick = function () {
  tampil.value = "kali";
  x = tampil.value;
  tampil.value = "0";
};

mat[4].onclick = function () {
  tampil.value = "bagi";
  x = tampil.value;
  tampil.value = "0";
};

mat[5].onclick = function () {
  y = tampil.value;
  tampil.value = kalkulator(pilihan);
};

function kalkulator(pilihan) {
  if (pilihan != null) {
    switch (pilihan) {
      case "tambah":
        hasil = parseFloat(x) + parseFloat(y);
        break;
      case "kurang":
        hasil = parseFloat(x) - parseFloat(y);
        break;
      case "kali":
        hasil = parseFloat(x) * parseFloat(y);
        break;
      case "bagi":
        hasil = parseFloat(x) / parseFloat(y);
        break;
    }
    return hasil;
  }
}
