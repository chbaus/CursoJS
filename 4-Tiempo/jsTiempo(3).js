let miIntervalo;
let contador = 0;

function inicio() {
  alert("function inicio.");
  miIntervalo = setInterval(SegundosEnElAire, 2000);
}

function SegundosEnElAire() {
  contador = contador + 1;
  alert("Hola Mundo, cantidad =" + contador);
}

function fin() {
  alert("function fin.");
  clearInterval(miIntervalo);
}
