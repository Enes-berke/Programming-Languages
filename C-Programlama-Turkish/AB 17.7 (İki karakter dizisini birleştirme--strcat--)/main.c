#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
    char can[]="Benim adim ";
    char canan[]="Enes Berke";
    char bos[50];



    strcat(bos,can);

    strcat(bos,canan);   // yerleri �nemli canan = can gibi d���n�lebilir

    printf("%s",bos);
    return 0;
}
