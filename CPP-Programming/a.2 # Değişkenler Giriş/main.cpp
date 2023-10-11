#include <iostream>

using namespace std;

int main()
{
    int sayi ;
    float kesirlisayi ;
    double kesirlisayi2 ;
    char karakter;
    bool anahtar ; // True or false ==> (False = 0)  (True = 1)

    sayi = 12 ;
    kesirlisayi = 5.97 ;
    kesirlisayi2 = 756.45 ;
    karakter = 'E' ;
    anahtar = true ;

    cout << sayi << endl;
    cout << kesirlisayi << endl;
    cout << kesirlisayi2 << endl;
    cout << karakter << endl;
    cout << anahtar << endl;

    // cout << sayi << " " << kesirlisayi << kesirlisayi2 ;  = > 2. yol
    cout << sayi << " " << kesirlisayi << " " << kesirlisayi2 << endl ;

    cout << "Sayimiz ==>" << sayi << endl << "Kesirli Sayimiz ==>" << kesirlisayi << endl << "Kesirli Sayimiz 2 ==>  " << kesirlisayi2 ;



    return 0;
}
