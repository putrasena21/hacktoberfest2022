/*

Perhatikan contoh fungsi dibawah, fungsi tersebut akan menghasilkan
gambar dengan pola berikut :

*
* *
* * *
* * * *
* * * * *

sekarang kamu diminta untuk membuat beberapa pola.
 
*/

function segitiga1(panjang) {
    let hasil = '';
    for (let i = 0; i < panjang; i++) {
        for (let j = 0; j <= i; j++) {
            hasil += "* ";
        }
        hasil += "\n";
    }
    return hasil;
}

console.log(segitiga1(5));


/*

Output yang diinginkan :


* * * * *
* * * *
* * *
* *
*

 
*/

function segitiga2(panjang) {
  let hasil = '';
    for (let i = 0; i < panjang; i++) {
        for (let j = i; j < panjang; j++) {
            hasil += "* ";
        }
        hasil += "\n";
      }
    return hasil;
}

console.log(segitiga2(5));


/*

Output yang diinginkan :


* * * * *
  * * * *
    * * *
      * *
        *

 
*/

function segitiga3(panjang) {
  let hasil = ""
  for (let i = 0; i <= panjang; i++) {
    for (let j = 0; j < i; j++) {
      hasil += "  "
    }
    for(let k = panjang-1; k >= i; k--){
      hasil += "* ";
    }
    hasil += "\n";
  }
  return hasil
}

console.log(segitiga3(5));


/*

Output yang diinginkan :


        *
      * *
    * * *
  * * * *
* * * * *

 
*/

function segitiga4(panjang) {
  let hasil = '';
    for (let i = 0; i <= panjang; i++) {
        for (let j = 0; j < panjang - i; j++) {
            hasil += "  ";
        }
        for(let k = 0; k < i; k++){
          hasil += " *";
        }
        hasil += "\n";
    }
    return hasil;
}

console.log(segitiga4(5));