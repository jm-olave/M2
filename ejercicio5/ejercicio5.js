
/**
 * 
 *  Pasos realizados acorde al ejercicio 5.3 
 * Paso1: acorde al punto 3, en la funcion cambiarLuz(); realizamos la logica descrita del punto 2 utilizando condicionales if
 * Paso2: acorde con el punto 4, creamos la funcion calcularDistancia() para obtener el valor en pixeles de la distancia al centro del semaforo
 *  y el mouse.
 * Paso 3: agregamos addEventListener() a el semaforo para que este este siempre verificando la posicion del mouse y validar las condiciones
 * de distancia descritas en el punto 4.
 * 
 */


// variables que representan a los elementos del DOM
var semaforo = document.getElementById("semaforo");
var luzVerde = document.getElementById("verde");
var luzAmarilla = document.getElementById("amarillo");
var luzRoja = document.getElementById("rojo");

// funciones para la logica

/**
 *  eventListener
 *  En esta seccion de codigo validamos el funcionamiento del punto 4, afectuando el llamado del evento y los 
 *  atributos clientX y clientY de event para obtener la posicion en tiempo real de el cursor
 */
semaforo.addEventListener('mouseover', function(event){
    var distancia = calcularDistancia(event.clientX, event.clientY);
    if(distancia > 200){
        cambiarLuz('verde');
    }
    else if(distancia >= 150 && distancia <= 200){
        luzAmarilla.style.backgroundColor = 'yellow';
        luzVerde.style.backgroundColor = 'black';
        luzRoja.style.backgroundColor = 'black';
    }
    else if(distancia < 150){
        luzAmarilla.style.backgroundColor = 'black';
        luzVerde.style.backgroundColor = 'black';
        luzRoja.style.backgroundColor = 'red';
    }
});



/*
    funcion encargada de prender y apagar las luces respectivamente (punto 3)
    
*/

function cambiarLuz(luzActiva){
    luzVerde.style.backgroundColor = 'black';
    luzAmarilla.style.backgroundColor = 'black'; // dejamos los valores de 
    luzRoja.style.backgroundColor = 'black';

    if(luzActiva == "verde"){ // paso 1
        luzVerde.style.backgroundColor = 'green';
        setTimeout(function(){
            cambiarLuz('amarilla'); // haciendo un llamado interno de la misma funcion (recursividad) 
                                    //ahorramos codigo e indicamos que se realize el proceso de validacion de cada if
    },3000);
    }
    if(luzActiva == "amarilla"){
        luzAmarilla.style.backgroundColor = 'yellow';
        setTimeout(function(){
           cambiarLuz('rojo');
        }, 1000);
    }
    if(luzActiva == "rojo"){
        luzRoja.style.backgroundColor = 'red';
        setTimeout(function(){
            cambiarLuz('verde');
        }, 3000);
    }
}

/**
 *  Esta funcion se encarga de calcular la distancia entre el mouse y el centro del semaforo
 *  parametro x = representa posicion en x de el mouse
 * parametro y = representa posicion en y de el mouse
 */
function calcularDistancia(x,y){
 var centroX = (semaforo.offsetLeft + semaforo.offsetWidth) / 2; 
 var centroY = (semaforo.offsetTop + semaforo.offsetHeight) /2;
return Math.sqrt(Math.pow(x-centroX, 2) + Math.pow(y-centroY,2)); // utilizamos la funcion de distancia entre dos puntos
// la clase Math nos permite traer funciones para calcular la raiz cuadrada y la potencia a la 2 de los valores.
}