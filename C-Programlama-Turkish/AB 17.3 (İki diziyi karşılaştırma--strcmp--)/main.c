#include <stdio.h>
#include <stdlib.h>
#include <string.h>

/*
        int strcmp(char *dizin1, char *dizin2); Bu fonksiyon dizin1 ile dizin 2 yi kar��la�t�r�r.
        E�er ikisi e�itse strcmp() fonksiyonu 0 de�erini al�r;
        dizin1, dizin2 den b�y�kse pozitif bir de�er; k���kse negatif bir de�er al�r.

*/



int main()
{
    int sonuc;
    char can[15]="abcdef";
    char canan[15]="ABCDEF";

    sonuc=strcmp(can,canan);



    if(sonuc<0)
    {
        printf("Can Canan dan daha kucuktur");
    }
    else if(sonuc >0)
    {
        printf("Can Canan dan daha buyuktur");
    }
    else
    {
        printf("Ikiside birbirine esittir");
    }

   return(0);
}
