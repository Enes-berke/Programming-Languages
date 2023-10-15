// # Continue Kullanım

let text = "";
for (let i = 0; i < 10; i++) {
  if (i == 7 || i == 8  || i == 9  ) {
     continue; 
    }
   text += "The number is " + i + "<br>";
}
document.write(text);
