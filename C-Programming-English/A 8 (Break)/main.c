#include <stdio.h>
#include <stdlib.h>

int main()
{
    int i ;

    for(i=0 ; i<10 ; i++)
    {
        if( i == 4)
        {
            break ; // ko�ul sa�land��� zaman d�ng� sonlan�r.
        }

        printf("%d\n",i);
    }
}
