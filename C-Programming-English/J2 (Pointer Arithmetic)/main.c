#include <stdio.h>
#define MAX_SIZE 100

int main()
{
    int arr[] = {10, 20, 30, 40, 50};
    int *x = arr;

  // x = arr; // arr = &arr[0] x = 10 haf�za de�eri e�itlendi x = 6534093408034
    //ptr++;

    printf("%d",x);
//6422016
//6422020
    return 0;
}
