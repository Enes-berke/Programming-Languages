# For Döngüsü

"""
for i in range(1, 6):
    print(i)


    liste = ["elma", "armut", "kiraz"]

for meyve in liste:
    print(meyve)


metin = "Merhaba!"

for harf in metin:
    print(harf)


# Girilen Maaşa %30 Zam yapılsın.

maas = [1500 , 2300 , 4600 , 7850] 

def yenimaas1(x) :
    print(x / 100 * 30 + x)

def yenimaas2(x) :
    print(x / 100 * 20 + x)    


for i in maas :
    yenimaas(i)    
    
"""

import numbers

maas = [1500 , 2300 , 4600 , 7850] 

def yenimaas1(x) :
    print(x / 100 * 40 + x)

def yenimaas2(x) :
    print(x / 100 * 30 + x)    

for i in maas :
    if i > 3000:
         yenimaas2(i)
    else :
         yenimaas1(i)     







