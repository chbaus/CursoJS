let miIntervalo;

function inicio() {
  alert("function inicio.");
  miIntervalo = setInterval(SegundosEnElAire, 3000);
}
function SegundosEnElAire() {
  alert("Hola Mundo");
}
