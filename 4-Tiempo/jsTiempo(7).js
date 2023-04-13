let miTemporizador;
let contador = 0;
let tiempoInicio;
let tiempoFinal;

function inicio() {
  document.getElementById("secreto").style.visibility = "hidden";
  alert("function inicio.");
  miTemporizador = setTimeout(SegundosEnElAire, 3000);
}

function SegundosEnElAire() {
  document.getElementById("secreto").style.visibility = "visible";
  tiempoInicio = new Date();
  tiempoInicio = tiempoInicio.getTime();
  alert(tiempoInicio);
}

function fin() {
  tiempoFinal = new Date();
  tiempoFinal = tiempoFinal.getTime();
  alert(tiempoFinal - tiempoInicio);
}
