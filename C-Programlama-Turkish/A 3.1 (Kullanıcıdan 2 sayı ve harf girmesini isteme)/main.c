#include <stdio.h>
#include <stdlib.h>

int main()
{
      //Kullan�c�dan 2 adet say� ve isminin ba� harfini al�n�z ilk sayim bu
    // 2. say�m bu ismimim ba� harfi bu �eklinde ekrana bast�r�n�z

    int sayi1 ;
    printf("Lutfen Bir Deger Giriniz => \n\n");
    scanf("%d",&sayi1);
    printf("�lk Sayim => %d \n\n\n", sayi1);

    /*char karakter ;
    printf("Lutfen Bir Harf Giriniz => \n");
    scanf("%c",&karakter);
    printf("Harfim => %c ", karakter);*/

     char karakter ;

    printf("\n Lutfen Bir Karakter Giriniz => \n");
    scanf(" %c",&karakter);

    printf(" Girdiginiz Karakter Degeri => %c", karakter);



    int sayi2 ;

    printf("\n Lutfen �kinci Bir Deger Giriniz => \n\n" );
    scanf("%d",&sayi2);
    printf("�lk Sayim => %d \n\n\n", sayi2);




    return 0;
}
