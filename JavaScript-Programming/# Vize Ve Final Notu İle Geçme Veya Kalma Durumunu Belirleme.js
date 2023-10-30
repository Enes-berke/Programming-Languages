//4- 2 vize (40%) ve 1 final(60%) notuna göre hesaplanan ortalama için;

let vize1 = prompt("1. vize değerini giriniz");
let vize2 = prompt("2. vize değerini giriniz");
let final = prompt("Final değerini giriniz");

let ortalama = (((vize1 + vize2) / 2) * 0.4) + (final * 0.6);

document.write("ortalamanız: " + ortalama);


 //a- Eğer ortalama 50 ve üstündeyse geçti değilse kaldı yazsın.


 if (ortalama >= 50) {

    document.write("geçtiniz");

    } else {

    document.write("kaldınız");

    }


   // b- Geçmek için ortalama 50 bile olsa final notu en az 50 olmalıdır.


 if (ortalama >= 50 && final >= 50) {

    document.write("geçtiniz");

    } else {

    document.write("kaldınız");

    }


   //c- Finalden 70 alındığında ortalama 50' nin altında olsa bile dersten geçilsin.

if (ortalama >= 50 || final >= 70) {
    document.write("geçtiniz");
} else {
    document.write("kaldınız");
}
