#include <stdio.h>
#include <stdlib.h>
 // saat dakika saniye hesab�

int main()
{
    int dakika , saniye , saat ;
    int sure ;
     printf("Bir saniye degeri giriniz==>");
     scanf("%d",&sure);

     saat = sure / 3600 ;
     dakika = (sure / 60) - (saat * 60) ; // 150 dk i�in sure / 60 150 ��kar
                                          //150 - (150 dk 2 saattir) 2 * 60 deriz yani ==150 - 120 = 30 dk kal�r
     saniye =  sure - ((saat*60*60)+(dakika*60));

    printf("s�re %d saat ",saat);

    printf(" %d dakika",dakika);

    printf(" %d saniyedir!! ",saniye);



    return 0;
}
