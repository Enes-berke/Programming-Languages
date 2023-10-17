# While

"""
i = 10
while i >= 0:
    print(i)
    i -= 1
"""

deger = int(input(" Bir sayı girinizi=>"))

toplam = 0 
i = 1

while i <= deger :
    toplam += i 
    i+=1

print("1 den " , deger , "sayısına kadar sayıların toplamı ==>" , toplam)