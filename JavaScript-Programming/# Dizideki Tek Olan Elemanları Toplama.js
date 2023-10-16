// # Dizideki Tek Olan Elemanları Toplama

var numbers = [1,2,3,4,5,6,7,8,9,11,22,33,44,55,66,77,101,999987]
        var toplam = 0;

        for(i=0 ; i<numbers.length ; i++){
            
            if(numbers[i]%2==1)
            toplam = toplam + numbers[i];

        }
        document.write(toplam);