#include <stdio.h>
#include <stdlib.h>

// 3 dk kadar �cret 0.25 tl
// 3 dk sonras� her dk i�in 0.08 tl tarife

int main()
{

    float sure , tutar;

    printf("Konustugunuz sureyi giriniz==>\n");
    scanf("%f",&sure);

    if(sure<=3)
    {
       tutar = 0.25 ;
    }

    else
    {
         tutar = (0.25) + (((sure-3)*0.08));
    }
        printf("Tarife tutariniz==>%f",tutar);





    return 0;
}
