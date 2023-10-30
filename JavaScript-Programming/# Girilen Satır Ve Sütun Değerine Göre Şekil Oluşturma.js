// # Girilen Satır Ve Sütun Değerine Göre Şekil Oluşturma

var x = prompt("Lütfen satır değeri giriniz:", "");
var y = prompt("Lütfen sütun değeri giriniz:", "");//sütun

   // i satır anlamına geliyor
   // j sütun anlamına geliyor



   
   var t = 2 * y ;
   var k = t - 1 ;
   var i,j;
            for(i=1;i<=x;i++)
            {
                if(i==1 || i==x)
                {
                    for(j=1;j<=y; j++)
                    {
                        
                        document.write("*");
                        
                    }
                    document.write("<br>");
                }

                
                
                else
                {
                    
                    for(j=1; j<=1; j++)
                    {
                        document.write("*")
                    }
                    
                    
                    for(j=2;j<k;j++)
                        
                    {
                        document.write("&nbsp;");
                        
                    }
                    for(j=k;j<=k; j++)
                    {

                    document.write("*");   
                    }
                        

                    
                    document.write("<br>");
                }


                
            }        
