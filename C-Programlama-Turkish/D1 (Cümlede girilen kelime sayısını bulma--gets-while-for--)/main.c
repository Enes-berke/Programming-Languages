#include <stdio.h>
#include <stdlib.h>

int main()
{
    char cumle[200];
    int i = 0 , sayac=1;

    printf("Bir c�mle giriniz==>\n");
    gets(cumle);

    while(cumle[i])
    {
        if(cumle[i]== 32) // 32 dememizdeki ama� c�mledeki bo�luklar� say� kelime say�s�n� bulmak space=32 anlam�na gelir
        {
            sayac = sayac + 1;
        }
        i++;
    }

    printf("Cumlemizde %d kelime var!! ",sayac);

    return 0;
}
