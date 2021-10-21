/*var x = prompt("Ingresa un numero")
var cadena2 = palabra(x);
console.log(cadena2)
function palabra (x){
    let cadenas = ["Uno ", "Dos ","Tres ","Cuatro ","Cinco ","Seis ","Siete ","Ocho ","Nueve ","Cero "]
    let numeros  = ["1","2","3","4","5","6","7","8","9","0"]
    let cadena = "";
    let ver;
    for (let i = x.length; i < numeros.length; i++ ){
        if(x == numeros[i]){
            for(let j = 0; j < cadenas.length; j++){
                if (x[i] == cadenas[j]){
                    ver = false;
                }
            }
            if(ver == true){
                cadena += cadenas[j];
            }else{
                cadena += "a";
            }
        } 
    }
    return cadena;
}*/
palabra()

function palabra(){
    var numero = prompt("Ingresa el numero");
    var nueva = [];
    switch(numero){
        case "0" :
            var r = "cero";
            nueva.push(r);
            break;
        case "1" :
             var m = "Uno";
             nueva.push(m);
             break;
        case "3" :
            var n = "tres";
            nueva.push(n);
            break;
         case "4" :
            var o = "cuatro";
            nueva.push(o);
            break;
        case "5" :
            var p = "sinco";
            nueva.push(p);
            break;
        case "6" :
            var q = "seis";
            nueva.push(q);
            break;
        case "7" :
            var s = "siete";
            nueva.push(s);
            break;
        case "8" :
            var t = "ocho";
            nueva.push(t);
            break;
        case "9" :
            var b = "nueve";
            nueva.push(b);
            break;
        case "10" :
            var c = "diez";
            nueva.push(c);
            break;
    }
console.log(nueva);
}
