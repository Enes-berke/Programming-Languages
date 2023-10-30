# Matrisler

matrix (data, nrow, ncol, byrow, dimnames)
# data = > matrisin tüm elemanlarını içeren vektör
# nrow = > satır
# ncol = > sütun

# sağdan sola doldurmak istiyorsak byrow true yazmamız gerekiyor


var1 = matrix(c(5:16) , nrow = 6 , ncol = 2 , byrow = TRUE)

print(var1)

satıradları = c("1. satır" , "2. satır" , "3. satır" , "4. satır" ,
            "5. satır" , "6. satır" )

sutunadları = c("1. sutun" , "2. sutun")

var1 = matrix(c(5:16) , nrow = 6 , ncol = 2 , byrow = TRUE 
              , dimnames = list(satıradları , sutunadları))

# dimnames ile isimlendirme işlemini yapıyoruz (satır , sutun)

print(var1)


# Arkadaşlar Ve Yas Tablosu

ornekmatris = matrix(c("Enes", 19 ,
                       "Furkan", 20 ,
                       "Alperen", 19 ,
                       "Muhammed",20 ,
                       "Yusuf" , 20) , nrow = 5 , ncol = 2 , byrow = TRUE , dimnames = list(satırname , sutunadları))

satırname = c("İsim - 1 =>" , "İsim - 2 =>" , "İsim - 3 =>" , "İsim - 4 =>" , "İsim - 5 =>")

sutunname = c("İsimler" , "Yaslar")

print(ornekmatris)

print(ornekmatris[3]) # Alperen
print(ornekmatris[10]) # 20
print(ornekmatris[3 , 2]) # 19
print(ornekmatris[6]) # 19

print(ornekmatris[1 , ]) # Enes , 19 // hepsinin çıktısını verir

print(ornekmatris[1:2:3:4 , 1]) # 1 - 2 -3 satırların 1.sutunlarının çıktısını verir.
                  # Enes Furkan Alperen




var4 = matrix(c(5:16) , nrow = 4 , ncol = 3 , byrow = TRUE)

print(var4)

# [,1] [,2] [,3]
# [1,]    5    6    7
# [2,]    8    9   10
# [3,]   11   12   13
# [4,]   14   15   16


dim(var4)=c(6,2) # satır = 6 sutun = 2 oldu boylece

print(var4)
# [,1] [,2]
# [1,]    5   12
# [2,]    8   15
# [3,]   11    7
# [4,]   14   10
# [5,]    6   13
# [6,]    9   16


cbind(var4 , c(17 , 17 , 17 , 17 , 17 , 17 )) # sutuna ekleme yapma


# [,1] [,2] [,3]
# [1,]    5   12   17
# [2,]    8   15   17
# [3,]   11    7   17
# [4,]   14   10   17
# [5,]    6   13   17
# [6,]    9   16   17


rbind(var4 , c(33 , 33 )) # Satıra ekleme yapma


# [,1] [,2]
# [1,]    5   12
# [2,]    8   15
# [3,]   11    7
# [4,]   14   10
# [5,]    6   13
# [6,]    9   16
# [7,]   33   33
