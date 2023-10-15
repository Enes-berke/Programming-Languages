#Listeler - Liste Metodları

liste = ["ali","veli","isik"]

print(dir(liste))


#append & remove ==> ekleme ve silme

print(liste.append("berkcan"))
print(liste)


print(liste.remove("berkcan"))
print(liste)


# insert  ==> istenilen indexe ekleme

liste = ["ali","veli","isik"]


print(liste.insert(0,"ayse"))


liste = ["ali","veli","isik"]

liste[0] = "ayse"


liste.insert(0,"ayse")


liste[1] = "ali"


liste.insert(2,"mehmet")

print(liste)

liste.insert(5,"berk")

print(liste)

print(len(liste))


liste.insert(len(liste),"beren")

print(liste)


#pop ==> listeden eleman silmek

liste.pop(0)
print(liste)


liste.pop(4)
print(liste)


#count ==> seçilen elemanın listede kaç kez olduğunu belirtir.

liste = ["ali","veli","isik","ali","veli"]

print(liste.count("ali"))
print(liste.count("veli"))
print(liste.count("isik"))


#copy

liste_yedek = liste.copy()


#extend ==> Daha önce oluşturduğumu listeler ile birleştirme yapmak.

liste = ["ali","veli","isik","ali","veli"]
liste.extend(["a","b",10])
print(liste)


#index() ==> Seçilen elemanın listede kaçıncı indexte olduğunu belirtir.

print(liste.index("ali"))


#reverse() ==> Listeyi ters çevirir.

liste.reverse()
print(liste)


#sort() ==> Aynı tip elemanlardan oluşan listeyi küçükten büyüğe sıralar.

liste = [10,40,5,90]
liste.sort()
print(liste)


#clear ==> Listedeki tüm elemanları siler.

liste.clear()
liste