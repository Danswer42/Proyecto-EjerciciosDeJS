
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

