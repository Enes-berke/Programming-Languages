# Liste Metodları

liste1 = [1 , 2 , 3 , 4 , 5]
liste2 = [12 , 23.33 , "enes"]
liste3 = ["merhaba" , 12 , liste1 , 23.99 , liste2]

liste1.append("Enes Berke") # Diziye eleman ekleme 
liste1.remove(2)            # Diziden eleman silme
print("Listemiz==>",liste1)


liste1.insert(0,"Merhaba")  # İstenen indexe  göre eleman ekleme 
print("Listemiz==>",liste1)


liste2.insert( 3,"Merhaba")  
print("Listemiz==>",liste2)


liste1.pop(0)               # Listeden eleman silme 
print("Listemiz==>",liste1)


liste4 = [1,1,1,1,1,2,2,2,2,2,4,5,6,7,7]
print("Listede ne kadar var ==>",liste4.count(1))  # Listemizdeki elemanlardan kaç tane olduğunu bulmamıza yarayan komut


listeyedek = liste4.copy    # Listeyi kopyalamak için kullanılan komut


liste4.extend(["a","b","c"]) # Listede kalıcı değişiklikler yaparız. Eleman ekleme komutu
print("Liste4 ==> " , liste4)


liste4.index("a")           # a elemanının kaçıncı indexte olduğunu gösteren komut


liste4.reverse()            # Listenin elemanlarını terse çevirir


liste = [12,23,5,4,56,87,8,7]
liste.sort()                # Listeyi küçükten büyüğe doğru sıralar


liste.clear()               # Listeyi temizleyen komut


liste = [1,1,2,3,4,5,1,2,1]
liste.count(1)              #Elemanın kaç kez tekrarlandığının gösterir.

