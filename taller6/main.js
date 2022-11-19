//alert('hola mundo')
let mensaje= 'Hola  mundo';

let  mensaje2 = ' Estoy aprendiendo java script'

const PI =3.1416 ;

let  saludo = false;
let colores = [ 'azul','verde', 'rojo'];
let miObjeto = {color:'azul', nombre:'silla'};

let num1= 5;
let num2 = 7;

//let resultado = sumar(num1);

//alert(resultado);
/*
if (!saludo) {
    alert(' Hola estudiantes unadistas');
} */

function sumar(n1=5, n2=2) {
    let num3 = 1;
    return n1 +n2;
}

function pedirUsuario(){
    let respuesta = prompt('Digite su nombre');
    document.getElementById('etiqueta1').innerHTML= 'Bienvenido '+ respuesta;
}

