#include <stdio.h>
#include <stdlib.h>

int main()
{
   //Kullan�c�dan 2 adet say� al�n�z b�y�kl�k k���kl�k durumuna g�re
   // ekrana bast�rma i�lemini yap�n�z

   int sayi1,sayi2;

   printf("Lutfen 2 adet sayi giriniz\n");
   scanf("%d%d",&sayi1,&sayi2);

   if(sayi1 == sayi2)
   {
       printf("Sonuc : %d = %d",sayi1,sayi2); // printf i�ine kullan�z�dan girilen de�eri yazmak istiyorsak kulland���m�z
                                              // de�i�keni de�il %d tarz� ifade kullanmam�z gerekir.!!
   }
   else if(sayi1 > sayi2)
   {
        printf("Sonuc : %d > %d",sayi1,sayi2);
   }
   else
   {
      printf("Sonuc : %d < %d",sayi1,sayi2);
   }


    return 0;
}
