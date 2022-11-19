const boton = document.getElementById('boton');
boton.onlick = function() {
    alert('¡Ouch! ¡Deja de pincharme!');
}*/

document.querySelector('input').onclick = function() {
    alert('¡Ouch! ¡Deja de pincharme!');
}

function multiplica(num1, num2) {
    let resultado = num1 * num2;
    return resultado;
}

multiplica(10, 5);

let helado = 'chocolate';
if (helado === 'chocolate') {
    //alert('¡Sí, amo el helado de chocolate!');
} else {
    alert('pero mi favorito es el de chocolate...');
}



let msg = 'mi texto ';
let msg2 = 'genial';
console.log(msg + msg2);


let miVariable = 10;
let saluda = false;
let miArreglo = [1, 'Bob', 'Steve', 10];
let miObjeto = document.querySelector('h1');

function prueba() {
    if (saluda != false) {
        console.log(msg);
    }
}
prueba();




/*
const showArray = () => [1, 2, 3]
const showObject = () => ({ name: 'juan' })
console.log(showArray())
console.log(showObject())

const button = document.createElement('button');
button.innerText = 'Click me'

const color ='white';
const fondo ='black'
const res = ` este estilo es ${color}`
console.log(res);

button.style=`background:${fondo}; color:${color};`
button.addEventListener('click', () => {
    alert('Hizo un click')
})
document.body.append(button);
*/




