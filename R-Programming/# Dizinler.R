# Dizinler

var1 = c(1 , 2 , 3)
var2 = c(4 , 5 , 6)
var3 = array(c(var1 , var2) , dim = c(1 , 2 , 4 )) # 1 satır - 2 sutun - 4 matrix olsun
print(var3)

namesCol = c ("1. SUTUN" , "2. SUTUN")
namesRow = c ("1. SATIR" , "2. SATIR")
namesMatrix = c ("MTRX1" , "MTRX2" , "MTRX3" , "MTRX4" , "MTRX5")

var4 = array( c(var1 , var2) , dim = c(2 , 2 , 5 ) , dimnames = list(namesRow ,namesCol , namesMatrix))

print(var4)

var5 = var4[ , 2 , 4 ] + var4[ , 2 , 5] 
print(var5)


# , , MTRX1
# 
#                 1. SUTUN 2. SUTUN
# 1. SATIR        1        3
# 2. SATIR        2        4
# 
# , , MTRX2
# 
#                 1. SUTUN 2. SUTUN
# 1. SATIR        5        1
# 2. SATIR        6        2
# 
# , , MTRX3
# 
#                 1. SUTUN 2. SUTUN
# 1. SATIR        3        5
# 2. SATIR        4        6
# 
# , , MTRX4
# 
#                 1. SUTUN 2. SUTUN
# 1. SATIR        1        3
# 2. SATIR        2        4
# 
# , , MTRX5
# 
#                 1. SUTUN 2. SUTUN
# 1. SATIR        5        1
# 2. SATIR        6        2