// Press Shift twice to open the Search Everywhere dialog and type `show whitespaces`,
// then press Enter. You can now see whitespace characters in your code.
public class Main {
    public static void main(String[] args) {
        /*
        + ---> Toplama Operatörü
        - ---> Çıkarma Operatörü
        / ---> Bölme Operatörü
        * ---> Çarpma Operatörü
        % ---> Kalan Operatörü

        */

        System.out.println("İslem 1 ==> " + (3 + 4.2));
        System.out.println("İslem 2 ==> " + (3 - 5f)); // islem float türünden döner
        System.out.println("İslem 3 ==> " + (10 / 4.0));
        System.out.println("İslem 4 ==> " + (3 * 4.5));
        System.out.println("İslem 5 ==> " + (10 % 4));
        System.out.println("İslem 6 ==> " + (10d % 4)); // 10d ile işlemi double olarak ele almış oluruz.
        System.out.println("İslem 7 ==> " + ((3f / 4) + (4 * 5)));

        int x = 10 ;
        x += 5 ;   // x+= 5 ifadesi === x = x + 5 anlamina gelmektedir
        System.out.println("x += 5 ifadesi => " + x); // x = 10 + 5 ===> 15
        // a++ ifadesi === a = a + 1 === a+=1 anlamlarine gelmektedir

        // NOT !!

        int y = 10 ;
        System.out.println("y++ ifadesi ==> " + (y++)); // güncellenmeden y degeri çikti olarak verilir ==> y = 10
        System.out.println("++y ifadesi ==> " + (++y)); // güncellenmiş deger ekrana çıktı olarak verilir ==> y = 11

    }
}