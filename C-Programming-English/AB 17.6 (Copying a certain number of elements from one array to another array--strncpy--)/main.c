#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
    char can[]="Benim adim Can BOZ";
    char canan[100];



    strncpy(canan,can,10);  // yerleri �nemli canan = can gibi d���n�lebilir
                            // n kadar karakter kopyalan�r

    printf("%s",canan);
    return 0;
}
