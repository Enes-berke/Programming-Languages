#include <stdio.h>
#include <stdlib.h>
// e�kenar ��genin alan�

int main()
{
    float a ;
    float alan;
    float kok;
    printf("Eskenar ucgenin bir kenar�n� giriniz==>");
    scanf("%f",&a);

    kok = sqrt(3);

    alan = (a * a * kok ) / 4;

    printf("%f",alan);
    return 0;
}
