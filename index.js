// function myFunction(a, b) {
//     // if(a.includes(b)) {
//     //     return b + a
//     // } else {
//     //     return a + b
//     // }

//     return a.includes(b) ? b + a : a + b
// }

// console.log(
//     myFunction("lips", "s")
// )

// function myFunction(num) {
//     return num % 2 === 0
// }
// console.log(
//     myFunction(10)
// )

// function myFunction(a) {
//     return typeof a
// }
// console.log(
//     myFunction(['array'])
// )

// Tulis fungsi yang menggunakan string (a) dan angka (n) sebagai argumen. Kembalikan karakter ke-n dari 'a'.
// function myFunction(a, n) {
//     return a[n-1]
// }
// console.log(
//     myFunction("abcdefgf", 2)
// )

// Write a function that takes a string (a) as argument. Remove the first 3 characters of a. Return the result
// function myFunction(a) {
//     return a.slice(3)
// }
// console.log(
//     myFunction("12345")
// )

// Tulis fungsi yang menggunakan string sebagai argumen. String berisi substring 'adalah'. Kembalikan indeks 'adalah'.

// function myFunction(a) {
//     return a.indexOf("is")
// }

// console.log(
//     myFunction("ateis")
// )

// // Tulislah fungsi yang menggunakan dua bilangan (a dan b) sebagai argumen. Kembalikan b persen dari a

// function myFunction(a, b) {
//   return (b/100) * a
// }

// console.log(
//     myFunction(100, 50)
// )

// // Tulis fungsi yang menggunakan dua string (a dan b) sebagai argumen. Mengembalikan berapa kali a muncul di b.
// function myFunction(a, b) {

//   return b.split(a).length -1
// }
// console.log(
//     myFunction('m', 'how many times does the character occur in this sentence?')
// );

// // Tulislah fungsi yang menggunakan angka (a) sebagai argumen. Jika a adalah bilangan bulat (tidak memiliki tempat desimal), hasilnya benar. Jika tidak, kembalikan salah.
// function myFunction(a) {
//   return Number.isInteger(a)
// }
// console.log(
//     myFunction(5.1)
// )

// // Tulislah fungsi yang menggunakan dua bilangan (a dan b) sebagai argumen. Jika a lebih kecil dari b, bagilah a dengan b. Jika tidak, kalikan kedua angka tersebut. Kembalikan nilai yang dihasilkan
// function myFunction(a, b) {
// //   if(a < b) {
// //     return a / b
// //   } else {
// //     return a * b
// //   }

// return a < b ? a / b : a * b
// }

// console.log(myFunction(8, 20));

// // Tulislah fungsi yang menggunakan angka (a) sebagai argumen. Pisahkan a menjadi masing-masing digit dan kembalikan dalam array. Petunjuk: Anda mungkin ingin mengubah jenis nomor untuk pemisahannya
// function myFunction(a) {
//     return a.toString().split("").map((item) => Number(item))
// }
// console.log(
//     myFunction(193278)
// )

// // Tulis fungsi yang menggunakan array (a) dan nilai (n) sebagai argumen. Kembalikan elemen ke-n dari 'a'
// function myFunction(a, n) {
//   return a[n - 1]
// }

// console.log(
//     myFunction([1,2,3,4,5],3)
// );

// // Tulis fungsi yang menggunakan array (a) sebagai argumen. Hapus 3 elemen pertama 'a'. Kembalikan hasilnya
// function myFunction(a) {
//   return a.slice(3)
// }

// console.log(
//     myFunction([1,2,3,4])
// );

// // Tulis fungsi yang menggunakan array (a) sebagai argumen. Ekstrak 3 elemen terakhir 'a'. Kembalikan array yang dihasilkan
// function myFunction(a) {
//   return a.slice(-3)
// }

// console.log(
//         myFunction([1,2,3,4])
//     );

// // Tulis fungsi yang menggunakan array (a) sebagai argumen. Ekstrak 3 elemen pertama dari a. Kembalikan array yang dihasilkan
// function myFunction(a) {
//   return a.slice(0,3)
// }

// console.log(
//         myFunction([1,2,3,4])
//     );

// // Tulis fungsi yang menggunakan array (a) dan angka (n) sebagai argumen. Ini harus mengembalikan n elemen terakhir dari a.
// function myFunction(a, n) {
//   if (n >= a.length) {
//     return a;
//   } else {
//     return a.slice(a.length - n);
//   }
// }

// console.log(myFunction([1, 2, 3, 4, 5], 2));
