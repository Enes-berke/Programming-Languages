#include <stdio.h>
#include <stdlib.h>

        void tekmiciftmi(int x)
        {
            if(x%2==0)
            {
                printf("Sayicift sayidir.");
            }
            else
            {
                printf("Sayitek sayidir.");
            }
        }

int main()

{
    int x;
    printf("Litfen bir sayidegeri giriniz==>\n");
    scanf("%d",&x);

    tekmiciftmi(x);

    return 0;
}
