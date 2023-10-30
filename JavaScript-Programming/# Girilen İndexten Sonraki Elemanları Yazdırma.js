// # Girilen İndexten Sonraki Elemanları Yazdırma

var a = [1,2,3,4,5,6,7,8,9,10];
        var i = 9;
        var n = prompt("bir n değeri giriniz=");

        if(i<=9){
            for (i = 9 ; i>=n ; i--){

             document.write(a[i]);
             document.write("<br>");

            }
        }
        else{}