#include <stdio.h>
#include <stdlib.h>

        void tekmiciftmi(int x)
        {
            if(x%2==0)
            {
                printf("Say� cift say�d�r.");
            }
            else
            {
                printf("Say� tek say�d�r.");
            }
        }

int main()

{
    int x;
    printf("L�tfen bir say� degeri giriniz==>\n");
    scanf("%d",&x);

    tekmiciftmi(x);

    return 0;
}
