//Script del Juego de Piedra | Papel | Tijeras
let campoBatalla = document.getElementById ("campo-batalla");
let jugadorImg = document.getElementById ("jugador-img");
let cpuImg = document.getElementById ("cpu-img");
let msjBatalla = document.getElementById ("msj-batalla");
let btnPiedra = document.getElementById ("btn-piedra");
let btnPapel = document.getElementById ("btn-papel");
let btnTijera = document.getElementById ("btn-tijera");

let piedra = "piedra";
let papel = "papel";
let tijera = "tijera";

let empate  = 0;
let perdiste = 1;
let ganaste = 2;

//addEventListener permite registrar un evento a un objeto en específico.
btnPiedra.addEventListener("click", function (){
  play(piedra);
});
btnPapel.addEventListener("click", function(){
  play(papel);
});
btnTijera.addEventListener("click", function(){
  play(tijera);
});

function play(jugador){
  jugadorImg.src = "images/" + jugador + ".PNG";

  msjBatalla.innerHTML = "Eligiendo"

  let interval = setInterval(function(){
    let cpu = calOpcioncpu();
    cpuImg.src = "images/" + cpu + ".PNG";
  }, 200);

  setTimeout(function () {

    clearInterval(interval);
    
    let cpu = calOpcioncpu();
    let resultado = calcResultado(jugador,cpu);

    cpuImg.src = "images/" + cpu + ".PNG";

  /*switch se utiliza para evaluar una expresion ejecutar varios 
  bloques de codigos segun el valor de la expresion (Por casos)*/
  switch(resultado){
    case empate:
      msjBatalla.innerHTML = "¡Empate!";
      break;
    case ganaste:
      msjBatalla.innerHTML = "¡Ganaste!";
      break;
    case perdiste:
      msjBatalla.innerHTML = "¡Perdiste!";
      break;
  }
  }, 2000)

}

function calOpcioncpu(){
  let nam = Math.floor(Math.random() * 3);
  switch (nam) {
    case 0:
      return piedra;
    case 1: 
      return papel;
    case 2:
      return tijera;
  }
}

function calcResultado(jugador,cpu){
  if (jugador === cpu){
    return empate;
  }else if (jugador === piedra){
    if(cpu === papel) return (perdiste);
    if(cpu === tijera) return (ganaste);
  }else if (jugador === papel){
    if(cpu === tijera) return (perdiste);
    if(cpu === piedra) return (ganaste);
  }else if (jugador === tijera){
    if(cpu === piedra) return (perdiste);
    if(cpu === papel) return (ganaste);
  }
}

//Script del To do List
let boton = document.getElementById ("barra");
let tarea = document.getElementById ("tarea");
let botonAgregar = document.getElementById ("btn-agregar");
let lista = document.getElementById ("lista");
let empty = document.getElementById ("contenedor-vacio");

botonAgregar.addEventListener("click", function() {
  if(tarea.value == ""){
    return;
  }

  let elemento = tarea.value;

  const li = document.createElement('li');
  const p = document.createElement('p')
  p.textContent = elemento;
  li.appendChild(p);
  lista.appendChild(li);
  tarea.value = "";
  empty.style.display = "none";

  let btnEliminar = document.createElement("button");
  btnEliminar.textContent = "x";
  btnEliminar.className = "btn-delete";
  li.appendChild(btnEliminar);

  btnEliminar.addEventListener("click", function() {
  li.remove();

  const items = document.querySelectorAll("li");
    if (items.length === 0) {
      empty.style.display = "block";
    }
  });

  tarea.value = "";
});

//Script cuadro que se mueve cuando se presiona una flecha

const hijo = document.getElementById('hijo');
const step = 10; // Pixels to move

document.addEventListener('keydown', function (event) {
  const squareRect = document.getElementById('square').getBoundingClientRect();
  const hijoRect = hijo.getBoundingClientRect();
  switch (event.key) {
    case 'ArrowLeft':
      if (hijoRect.left > squareRect.left) {
          hijo.style.left = `${parseInt(hijo.style.left || '0') - step}px`;
      }
      break;
    case 'ArrowUp':
      if (hijoRect.top > squareRect.top) {
          hijo.style.top = `${parseInt(hijo.style.top || '0') - step}px`;
      }
      break;
    case 'ArrowRight':
      if (hijoRect.right < squareRect.right) {
          hijo.style.left = `${parseInt(hijo.style.left || '0') + step}px`;
      }
      break;
    case 'ArrowDown':
      if (hijoRect.bottom < squareRect.bottom) {
          hijo.style.top = `${parseInt(hijo.style.top || '0') + step}px`;
      }
      break;
  }
});

//script calculadora
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

const calculate = (btnValue) => {
  display.focus();
  if (btnValue === "=" && output !== "") {
    output = eval(output.replace("%", "/100"));
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }
  display.value = output;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});



