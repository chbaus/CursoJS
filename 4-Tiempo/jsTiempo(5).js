let miTemporizador;
let contador = 0;

function inicio() {
  alert("function inicio.");
  miTemporizador = setTimeout(SegundosEnElAire, 3000);
}

function SegundosEnElAire() {
  alert("OK");
}

function fin() {
  alert("function fin.");
  clearTimeout(miTemporizador);
}
