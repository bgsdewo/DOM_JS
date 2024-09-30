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

//topic Enam Memahami Innerthtml, Innertext Dan Textcontent

//case satu
// const heading = document.querySelector("h1");
// console.dir(heading);
// console.log(heading.innerText); //ini sama semua
// console.log(heading.textContent); //ini sama semua
// console.log(heading.innerHTML); //ini sama semua

// //case dua
// const paragraph = document.querySelector("p");
// console.log(paragraph.innerText);
// console.log(paragraph.textContent);
// console.log(paragraph.innerHTML);

// //Case tiga
// const links = document.querySelectorAll("p a");

// for (let link of links) {
//   link.innerText = "Saya adalah sebuah link!";
// }

//topic tujuh Mendapatkan Attribute Yang Dimiliki Element Html
// const banner = document.querySelector("#banner");
// console.log(banner.alt);
// banner.alt = "Gambar Kucing";
// console.log(banner.alt);
// //cara menambahkan atribut kelas pada gambar diatas
// banner.setAttribute("class", "isian-class");
// console.log(banner);
// //cara mendapatkan atribute apa saja dalam sebuah elemen html
// console.log(banner.getAttribute("class"));
