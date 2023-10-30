// # Diziler İle İlgili Genel Bilgiler


//  BAKINIZZ


//==== https://www.sadikturan.com/javascript-temelleri/js-dizi-metotlari/1407

//           

//==== https://www.yusufsezer.com.tr/javascript-dizi-fonksiyonlari/#:~:text=Dizinin%20son%20eleman%C4%B1n%C4%B1%20kald%C4%B1rmak%20i%C3%A7in%20pop()%20fonksiyonu%20kullan%C4%B1l%C4%B1r.&text=pop%20fonksiyonu%20%C3%A7%C4%B1kar%C4%B1lan%20elaman%C4%B1n%20de%C4%9Ferini%20verir.

// https://www.w3schools.com/js/js_break.asp



//         Diziye Eleman Ekleme **************
// Javascript dizi üzerine bir eleman eklemek için push(), unshift(), splice() metotlarını kullanabiliriz.

// Push() Metodu
// Push() metodu dizinin sonuna bir eleman ekleyebiliriz.

// Örnek
// var cars = ['mazda','opel','toyota'];
// cars.push('bmw');  // mazda,opel,toyota,bmw
// push() metodu geriye dizi eleman sayısını döndürür.

// Örnek
// var cars = ['mazda','opel','toyota'];
// var elemansayisi = cars.push('bmw'); 
// console.log(elemansayisi);  // 4
// Unshift() Metodu
// Unshift() metodu ile dizinin başına bir eleman ekleyebiliriz.

// Örnek
// var cars = ['mazda','opel','toyota'];
// cars.unshift('bmw');  // bmw,mazda,opel,toyota
// Unshift() metodu geriye dizi eleman sayısını döndürür.

// Örnek
// var cars = ['mazda','opel','toyota'];
// var elemansayisi = cars.unshift('bmw'); 
// console.log(elemansayisi);  // 4

// -------------------------------------------------------------------------------------------------------------------------------------------------------

// Splice() Metodu
// splice() metodu ile dizinin istediğimiz konumuna eleman ekleme yapabiliriz.

// ** splice() metodunun ilk parametresi ekleme yapılacak olan konum, ikinci parametre ise kaç elemanın silinmesidir.

// ** Örneğimizde 1.indeks den itibaren hiç bir elemanı silme ve 'bmw', 'mercedes' elemanlarını ekle demiş oluyoruz.

// Örnek
// var cars = ['mazda','opel','toyota'];
// cars.splice(1, 0, 'bmw', 'mercedes'); // 'mazda','bmw', 'mercedes','opel','toyota'
// Örnek
// var cars = ['mazda','bmw', 'mercedes','opel','toyota'];
// var deleted = cars.splice(2, 2, 'volvo', 'audi'); 
// console.log(cars)     // mazda,bmw,volvo,audi,toyota 
// console.log(deleted ) // mercedes,opel
// ** 2.indeks den itibaren 2 elemanı siler ve 2 elemanı ekler.

// ** splice() metodu silinen elemanları geriye gönderir.

//-------------------------------------------------------------------------------------------------------------------------------------------------------

// Diziden Eleman Silme
// Javascript dizilerinden bir eleman silmek için pop(), shift() ve splice() metotlarını kullanabiliriz.

// Pop() Metodu
// Pop() metodu ile dizinin en son elemanını sileriz.

// Örnek
// var cars = ['mazda','opel','toyota'];
// cars.pop();  // mazda,opel
// pop() metodu silinen son elemanı döndürür.

// Örnek
// var cars = ['mazda','opel','toyota'];
// var result = cars.pop();  
// console.log(result)   //toyota
// Shift() Metodu
// shift() metodu ile dizinin son elemanını silebiliriz.

// Örnek
// var cars = ['mazda','opel','toyota'];
// cars.shift();  // opel,toyota
// shift() metodu silinen son elemanı döndürür.

// Örnek
// var cars = ['mazda','opel','toyota'];
// var result = cars.shift();  
// console.log(result)   // mazda

//-------------------------------------------------------------------------------------------------------------------------------------------------------

// Splice() Metodu
// Splice() metodunu veri eklemek için kullanabileceğimiz gibi eleman silmek için de kullanabiliriz.

// Splice() metoduna verdiğimiz ilk parametre hangi indeksden başlasın, ikinci parametre ise kaç eleman silinsin anlamına gelir.

// Dolayısıyla splice(0,1) dediğimizde 0.indeks den başka 1 elemanı sil demiş oluyoruz.

// Örnek
// var cars = ['mazda','opel','toyota'];
// cars.splice(0, 1);  // 'opel','toyota'
// Dizi Elemanını Güncelleme
// Javascript dizi içerisindeki her bir eleman 0' dan başlayan bir indeks numarasına sahiptir. Dolayısıyla güncellemek istediğimiz elemanın indeks numarasını kullanarak güncelleme işlemi yapabiliriz.

// Örnek
// var cars = ['mazda','opel','toyota'];
// cars[2] = 'bmw';  // 'mazda','opel','bmw'
// Peki olmayan bir indeks numarasını kullanırsak?

// Örnek
// var cars = ['mazda','opel','toyota','bmw'];
// cars[cars.length] = "mercedes"; // 'mazda','opel','toyota','bmw','mercedes'
// cars.length bize cars dizisinin eleman sayısı olan 4 bilgisini döndürür. 

// cars[cars.length] ise cars[4] 'e eşittir ve bu indeks de olan bir eleman olmadığından dolayı dizi üzerine bir eleman eklemiş oluruz.

