# String Metdoları - strip()

# İstenilen karakteri metinden siler.

# Removes the desired character from the text.

gel_yaz_1 = " gelecegi_yazanlar "
print(gel_yaz_1.strip())

gel_yaz_2 = "*gelecegi_yazanlar*"
print(gel_yaz_2.strip("*"))

gel_yaz_3 = "lgelecegi_yazanlarl"
print(gel_yaz_3.strip("l"))