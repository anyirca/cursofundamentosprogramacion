// alert('Hola archivo JavaScrit')

var nombre =  "Angie Rodriguez";
var edad = 29;
var estatura = 162;

var concatenar = nombre + " " + edad;

//document.write(nombre);
//document.write(edad);
//document.write(estatura);
// document.write(concatenar);

var datos = document.getElementById("datos");
/*
datos.innerHTML = `
    <h1>Soy datos <h/1>
    <h2>Mi nombres es: ${nombre}<h/2>
    <h3>Edad: ${edad}<h/3>
    <h3>Estatura: ${estatura}<h/3>
`;
*/
// ESTRUCTURAS DE CONTROL - CONDICIONALES
/*
if(estatura >=150)
{
    datos.innerHTML += '<h1> Eres una persona ALTA<h1>'
}
else
{
    datos.innerHTML += '<h1>Eres una persona CHAPARRA<h/1>'
}

for(var i=2019; i<=2023;i++)
{
    //Bloque de instrucciones
    datos.innerHTML += "<h2>Conteo= <h/2>" + i
}
*/
function MuestraDatos(nombre, edad, estatura)
{
    var misDatos = `
        <h1>DATOS<h/1>
        <h2>Mi nombres es: ${nombre}<h/2>
        <h3>Edad: ${edad} años<h/3>
        <h3>Estatura: ${estatura} cm<h/3> 
    `;

    return misDatos;
}

function imprimir(){
    var datos = document.getElementById("datos");
    datos.innerHTML = MuestraDatos("Oscar Jaimes", 28, 178)
}

imprimir();