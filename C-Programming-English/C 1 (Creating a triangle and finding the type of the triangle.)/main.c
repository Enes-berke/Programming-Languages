#include <stdio.h>
#include <stdlib.h>

// Girilen de�erlere g�re ��genin olu�up olmad��� ve
// ��genin t�r�n� yazd�r

int main()
{
    int aci1 , aci2 , aci3;

    printf("1. Aci degerini giriniz==>\n");
    scanf("%d",&aci1);

    printf("2. Aci degerini giriniz==>\n");
    scanf("%d",&aci2);

    printf("3. Aci degerini giriniz==>\n");
    scanf("%d",&aci3);

    if(aci1+aci2+aci3==180)
    {
            if(aci1==aci2 && aci2==aci3)
            {
                printf("Ucgen eskenar ucgendir.");
            }
            else if(aci1!=aci2 && aci2!=aci3)
            {
                printf("Ucgen cesitkenar ucgendir");
            }
            else
            {
                printf("Ucgen ikizkenar ucgendir");
            }
    }
    else
    {
        printf("Girilen degerler ucgen olusturmamaktadir.");
    }
    return 0;
}
