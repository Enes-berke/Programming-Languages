#include <stdio.h>
#include <stdlib.h>

int main()
{
    int uzunluk  , sonuc;
    char tur;



    printf("Halinin turunu giriniz ==>\n");
    scanf("%c",&tur);

    printf("Halinin uzunluk degerini giriniz==>\n");
    scanf("%d",&uzunluk);


    if(tur == 't' )     // bir karakter yaz�laca�� zaman '' i�ine yazmay� unutma!!!!!!
    {
        sonuc = uzunluk * 18;
    }

    else if(tur == 's')
    {
        sonuc = uzunluk * 20;
    }

    else if(tur == 'p')
    {
        sonuc = uzunluk * 30;
    }

    else
    {
        printf("Gecersiz bir tur girdiniz!!");
    }


    printf("�denecek tutar==>%d",sonuc);


    return 0;
}
