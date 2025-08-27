function Input(){
    alert( document.querySelector("#nama").value  );
    document.querySelector("#hasil").value = document.querySelector("#nama").value;
    document.querySelector("#puru").innerText = document.querySelector("#nama").value;
}

function tampil() {
    document.querySelector("h1").innerText = "i was bored";
    document.querySelector(".container").style.backgroundColor ="red"
    document.querySelector("#para").style.fontSize = "50px"
}

function Tampil() {
    console.log( document.querySelectorAll("img") );

min = Math.ceil(0);
max = Math.ceil(2);
let n =Math.floor(Math.random() * (max - min + 1) + min);
console.log(n);

    document.querySelectorAll("img")[n].style.visibility="visible";
}

//btn.onclick = Input;

//btn.onclick = function () {
  //  alert("JS");
//}

//btn.addEventListener('click',Input);

//btn.addEventListener('mouseover',function() {
  //  alert("event");
//});

btn.onclick = function () {

    const nama = document.querySelector("#nama");

    if (nama.value == "a") {
        alert("nama lain masih banyak, isi ulang")
    }else{
        alert(nama.value)
    }

    //Tanda yang bisa digunakan > < == != <= >=

    // let a = 60;
    // let b = 9;

    // //b = b + a;
    // //b = b - a;
    // //b = b * a;
    // //b = b / a;
    // //b = b % a;
    // //b = b ** a;
    // //b = b ++ a;
    // b = b -- a;

    // console.log(b);

    //let menu = document.querySelector("ul")
    //menu.removeChild(menu.children[0])
   // const nama = document.querySelector("#nama");
    //const judul = document.querySelector("h1");
    //let tampil = "belajar "
    //judul.innerHTML = tampil + nama.value;
    //tampil = "javasript "
    //judul.innerHTML = tampil + nama.value;

}