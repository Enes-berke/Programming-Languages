# Girilen Tarihin Yüzyılını Bulma

girilenyil = int(input("1 yil degeri giriniz ==>"))

if (girilenyil % 100 == 0) :

    print(int(girilenyil / 100) , ". Yüzyil")

else :

    yuzyildegeri = girilenyil / 100

    yuzyil = int(yuzyildegeri) + 1 

    print(yuzyil , ". Yüzyil" )

