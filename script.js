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
