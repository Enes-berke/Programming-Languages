#include <stdio.h>
#include <stdlib.h>

// girilen say�dan 1 e kadar yazd�rma while azaltarak yap



int main()
{
    int x;

    printf("Bir x degeri giriniz ==> \n");
    scanf("%d",&x);

    while(x>=0)
    {
        printf("==>%d\n",x);
        x -= 1 ;

    }




}


