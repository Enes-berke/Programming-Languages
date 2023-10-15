# Faktörler

var1 = factor( c("true" , "false" , "true" , "false" ) )
print(var1)

var3 = factor( c("true" , "false" , "true" , "sure" ) )
print(var3)

var4 = factor( c("true" , "false" , "true" , "sure") , levels = c("black" , "yellow") )
print(var4)

var5 = factor( c("true" , "false" , "true" , "sure") , levels = c("true" , "false") )
print(var5)

class(var1)
levels(var1)
str(var1)

var1[3] # 3. elemanı seçmek

var1[c(1,3)] # 1 - 3 elemana erişmek

var1[c("true" , "false" , "true")]

var1 = "false"

# gl fonksiyonu

# gl(n , k , labels = )  n => kaç adet seviye olduğu k => bu seviyelerin kaç kez tekrar edeceği
# labels => hangi değerlerin kaç kez tekrar edeceği


var2 = gl(2 , 5 , labels = c("red" , "blue" , "yellow")) # ilk başta 2 dedik fakat 3 seviye yazdık. 
# ilk 2 seviyeyi alır    
print(var2)

# red  red  red  red  red  blue blue blue blue blue
# Levels: red blue yellow





