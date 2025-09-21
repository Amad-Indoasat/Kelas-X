function coba() {
  a = document.querySelector(".isi");
  a.innerHtml = "belajar event listener";
  console.log("coba event listener");
}

// judul.addEventListener("click", coba);

// judul.onclick = coba;

judul.onmouseover = function () {
  console.log("coba funct anonimous");
};
