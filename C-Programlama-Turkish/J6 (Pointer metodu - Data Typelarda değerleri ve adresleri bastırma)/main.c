#include <stdio.h>
#include <stdlib.h>

int main()
{
   //pointer mant���
    //Farkl� data typelar i�in (char int float double) de�i�ken tan�mlay�p de�er
    //atamas� yap�n�z hem bu degerleri hemde bellekteki tuttuklar� adresi console a bast�r�n�z

    char karakter='C';
    int integerdegerim=1;
    float floatsayim=5.43;
    double doublesayim=23132132123123213,1;


    printf("Karakterim = %c, Karakterimin adresi =%d\n",karakter,&karakter);
    printf("Integer degerim = %d, Integerimin adresi =%d\n",integerdegerim,&integerdegerim);
    printf("Float degerim = %f, Floatimin adresi =%d\n",floatsayim,&floatsayim);
    printf("Double degerim = %lf, Doubleimin adresi =%d\n\n\n\n",doublesayim,&doublesayim);
}
