var numero = parseInt(prompt("Ingresa  un numero"));
var l = "abcdefghijklmnopqrstuvwxyz";

for(var x=0; x<numero; x++){
    var cadena = "";
    for (y=0; y<numero; y++){
        cadena = cadena + l [Math.floor(Math.random()*cadena.length)];
    }
    console.log(cadena);
}
