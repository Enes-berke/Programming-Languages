# İf - Elif - Else

""""
x = input("Bir x değeri giriniz==>") 
x = int(x)

if x >= 0 :
    print("Sayı pozitiftir.")
else :
    print("Sayı negatiftir.")   
"""


yas = int(input("Yaşınızı Giriniz==>"))

if yas > 0 and yas <= 12 :
    print("Çocuk")

    
elif yas > 13 and yas <= 19 :
    print("Genç")

elif yas > 20 and yas <= 59 :
    print("Yetişkin")


else :
    print("Yaşlı")
