#include <stdio.h>
#include <stdlib.h>

// FONK YARDIMI �LE FAKT BULMA

        void fakt(int x)
        {
            int i , sonuc = 1 ;

            for(i=1 ; i<=x ; i++)
            {
                sonuc = sonuc * i ;
            }
            printf("Sayinin fakt�riyeli ==> %d",sonuc);
        }

int main()
{
    int x;
    printf("Bir x degeri giriniz==>\n");
    scanf("%d",&x);

    fakt(x);

    return 0;
}
