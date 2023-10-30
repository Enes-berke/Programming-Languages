// # Girilen Yıldız Değerine Göre Artı Şekli Oluşturma

var x = prompt("Lütfen bir yıldız değeri giriniz:", "");
x = parseInt(x);
var p = (x+1) / 2 ;
var i,j;

   for(i=1 ; i<=x ; i++)
   
   {
                if( i==p )
                {    
                    for(j=1 ; j<=x ; j++)
                    {
                     document.write("&nbsp;*") ;   
                    }
                     document.write("<br>");
                }
                    else  //i değeri p değeri dışında bir değer alırsa

            {

                     for(j=1 ; j<p ; j++)
                    {
                        document.write("&nbsp;&nbsp;&nbsp;");
                        
                    }


                    for(j=p ; j<=p ; j++)
                    {
                        
                        document.write("*");
                        
                    }

                    for(j=p+1 ; j<=x ; j++)
                    {
                        document.write("&nbsp;");
                        
                    }
                    document.write("<br>");

            }
                
                }
                
               