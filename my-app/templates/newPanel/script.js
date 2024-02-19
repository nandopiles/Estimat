const expand_btn = document.querySelector(".expand-btn");

let activeIndex;

expand_btn.addEventListener("click", () => {
  document.body.classList.toggle("collapsed");
});

const current = window.location.href;

const allLinks = document.querySelectorAll(".sidebar-links a");

allLinks.forEach((elem) => {
  elem.addEventListener("click", function () {
    const hrefLinkClick = elem.href;

    allLinks.forEach((link) => {
      if (link.href == hrefLinkClick) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });
});




// Variable para almacenar el estado actual del logotipo
let logoState = 'normal'; // Puede ser 'normal' o 'alterno'

// Agregar un event listener al botón para detectar clics
document.getElementById('expand-btn').addEventListener('click', () => {
  // Obtener la imagen del logotipo
  const logoImg = document.getElementById('logo');

  // Cambiar la imagen del logotipo basándose en el estado actual
  if (logoState === 'normal') {
    logoImg.src = 'logo2.png'; // Cambiar a logo2.png
    logoImg.classList.remove('logo-big'); // Eliminar la clase logo-small
    logoImg.classList.add('logo-small'); // Agregar la clase logo-big
    logoState = 'alterno'; // Actualizar el estado a 'alterno'
  } else {
    logoImg.src = 'logo.png'; // Cambiar a logo.png
    logoImg.classList.remove('logo-small'); // Eliminar la clase logo-big
    logoImg.classList.add('logo-big'); // Agregar la clase logo-small
    logoState = 'normal'; // Actualizar el estado a 'normal'
  }
});



