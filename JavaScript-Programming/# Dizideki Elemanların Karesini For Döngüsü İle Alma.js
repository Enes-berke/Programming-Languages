// # Dizideki Elemanların Karesini For Döngüsü İle Alma

var deneme = [2,3,4,5,6,7,8,998,68,45,24,56,678]

    var i , x ;

    for (i=0 ; i< deneme.length ; i++){

        x = deneme[i] * deneme[i]
        document.write((i+1) + ". elemanın karesi = " + x + "<br>")
    }