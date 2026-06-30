document.addEventListener("DOMContentLoaded", function () {

  
  const tarjetas = document.querySelectorAll(".Tarjeta");

  
  tarjetas.forEach(function (tarjeta, indice) {

    tarjeta.style.transition = "transform 0.4s ease, box-shadow 0.4s ease, background 0.4s ease";

    tarjeta.style.cursor = "pointer";

    tarjeta.addEventListener("mouseover", function () {
      tarjeta.style.transform = "scale(1.05)";
      tarjeta.style.boxShadow = "0px 15px 25px rgba(0, 0, 0, 0.7)";
      tarjeta.style.background = "#f0fbff";
    });

    tarjeta.addEventListener("mouseout", function () {
      tarjeta.style.transform = "scale(1)";
      tarjeta.style.boxShadow = "10px 10px 10px rgba(0,0,0,0.9)";
      tarjeta.style.background = "white";
    });

    tarjeta.addEventListener("click", function () {
      const titulo = tarjeta.querySelector("h2").textContent;

      const mensajeExistente = tarjeta.querySelector(".mensaje-js");

      if (mensajeExistente) {
        mensajeExistente.remove();
        tarjeta.style.border = "1px solid #000";
      } else {
        const mensaje = document.createElement("p");
        mensaje.className = "mensaje-js";
        mensaje.textContent = "Destino seleccionado: " + titulo + ". Solicita información para conocer paquetes turísticos, rutas y costos en este mes de Junio 2026.";

        mensaje.style.background = "#000";
        mensaje.style.color = "white";
        mensaje.style.padding = "8px";
        mensaje.style.margin = "8px";
        mensaje.style.borderRadius = "8px";
        mensaje.style.fontSize = "13px";

        tarjeta.appendChild(mensaje);
        tarjeta.style.border = "3px solid red";
      }

      console.log("Tarjeta seleccionada:", titulo);
    });

    const boton = tarjeta.querySelector("a");

    boton.addEventListener("mouseover", function () {
      boton.textContent = "Ver destino";
    });

    boton.addEventListener("mouseout", function () {
      boton.textContent = "Leer Mas";
    });

    boton.addEventListener("click", function (evento) {
      evento.preventDefault();
      evento.stopPropagation();

      const titulo = tarjeta.querySelector("h2").textContent;

      alert("Información turística de " + titulo + ": pronto se mostrarán más detalles del destino, pagina en construcción en proceso de aprendizaje.");
    });
  });

  const contenedorTarjetas = document.querySelector("#General_Tarjeta");

  const mensajeBienvenida = document.createElement("h2");
  mensajeBienvenida.textContent = "DESTINOS TURISTICOS SUGERIDOS PERÚ - BOLIVIA 2026";
  mensajeBienvenida.style.width = "100%";
  mensajeBienvenida.style.textAlign = "center";
  mensajeBienvenida.style.background = "#000";
  mensajeBienvenida.style.color = "white";
  mensajeBienvenida.style.padding = "10px";
  mensajeBienvenida.style.marginBottom = "5px";
  mensajeBienvenida.style.borderRadius = "10px";

  contenedorTarjetas.parentNode.insertBefore(mensajeBienvenida, contenedorTarjetas);

  tarjetas.forEach(function (tarjeta, indice) {
    tarjeta.style.opacity = "0";
    tarjeta.style.transform = "translateY(30px)";

    setTimeout(function () {
      tarjeta.style.opacity = "1";
      tarjeta.style.transform = "translateY(0)";
    }, 400 * (indice + 1));
  });
});
