// # 10 Elemanlı Bir Dizide Ortalamadan Büyük Olan Elemanları Yazdır

var a = [4,8,3,1,18,21,20,5,17,9];
var i, toplam, ort;
toplam = 0 ;


for(i = 0 ; i <10 ; i++){

    toplam +=  a[i] ;

    ort = toplam / 10 ;
}


document.write(ort );
document.write("<br>");


for(i=0 ; i<10 ; i++){

    
        if (ort<a[i])
{

document.write(a[i]);
document.write("<br>");
}

                      }