//Bab 2
//topic Pengantar Event Dom
// hanya berisi gambar saja

//topic dua Menjalankan Event Pada Inline Element

//topic tiga Menjalankan Event Melalui Property Dom

// const buttn = document.querySelector("#clickme");

// //cara ini tidak disarankan karena button akan dieksekusi terlebih dahulu!
// // buttn.onclick = console.log("telah ditekan");

// //cara ini baru benar!
// buttn.onclick = function () {
//   console.log("Telah ditekan");
// };
// // buttn.onmouseover = function () {
// //     console.log("Jangan sentuh aku!");
// // };

// //ada cara baru juga disimpan dalam variabel
// const scream = () => {
//   console.log("Jangan sentuh aku!");
// };
// buttn.onmouseover = scream;

// //catatan event onclick bukan hanya dimiliki oleh button saja!

//topic Empat Mengenal Fungsi Addeventlistener

//cara ini terbaik untuk saat ini
// const eventbtn = document.querySelector("#evenbtn");
// // eventbtn.addEventListener("click", function () {
// //   alert("clicked");
// // });
// eventbtn.addEventListener("click", stepSatu);
// eventbtn.addEventListener("click", stepDua);

// // //dibanding cara dibawah ini
// function stepSatu() {
//   console.log("satu");
// }
// function stepDua() {
//   console.log("dua");
// }
// eventbtn.onclick = stepSatu;
// eventbtn.onclick = stepDua;
// //ini bakal mereplace stepSatu

//topic lima Latihan Addeventlistener Untuk Generate Color
// const button = document.querySelector("button");
// const headingOne = document.querySelector("h1");

// button.addEventListener("click", () => {
//   const newColor = generateRandomColor();
//   document.body.style.backgroundColor = newColor;
//   headingOne.innerText = newColor;
//   console.log(newColor);
// });

// const generateRandomColor = () => {
//   const r = Math.floor(Math.random() * 255);
//   const g = Math.floor(Math.random() * 255);
//   const b = Math.floor(Math.random() * 255);
//   return `rgb(${r} ${g} ${b})`;
// };

//topic enam memanfaatkan keyword this pada event pada dom

// const generateRandomColor = () => {
//   const r = Math.floor(Math.random() * 255);
//   const g = Math.floor(Math.random() * 255);
//   const b = Math.floor(Math.random() * 255);
//   return `rgb(${r} ${g} ${b})`;
// };

// const buttons = document.querySelectorAll("button");

// // for (let button of buttons) {
// //   button.addEventListener("click", () => {
// //     button.style.backgroundColor = generateRandomColor();
// //     button.style.color = generateRandomColor();
// //     console.log(this); //muncul pada console broswer
// //   });
// // }

// for (let button of buttons) {
//   button.addEventListener("click", colorrize);
// }
// const headings = document.querySelectorAll("h1");

// for (let heading of headings) {
//   heading.addEventListener("click", colorrize);
// }

// function colorrize() {
//   this.style.backgroundColor = generateRandomColor();
//   this.style.color = generateRandomColor();
// }

//topic tujuh Belajar Keyboard Event Dan Mengenal Object Dalam Event
// document.querySelector("button").addEventListener("click", (e) => {
//   console.log(e);
// });

// const input = document.querySelector("input");
// input.addEventListener("keydown", (e) => {
//   //   console.log(e); //melihat di console
//   //   console.log(e.key); //melihat di console
//   //   console.log(e.code); //melihat di console
//   switch (e.code) {
//     case "ArrowUp":
//       console.log("Tombol Atas");
//       break;
//     case "ArrowDown":
//       console.log("Tombol Bawah");
//       break;
//     case "ArrowRight":
//       console.log("Tombol Kanan");
//       break;
//     case "ArrowLeft":
//       console.log("Tombol Kiri");
//       break;
//   }
// });

// input.addEventListener("keyup", () => {
//   console.log("Input dirilis!");
// });

//topic delapan Mengenal Event Preventdefault
// const form = document.querySelector("form");
// form.addEventListener("submit", function (e) {
//   //mencegah untuk tidak berpindah halaman(behavier)=kebiasaan
//   e.preventDefault();
//   console.log("submit");
// });

// document.querySelector("a").addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log("Harusnya ke google");
// });

//topic sembilan Praktek Input Realtime Dengan Event Dan Dom
// const form = document.querySelector("form");
// const input = document.querySelector("input");
// const list = document.querySelector("#notes");
// form.addEventListener("submit", function (e) {
//   //mencegah untuk tidak berpindah halaman(behavier)=kebiasaan
//   e.preventDefault();
//   const noteValue = input.value;
//   const newList = document.createElement("li");
//   newList.innerText = noteValue;
//   list.append(newList);
//   //   console.log(newList);
//   input.value = "";
// });

//topic sepuluh Event Input Dan Change Pada Form
const form = document.querySelector("form");
const input = document.querySelector("input");
const list = document.querySelector("#notes");

// input.addEventListener("change", (e) => {
//   console.log("Nilai Berubah");
// });

input.addEventListener("input", (e) => {
  document.querySelector("h1").innerText = input.value;
  console.log("Nilai Berubah");
});

form.addEventListener("submit", function (e) {
  //mencegah untuk tidak berpindah halaman(behavier)=kebiasaan
  e.preventDefault();
  const noteValue = input.value;
  const newList = document.createElement("li");
  newList.innerText = noteValue;
  list.append(newList);
  //   console.log(newList);
  input.value = "";
});
