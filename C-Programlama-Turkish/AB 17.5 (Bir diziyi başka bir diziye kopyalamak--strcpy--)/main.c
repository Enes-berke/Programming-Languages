#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
    char ilkdizimiz[] = "ENES BERKE";
    char ikincidizimiz [100];



    strcpy(ikincidizimiz,ilkdizimiz);  // yerleri �nemli ikincidizimiz = ilkdizimiz gibi d���n�lebilir

    printf("%s",ikincidizimiz);

    return 0;
}
