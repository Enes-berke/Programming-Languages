#include <stdio.h>
#include <stdlib.h>

int main()
{
  int x , i , satir ;
  printf("Bir x degeri giriniz ==> ");
  scanf("\n %d" , &x);

  satir = 0;
  i=0;


  while(i<=x)
  {
    printf("%7d",i*17); //"     %d" ==> "%5d" bu iki ifade birbirine e�ittri
                        //"%5d" demek �rnek 17 yaz�ld� bundan sonra 34 geliyor 32 2 karakter
                        //bu y�zden 3 bo�luk b�rak�p 34 yaz�yor. ==> 17   34 gibi oluyor.
    satir +=1;

    if(satir%10==0)
    {
        printf("\n");

    }
        i+=1;
  }

}