// Javascript Dizisini String Veriye Çevirme
// Js array' i string bir veriye toString() metodu ile çevirebiliriz.

// Örnek
// var cars = ['mazda','opel','toyota'];
// var arabalar = cars.toString();   // mazda,opel,toyota
// ** Artık arabalar bir string veridir ve indeks numarası ile her bir araç bilgisine ulaşamayız.

// Js array bilgisini string veriye çevirebilmek için ayrıca join() metodunu da kullanabiliriz.

// join() metodunun toString() metodundan farkı her bir eleman arasına istediğimiz bir karakteri yerleştirebiliriz.

// Örnek
// var cars = ['mazda','opel','toyota'];
// var arabalar = cars.join("-");   // mazda-opel-toyota
// Dizi Birleştirme (Merge)
// Js array metotlarından concat() metodu ile birden fazla diziyi birleştirebiliriz.

// Örnek
// var cars1 = ['mazda','opel','toyota'];
// var cars2 = ['mercedes','bmw'];

// var cars = cars1.concat(cars2); // 'mazda','opel','toyota','mercedes','bmw'
// ** concat() metodu orjinal dizi üzerinden bir değişiklik yapmaz. Birleştirilen elemanları yeni bir dizi olarak geriye döndürür. (cars)

// ** Daha fazla diziyi birleştirmek istediğimizde concat() metodunu dizi1.concat(dizi2,dizi3,dizi4) şeklinde kullanabilirsiniz.

//-------------------------------------------------------------------------------------------------------------------------------------------------------

// Dizi Parçalama (Slicing)
// slice() metodu ile bir diziyi istediğimiz bir konumdan ayırarak yeni bir dizi oluşturabiliriz.

// Örnek
// var cars = ['mazda','opel','toyota','bmw'];
// var yenidizi = cars.slice(2);
// console.log(yenidizi);    // 'toyota','bmw'
// ** Diziyi 2.indeksden itibaren bölerek yeni bir dizi oluşturuyoruz. Orjinal dizi üzerinde bir güncelleme yapılmaz.

// slice() metoduna verdiğimiz ilk parametre ile başlangıç konumu, ikinci parametre olarak bitiş konumunu belirtiriz. (son eleman dahil olmaz.)

// Örnek
// var cars = ['mazda','opel','toyota','bmw'];
// var yenidizi = cars.slice(1,2);
// console.log(yenidizi);    // 'opel'
// Javascript Dizi Örnekleri
// 1- "Bmw,Mercedes,Opel,Mazda" elemanlarına sahip bir dizi oluşturun.

// var arr = ["Bmw","Merdeces","Opel","Mazda"];
// var arr2 = new Array("Bmw","Merdeces","Opel","Mazda")
// 2- Dizi kaç elemanlıdır ?

// console.log(arr.length)
// 3- Dizinin ilk ve son elemanı nedir ?

// console.log(arr[0])
// console.log(arr[3])
// console.log(arr[arr.length-1])
// 4- "Renault" değerini dizinin sonuna ekleyin.

// arr[4] = "Renault";
// arr[arr.length] = "Renault";
// arr[arr.length] = "Fiat";
// arr.push('Toyota');
// 5- "Toyota" değerini dizinin başına ekleyin.

// arr.unshift('Seat');
// 6- "Seat" değerini siliniz.

// arr.shift('Seat');
// 7- "Toyota" değerini siliniz.

// arr.pop('Toyota');
// 8- Dizi elemanlarını ters çevirin

// arr.reverse()
// 9- Dizi elemanlarını alfabetik olarak sıralayın.

// arr.sort();
// 10- [1,2,5,80] dizisini sıralayın.

// var numbers =[1,2,5,80,15];

// function compare(a,b){
//     if(a>b) return 1;
//     if(a==b) return 0;
//     if (a<b) return -1;
// }

// console.log(numbers.sort(compare));
// 11- "Opel" değeri dizinin bir elemanımıdır ?

// console.log(arr);
// console.log(arr.indexOf('Opel'));
// console.log(arr.includes('Opel'));
// 12- var str = "Chevrolet,Dacia"; ifadesini diziye çeviriniz.

// var str = "Chevrolet,Dacia";
// var arr2 = str.split(',');
// console.log(arr2)
// 13- Oluşturulan 2 dizinin elemanlarını bir başka dizi ile birleştirin.

// var arr3 = arr.concat(arr2);
// console.log(arr3);
// 14- Oluşturulan diziden son 2 elemanı siliniz.

// console.log(arr3.pop());
// console.log(arr3.pop());
// console.log(arr3.splice(6,2));
// console.log(arr3.slice(6,8));
// console.log(arr3);
// 15- Aşağıda verilen elemanları bir dizi içerisinde saklayınız.

// studentA : Yiğit Bilgi 2010
// StudentB : Sena Turan 1999
// studentC : Ahmet Turan 1998


// var studentA = ['Yiğit','Bilgi',2010];
// var studentB = ['Sena','Turan',1999];
// var studentC = ['Ahmet','Turan',1998];

// var students =[studentA,studentB,studentC];

// console.log(students[0]);
// console.log(students[0][0]);
// console.log(students[0][1]);
// console.log(students[0][2]);
// console.log(students[1][0]);
// console.log(students[1][1]);
// console.log(students[1][2]);
// console.log(students[2][0]);
// console.log(students[2][1]);
// console.log(students[2][2]);
// console.log(students)



 