# Listeler

var1 = list("a" = 1:5 , "b" = c(3,"x","y") , "c" = FALSE )
str(var1) # a - b - c Gruplarının İceriğine Göre Bilgi Verir

names(var1) = c("FirstGroup" , "SecondGroup" , "ThirdGroup" ) # İsim Değişikliği

print(var1)

print(var1[1])
print(var1[3])
print(var1$SecondGroup) # İlk Grubu Çağırır 

var1[4] = "FourthGroup" # Yeni Grup Ekleme
print(var1)

var1[2] <- NULL # Silme
print(var1)
