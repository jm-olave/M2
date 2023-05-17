let miNombre;
var edad;
let estudio;
let puntuacion;
let valorFinal = cuadrado(8); 
function cuadrado(numero){
    let final;
    final = numero*numero;
    return final;
}
miNombre = "angelica"; // string
edad = 18; // number
estudio = true; //boolean
puntuacion = 19; //float
//undefined
//null
function suma(n, m){
    var resultado = n + m;
    return resultado; 
}
var valor;
valor = suma(4, 6);
// console.log(valor);

// condicionales
let condicion = edad!=puntuacion;
if(edad!=puntuacion){
    console.log("probando if");
    console.log("valor de edad:" + edad);
}
else if(!estudio){
    console.log("probando else");
}

// ciclos
// while
let x = 0;
while(x<5){
   
    console.log("codigo del while" + x);
    x++;
}

// for
for(var i = 0; i<5 ; i++){
    console.log("codigo del for" + i);
}


let frutas = ["mango","fresa","durazno"]
for(var i = 0; i<frutas.length ; i++){
    console.log("frutas:" + frutas[i]);
}



function set_fondo(){
    let docBody = document.getElementsByTagName("body");
    docBody[0].style.background = "rgb(255,0,0)";
}
function set_h3(){
    let h3 = document.getElementById("title-h3");
    h3.style.color = "rgb(255,0,0)";
}
function card_change(){
    console.log("entra a cards")
    let cards = document.getElementsByClassName("card");
    cards[0]
    cards[1]
    cards[2]

}
card_change();

function getFormvalue()
{
  var x=document.getElementById("form1");
  for (var i=0;i<x.length;i++)
  {
    console.log(x.elements[i].value);
   if (x.elements[i].value!='Submit')
    {  
      
     }  
    }    
}
function change_h1(){
    var titulo = document.getElementById("titulo_gatos");
    console.log("elemento : " + titulo);
    titulo.innerHTML = "Ya no son gatos";
    
}
function change2_h1(){
    var titulo = document.getElementById("titulo_gatos");
    console.log("elemento : " + titulo);
    titulo.innerHTML = "Gatos.com";
}

$("#test_btn").click(function () {
    alert("boton de test");
  });
$("#card_3").hide(1000).show(400).hide(1000).show(400).hide(1000).show(400).hide(1000).show(400);


function incrementValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
  }
  
  function decrementValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('number').value = value;
  }


function foo(){
    console.log(a);
    var a = 5;
}
foo();

var trafficLight = document.getElementById('traffic-light');
var greenLight = document.getElementById('green');
var yellowLight = document.getElementById('yellow');
var redLight = document.getElementById('red');

trafficLight.addEventListener('mouseover', function(event) {
  var distance = calculateDistance(event.clientX, event.clientY);

  if (distance > 200) {
    switchLights('green');
  } else if (distance > 150 && distance <= 200) {
    switchLights('yellow');
  } else if (distance < 150) {
    switchLights('red');
  }
});

trafficLight.addEventListener('mouseout', function() {
  switchLights('off');
});
luzdeTrafico.addEventListener('mouseover', funcion(event){
    var distancia = calculateDistance(event.client)x, event.clientY);
});

function switchLights(activeLight) {
  greenLight.style.backgroundColor = 'black';
  yellowLight.style.backgroundColor = 'black';
  redLight.style.backgroundColor = 'black';

  switch (activeLight) {
    case 'green':
      greenLight.style.backgroundColor = 'green';
      setTimeout(function() {
        switchLights('yellow');
      }, 3000);
      break;
    case 'yellow':
      yellowLight.style.backgroundColor = 'yellow';
      setTimeout(function() {
        switchLights('red');
      }, 1000);
      break;
    case 'red':
      redLight.style.backgroundColor = 'red';
      setTimeout(function() {
        switchLights('green');
      }, 3000);
      break;
    case 'off':
      // All lights off
      break;
  }
}

function calculateDistance(x, y) {
  var centerX = trafficLight.offsetLeft + trafficLight.offsetWidth / 2;
  var centerY = trafficLight.offsetTop + trafficLight.offsetHeight / 2;
  return Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
}
