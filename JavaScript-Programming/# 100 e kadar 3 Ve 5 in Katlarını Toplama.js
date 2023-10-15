// # 100 e kadar 3 Ve 5 in Katlarını Toplama

var toplam=0;
for(var i=1;i<100;i++)
	{
		if(i%3==0 ||i%5==0)
			{
				toplam+=i;  // toplam = toplam  + i anlamına geliyor
				document.write(i+"<br>");
			}
	}
document.write("Toplam :"+toplam);
 


