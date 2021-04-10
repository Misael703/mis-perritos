function mensaje() {
  var nombre = document.getElementById("txtNombre").value;
  alert("Yo soy: " + nombre);
}

function validarRut() {
  var rut = document.getElementById("txtRut").value;
  if (rut.length != 10) {
    alert("Largo del rut incorrecto");
    return false;
  }
  var num = 3;
  var suma = 0;

  for (let index = 0; index < 8; index++) {
    var carac = rut.slice(index, index + 1);
    //alert(carac + ' x ' + num)//
    suma = suma + carac * num;
    num = num - 1;
    if (num == 1) {
      num = 7;
    }
  }
  //alert('El total es: '+ suma)//
  var resto = suma % 11;
  var dv = 11 - resto;
  if (dv > 9) {
    if (dv == 10) {
      dv = "K";
    } else {
      dv = 0;
    }
  }
  alert("El DV es: " + dv);
}
