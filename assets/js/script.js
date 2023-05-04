function capturarDatosComunicar() {
    var nombre = $("#nombreComunicar").val();
    var correo = $("#correoComunicar").val();
    alert("Hola " + nombre + ", Hemos recibido tu mensaje y pronto te responderemos al siguiente correo: " + correo);
    window.location.href = "index.html";
  }
  
  function capturarDatosReservar() {
    var nombre = $("#nombreReservar").val();
    var correo = $("#correoReservar").val();
    var asistentes = $("#asistentesReservar").val();
    if (asistentes > 1){
    alert("Estima@ " + nombre + ", gracias por reservar con nosotros.\nHemos registrado " + asistentes + " asistentes.\nEnviamos el codigo de confirmacion al siguiente correo: " + correo);
  } else {
    alert("Estima@ " + nombre + ", gracias por reservar con nosotros.\nHemos registrado " + asistentes + " asistente.\nEnviamos el codigo de confirmacion al siguiente correo: " + correo);
    window.location.href = "index.html";  
}
  }

function mostrarOcultarComunicar() {
    if (window.matchMedia("(min-width: 1px) and (max-width: 991px)").matches) {
    document.getElementById('form-reservar').style.display = "none";
    document.getElementById('form-comunicar').style.display = "block";
}
}

function mostrarOcultarReservar() {
    if (window.matchMedia("(min-width: 1px) and (max-width: 991px)").matches) {
    document.getElementById('form-comunicar').style.display = "none";
    document.getElementById('form-reservar').style.display = "block";
}
}

function mostrarComunicar() {
    document.getElementById('form-comunicar').style.display = "block";
}

function mostrarReservar() {
    document.getElementById('form-reservar').style.display = "block";
}

function ocultarComunicar() {
    document.getElementById('form-comunicar').style.display = "none";
}

function ocultarReservar() {
    document.getElementById('form-reservar').style.display = "none";
}


