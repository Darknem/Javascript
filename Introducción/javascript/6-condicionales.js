//Condicional if

//Ejemplo 1

/*var edad1 = 10;
var edad2 = 12;

//Si pasa esto
if (edad1 > edad2) {
 //Ejecuta esto
    console.log("La edad uno es mayor que la edad dos");
}else{
    console.log("La edad uno es menor que la edad dos");
}*/

//Ejemplo 2

var edad = 19;
var nombre = "Nelson Mossa";

/*
Oparadores relacionales

Mayor: >
Menor: <
Mayor o igual: >=
Menor o igual: <=
Igual: ==
Distinto: !=
*/

if(edad>=18){
    console.log(nombre + " es mayor de edad");

    if (edad<=33) {
        console.log("Aún eres Millenial");
    }else if(edad>=70){
        console.log("Eres un anciano");
    }else{
        console.log("Ya no eres Millenial")
    }
}else{
    console.log(nombre + " es menor de edad");
}

/*
Operadores lógicos

AND (y): &&
OR (o): ||
NOT (negación): !
*/

var year = 2018;

//Negación
if(year != 2016){
    console.log("El año no es 2016, el año correcto es: " + year)
}

//AND
if (year >=2000 && year <=2020 && year !=2018) {
    console.log("Estamos en la era actual");
}else{
    console.log("Estamos en la era posmoderna");
}

//OR
if (year ==2008 || year==2018) {
    console.log("El año acaba en 8");
}
