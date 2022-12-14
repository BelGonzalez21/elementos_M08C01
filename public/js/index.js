window.onload = function () {
  let main = document.querySelector("main");
  let subtitulo = document.querySelector(".subtitulo");
  let a = document.querySelector("a");
  let parrafos = document.querySelectorAll("p");

  let name = prompt("Ingrese su nombre");

  if (name) {
    subtitulo.innerText += name;
  } else {
    subtitulo.innerText += "invitado";
  }

  subtitulo.style.textTransform = "uppercase";
  a.style.color = "#E51B3E";

  let confirmar = confirm("¿Desea colocar un fondo de pantalla?");
  if (confirmar) {
    document.querySelector("body").classList.add("fondo");
  }

  main.style.display = "block";

  for (let i = 0; i < parrafos.length; i++) {
    if (i % 2 == 0) {
      parrafos[i].classList.add("destacadoPar");
    } else {
      // es impar
      parrafos[i].classList.add("destacadoImpar");
    }
  }
};
