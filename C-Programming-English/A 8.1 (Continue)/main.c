#include <stdio.h>
#include <stdlib.h>

int main()
{
    int i ;

    for(i=0 ; i<10 ; i++)
    {
        if( i == 7)
        {
            continue ;  // 7 yi atla anlam�na geliyor. D�ng� devam eder ko�ul istenilen de�er atlanm�� olur.
        }

        printf("%d\n",i);
    }
}
