//Bucle while

var year = 2018;

//Mientras
while (year !=1990) {
    //Ejecuta esto
    console.log("Estamos en el año: " + year)

    if (year ==2000) {
        break;
    }

    year--;
    
}


//Do While
var years = 30;

do{

    alert("Solo cuando sea diferente de 20");
    years--;

}while(years > 25);