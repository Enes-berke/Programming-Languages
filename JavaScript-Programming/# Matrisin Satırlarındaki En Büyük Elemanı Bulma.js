// # Matrisin Satırlarındaki En Büyük Elemanı Bulma

var i , k;
    var deneme = [  [5,7,3],
                    [15,8,20],
                    [42,32,12],
                    [12,4,9] ]  

                for(i=0 ; i<4 ; i++){

                    var max = deneme[i][0];


                    for(k=0 ; k<3 ; k++){


                        if(max<deneme[i][k]) 


                            max = deneme[i][k];
                        


                    }

                    document.write(max + "<br>")


                }