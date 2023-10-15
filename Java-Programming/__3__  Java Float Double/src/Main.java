public class Main {
    public static void main(String[] args){
        // Double : 64 bit - 8 byte
        // Float : 32 bit - 4 byte

        // Otomatik Dönüştürme :  int --> float ---> double

        int a = 22 / 7 ;
        float b = (float) (22d / 7d);
        double c = 22f / 7f;

        System.out.println("a:" + a );
        System.out.println("b:" + b );
        System.out.println("c:" + c );

        /*
        a:3
        b:3.142857
        c:3.142857074737549
        */

        // double 64 bitlik yer kapladığı için sonuçlar daha doğru oluyor

        int i = 2;          // 2
        float j = i;        // 2.0
        System.out.println("j:" + j);


        double sayi1 = 70.25 ;
        double sayi2 = 60d ;
        double sayi3 = 80.2 ;

        float k = 70.25f ;
        float l = 60f ;
        float m = 80.2f ;

        System.out.println("Ortalama :" + (sayi1 + sayi2 + sayi3)/3) ;
        System.out.println("Ortalama2 :" + (k + l + m)/3) ;

    }
}