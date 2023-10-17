// # Dizinin En Büyük Ve En Küçük Elemanlarını Bulma

var deneme = [2,3,4,5,6,7,8,998,68,45,24,56,678]
        var max = deneme[0];
        var min = deneme[0];

        for (i=0 ; i<deneme.length ; i++){
            
            if(min>deneme[i]) 
                var min = deneme[i];

            if(max<deneme[i])
                max = deneme[i];


        }

        document.write(min+ "<br>");
        document.write(max);