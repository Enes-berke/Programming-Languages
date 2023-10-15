# Liste Oluşturma - Elemanlara Erişme - Elemanları Değiştirme 

liste1 = [1 , 2 , 3 , 4 , 5]

liste2 = [12 , 23.33 , "enes"]

liste3 = ["merhaba" , 12 , liste1 , 23.99 , liste2]

print("Listelerimiz==>",liste1)
print("Listelerimiz==>",liste2)
print("Listelerimiz==>",liste3)
print("Listelerimiz==>",liste3[4][2])  
print("Listelerimiz==>",liste3[1:4])  
print("Listelerimiz==>",liste3[0:2])  


liste3[0] = "Enes Berke"
print("Listelerimiz==>",liste3[0])  


liste2[0:2] = ["Enes" , "Karaoğlan"]
print("Listelerimiz==>",liste2[0:2])  


liste4 = liste1 + ["Bursa"]
print("Listelerimiz==>",liste4)  


del liste4[0:2]
print("Listelerimiz==>",liste4)  






