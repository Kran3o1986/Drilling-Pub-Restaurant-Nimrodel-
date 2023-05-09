console.log("🟢 conectado!");

function mostrarForm(item) {
  document.querySelector(item).classList.remove("d-none");
}

const formContacto = document.querySelector("#formContacto");

//FORM DE CONTACTO
//sección con vanilla JS

formContacto.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombreContacto = document.querySelector("#nombreContacto");
  const correoContacto = document.querySelector("#correoContacto");
  const telefonoContacto = document.querySelector("#telefonoContacto");
  const motivo = document.querySelector("#motivo");
  const comentario = document.querySelector("#comentario");

  if (!nombreContacto.value.trim()) {
    alert("El campo 'Nombre' es obligatorio");
    nombreContacto.focus();
    return;
  }

  if (!correoContacto.value.trim()) {
    alert("El campo 'Correo' es obligatorio");
    correoContacto.focus();
    return;
  }

  if (!telefonoContacto.value.trim()) {
    alert("El campo 'Teléfono' es obligatorio");
    telefonoContacto.focus();
    return;
  }

  if (!motivo.value.trim()) {
    alert("El campo 'Motivo' es obligatorio");
    motivo.focus();
    return;
  }

  if (!comentario.value.trim()) {
    alert("El campo 'Comentario' es obligatorio");
    comentario.focus();
    return;
  }

  alert(
    `Muchas gracias ${nombreContacto.value}. Hemos recibido su sugerencia y enviaremos una pronta respuesta al correo ${correoContacto.value}.`
  );

  formContacto.reset();
  comentario.value = "";
});

//FORM DE RESERVAS
//sección con jQuery

$(document).ready(function () {
  $("#formReservas").submit(function (e) {
    e.preventDefault();

    if (!$("#nombreReserva").val().trim()) {
      alert("El campo 'Nombre' es obligatorio");
      $("#nombreReserva").focus();
      return;
    }

    if (!$("#correoReserva").val().trim()) {
      alert("El campo 'Correo' es obligatorio");
      $("#correoReserva").focus();
      return;
    }

    if (!$("#telefonoReserva").val().trim()) {
      alert("El campo 'Teléfono' es obligatorio");
      $("#telefonoReserva").focus();
      return;
    }

    if (!$("#fecha").val().trim()) {
      alert("El campo 'Fecha' es obligatorio");
      $("#fecha").focus();
      return;
    }

    if (!$("#hora").val().trim()) {
      alert("El campo 'Hora' es obligatorio");
      $("#hora").focus();
      return;
    }

    if (!$("#cantidadAsistentes").val().trim()) {
      alert("El campo 'Cantidad de asistentes' es obligatorio");
      $("#cantidadAsistentes").focus();
      return;
    }

    alert(
      `Estimado/a ${$("#nombreReserva").val()}:
Agradecemos por reservar con nosotros. Hemos registrado ${$(
        "#cantidadAsistentes"
      ).val()} asistentes. Se ha enviado un código de confirmación al correo ${$(
        "#correoReserva"
      ).val()}.
Gracias por preferirnos`
    );

    $("#formReservas").trigger("reset");
  });

  //CARD CON JQUERY
  //gaseosas
  $("#cardGaseosas").click(function () {
    $("#gaseosasModal").show();
  });

  $("#closeGaseosasModal").click(function () {
    $("#gaseosasModal").hide();
  });

  //tablas
  $("#cardTablas").click(function () {
    $("#tablasModal").show();
  });

  $("#closeTablasModal").click(function () {
    $("#tablasModal").hide();
  });

  //shop
  $("#cardShop").click(function () {
    $("#shopModal").show();
  });

  $("#closeShopModal").click(function () {
    $("#shopModal").hide();
  });
});
