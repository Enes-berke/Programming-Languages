#include <stdio.h>
#include <stdlib.h>
#include <time.h>

// random dizi olu�turma

#define uzunluk x

int main() {
    int x;
    printf("degergir==>\n");
    scanf("%d",&x);

    int i, dizi[uzunluk];

    // srand(time(NULL)); // Rastgele say� �retimi i�in seed de�eri atan�yor

    printf("Dizi elemanlari: ");
    for (i = 0; i < uzunluk; i++) {
        dizi[i] = rand() % 100; // Rastgele say�, 0 ile 99 aras�nda olacak �ekilde �retiliyor
        printf("%d ", dizi[i]);
    }
    printf("\n");

    return 0;
}
