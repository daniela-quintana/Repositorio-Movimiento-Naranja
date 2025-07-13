document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  hamburger.addEventListener("click", function () {
    this.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      }
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const navbarHeight = document.querySelector(".navbar").offsetHeight;
        const targetPosition =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset -
          navbarHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const downloadButton = document.getElementById("download-ebook");
  if (downloadButton) {
    downloadButton.addEventListener("click", function (event) {
      event.preventDefault();

      let url = "./assets/documents/Efecto Naranja Ebook.pdf";

      gtag("event", "descarga_ebook", {
        event_category: "Descargas",
        event_label: "Ebook Efecto Naranja",
        value: 1,
        event_callback: function () {
          window.location.href = url;
        },
      });

      setTimeout(function () {
        window.location.href = url;
      }, 1500);
    });
  }
});


emailjs.init("sZaV0dP15gACQdARJ");

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    emailjs
      .sendForm("service_p2j42ac", "template_hog9k39", form)
      .then(() => {
        alert("Correo enviado con éxito, gracias!");
        form.reset();
      })
      .catch((error) => {
        alert("Error al enviar el correo: " + JSON.stringify(error));
      });
  });
});
