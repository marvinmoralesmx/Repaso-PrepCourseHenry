
// Bucle for


for (let i = 0; i < 5 ; i++){
    suma = suma + i;
    console.log("variable de iteración: ", i);
}
console.log("variable suma: ", suma);



// Bucle While

while (suma < 3){
    suma = suma + 1;
        console.log(suma);
}


// swith

switch (suma) {
    case 1:
        
        break;
    case 2:
        
        break;
    default:
        break;
}


// Do while

var result = '';
var i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);
// Expected output: "12345"


// COntinue

i = 0;
n = 0;
while (i < 5) {
  i++;
  if (i == 3) {
    continue;
  }
  n += i;
}

// Break

function comprobarBreak(x) {
    var i = 0;
    while (i < 6) {
      if (i == 3) break;
      i++;
    }
    return i * x;
  }

  