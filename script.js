//topic satu Apa itu Dom
// ini berupa file gambar saja dokumentasinya

// //Topic tiga Melihat Isi Document Object Model

//melihat isi dari document html
// console.log(document);

//melihat isi dari semua document dengan indeks ke 11
// console.log(document.all[11]);

// //mengubah cat menjadi bird
// console.log((document.all[11].innerText = "Bird"));

//melihat isi document indeks ke 10 dengan melihat innerTextnya
// console.log(document.all[10].innerText);

//Topic Tiga Mendapatkan Element Html Berdasarkan Id
// //seleksi elemen apa yg diubah berdasarkan id
// document.getElementById("banner");
// //melihat isi object apa saja yg ada dalam id banner ini
// const banner = document.getElementById("banner");
// console.dir(banner);
// //melihat isi object apa saja yg ada dalam id toc ini
// const toc = document.getElementById("toc");
// console.dir(toc);

//Topic Empat Mendapatkan Element Html Berdasarkan Tag Dan Class

//berdasarkan tag elemen
// document.getElementsByTagName("img");
// document.getElementsByTagName("img"[0]);

// const allImages = document.getElementsByTagName("img");
// console.dir(allImages[1]);

// const allImages = document.getElementsByTagName("img");

// for (let img of allImages) {
//   // console.log(img.src);
//   img.src =
//     "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1920px-Cat_August_2010-4.jpg";
// }

//berdasarkan class

// const squareImages = document.getElementsByClassName("square");
// //ini termasuk HTML COLLECTION
// for (let img of squareImages) {
//   img.src =
//     "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1920px-Cat_August_2010-4.jpg";
// }

//topic Lima Lebih Mudah Memilih Element Dengan Menggunakan Queryselector
// document.querySelector("p");
// document.querySelector("#banner");
// document.querySelector(".square");
// document.querySelectorAll("p");
// document.querySelectorAll("p a");
// document.querySelector("input[type='checkbox']");
// const links = document.querySelectorAll("a");

// for (let link of links) {
//   console.log(link.href);
//   link.style.color = "rgb(0, 108, 134)";
//   link.style.textDecorationColor = "magenta";
//   link.style.textDecorationStyle = "wavy";
// }
