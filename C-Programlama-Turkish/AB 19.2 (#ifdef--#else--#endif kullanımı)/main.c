#include <stdio.h>
#include <stdlib.h>
#define PI 3.14
#define VARMI

   /*#ifdef PII
    //successful code
    #else
    //else code
    #endif

    #ifdef PI
      printf("C harika gidiyor");
     #else
      printf("C muthis gidiyor");
   #endif*/


int main()
{
   int sayi;
   #ifdef VARMIIIIII
      sayi=2;
     #else
      printf("Lutfen bir deger giriniz\n");
      scanf("%d",&sayi);
   #endif

   printf("Sayi degerim %d",sayi);




    return 0;
}


// ifdef dedi�imiz k�sm�n �al��mas� yukar� k�s�mda define ile tan�mlan�p tan�mlanmamas�na ba�l�
// define ile tan�mlad���m�z k�s�m �al���r
// tan�ml� olmayan k�s�mlar �al��maz
