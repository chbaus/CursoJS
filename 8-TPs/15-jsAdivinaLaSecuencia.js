let secuenciaSecretaDeColores;
let secuenciaIngresada = new Array("vacio", "vacio", "vacio", "vacio");
let contadorDeIntentos = 0;

function Comenzar() {
  //en esta funcion deberiamos generar una secuencia random
  //de los cuatro colores sin repetir colores
  secuenciaSecretaDeColores = ["Amarillo", "Rojo", "Azul", "Verde"];
  console.info("colores cargados", secuenciaSecretaDeColores);
}

function Responder(parametroColor) {
  for (let i = 0; i < 4; i++) {
    if (secuenciaIngresada[i] == "vacio") {
      secuenciaIngresada[i] = parametroColor;
      console.info("colores ingresados", secuenciaIngresada);
      break;
    }
  }
}

function Verificar() {
  let mensaje;
  let aciertosConseguidos = 0;
  contadorDeIntentos++;

  for (let i = 0; i < 4; i++) {
    if (secuenciaIngresada[i] == secuenciaSecretaDeColores[i]) {
      aciertosConseguidos++;
    }
  }
  if (aciertosConseguidos == 4) {
    mensaje = "  excelente !!!";
  } else {
    mensaje = " ..Correctas: " + aciertosConseguidos;
    if (contadorDeIntentos == 4) {
      alert("Casi lo logras... mas suerte la proxima ! ! !");
      alert(secuenciaSecretaDeColores);
    }
  }

  switch (contadorDeIntentos) {
    case 1:
      txtPrimerIntento.value = secuenciaIngresada + " " + mensaje;
      break;
    case 2:
      txtSegundoIntento.value = secuenciaIngresada + " " + mensaje;
      break;
    case 3:
      txtTercerIntento.value = secuenciaIngresada + " " + mensaje;
      break;
    case 4:
      txtCuartoIntento.value = secuenciaIngresada + " " + mensaje;
      break;
  }

  secuenciaIngresada = new Array("vacio", "vacio", "vacio", "vacio");
}
