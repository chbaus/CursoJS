let miTemporizador;
let contador = 0;
let tiempoInicio;
let tiempoFinal;

function inicio() {
  let random = Math.floor(Math.random() * 10000) + 2000;
  //alert(random);
  alert("function inicio.");
  miTemporizador = setTimeout(SegundosEnElAire, random);
}

function SegundosEnElAire() {
  document.getElementById("secreto").style.visibility = "visible";
  tiempoInicio = new Date();
  tiempoInicio = tiempoInicio.getTime();
  //alert(tiempoInicio);
}

function ContarMilisegundos() {
  tiempoFinal = new Date();
  tiempoFinal = tiempoFinal.getTime();
  resultado = tiempoFinal - tiempoInicio;
  alert("su tiempo fue: " + resultado);
}
