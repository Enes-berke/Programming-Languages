#include <stdio.h>
#define MAX_SIZE 100

int main()
{
    //Kullan�c�ya ka� elemanl� bir say� dizisi olu�turmak istedi�ini sorun
    //Pointer kullanarak elemanlar� tek tek al�n ve console a bast�r�n

    int arr[100];
    int N;
    int *ptr;
    ptr=arr;




    printf("Dizi kac elemanli olsun\n");
    scanf("%d",&N);

    printf("Lutfen elemanlari giriniz\n");
    for(int i=0;i<N;i++)
    {
        scanf("%d",ptr+i);
        /*printf("Lutfen elemanlari giriniz\n");  ikisi de ayn� sonucu veriyor
        for(int i=0;i<N;i++)
        {
        scanf("%d",ptr);
        ptr++;
        }*/
    }
    ptr=arr; // ptr tekrardan arr dizisinin ilk eleman�na d�nd�rd�k
             // bu ifadeyi yazmadan d�ng� ba�las�yd� e�er yukar�ya ptr adresi artt�
             // a�a��daki d�ng�de adres artmaya devam edecek sonu�ta adres diziden daha da b�y�k hale gelecek
             // sonu� olarak adreste olmayan diziyi bast�rmaya �al��m�� olaca��z => hata verir ve adresi ��kt� verir

    printf("Degerlerim:\n");
    for(int i=0;i<N;i++)
    {
        printf("%d ",*ptr); // adresi bast�r�yoruz bu sebeple *ptr ifadesini kulland�k
        ptr++;
    }

    return 0;







}
