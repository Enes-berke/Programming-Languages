// # Girilen 3 Değer Arasında En Büyük Hangisi Olduğunu Bulma

var x = prompt("x değeri giriniz");
var y = prompt("y değeri giriniz");
var z = prompt("z değeri giriniz");



if (x > y && x > z) {

   document.write("x en büyük");

   } else if (y > x && y > z) {

   document.write("y en büyük");

   } else if (z > x && z > y) {

   document.write("z en büyük");

   } else {

   document.write("sayılar eşit");

   }
