// Function Declaration 
function sapa () {console.log("Halo"); }
function tambah (a,b) {return a + b;}
function kurang (a,b) {return a - b;}
function kali (a,b) {return a * b;}
function bagi (a,b) {return a / b;}

// Function Expression
const sapa = function () {console.log("Halo"); }
const tambah = function (a,b) {return a + b;}
const cekGenap = function (n) {return n % 2 === 0;}
const luasPersegi = function (s) {return s * s;}
const pajak = function (h) {return h * 0.1;}

// Arrow Function
const sapa = () => {console.log("Halo"); }
const tambah = (a,b) => {return a + b;}
const kuadrat = x => x * x;
const diskon = h => h * 0.1;
const cekUmur = u => u >= 18;

// Anonymous Function
setTimeout(function () {console.log("Halo"); }, 1000);
btn.onclick = function () {alert("Klik"); };
[1,2,3].forEach(function (x) {console.log(x); });
document.addEventListener("click", function () {console.log("Klik"); });
(function () {console.log("Oi"); })();

//Callback Function
function proses (a,cb) { cd (a); }
proses (5, function (x) {console.log(x); });
[1,2].map(function(x){console.log(x); });
setTimeout(function () {console.log("Halo"); }, 1000);
function hitung (a,b,op) {return op (a,b);}

//IIFE
(function () {console.log("Oi"); })();
(()=> {console.log("Oi"); })();
(function (n) {console.log(n);})(5);
(() => {let x =10; console.log(x);})();
(function () {let x =10; console.log(x);})();
(function () {alert ('IIFE');})();

//Function Constructor
function user(n){ this.nama=n}
const u = new user("Budi");
function Mobil(m){this.merk=m}
const m = new Mobil("Toyota");
function produk(n,h) { this.nama=n; this.harga=h}

//Async Function
async function getData() {return 'OK';}
const cek = async () => 'Siap';
async function delay() {await new Promise(resolve => setTimeout(resolve,1000));}
async function hitung (a) {return a*2}
async function tampil () {console.log(await getData());}