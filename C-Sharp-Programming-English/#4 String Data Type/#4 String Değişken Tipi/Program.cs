
// String Tipi 

String NameLastName = "Enes Berke Karaoğlan";
Console.WriteLine(NameLastName);

String buyukKarakter = NameLastName.ToUpper(); // Tüm harfler büyük şekilde yazılır.
Console.WriteLine(buyukKarakter);

String kucukKarakter = NameLastName.ToLower(); // Tüm harfler küçük şekilde yazılır.
Console.WriteLine(kucukKarakter);

String BelirliBirbolum = NameLastName.Substring(3, 7); // 3. karakterden vaşla ve 7 karakter al anlamına geliyor.
Console.WriteLine(BelirliBirbolum);