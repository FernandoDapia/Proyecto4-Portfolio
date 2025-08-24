import "./mobileMenu.css";

const template = () => {
  return `
      <div class="mobile-menu">
      <button class="hamburger-btn">
      <img src="https://res.cloudinary.com/dy45x7mjl/image/upload/v1725209556/Proyecto-1-rtc/menu_nrnzgc.png" alt="Menú" class="hamburger-icon"/>
      </button>
      <nav class="mobile-nav">
        <ul>
          <li><a href="#sobreMi">Sobre mi</a></li>
          <li><a href="#experienciaEstudios">Estudios & Proyectos</a></li>
        </ul>
      </nav>
    </div>
  `;
};
const MobileMenu = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const hamburgerBtn = document.querySelector(".hamburger-btn");
    const mobileNav = document.querySelector(".mobile-nav");

    if (!hamburgerBtn || !mobileNav) return;

    hamburgerBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      mobileNav.classList.toggle("active");
      hamburgerBtn.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
      if (!mobileNav.contains(e.target) && !hamburgerBtn.contains(e.target)) {
        mobileNav.classList.remove("active");
        hamburgerBtn.classList.remove("active");
      }
    });
  });

  return template();
};

export default MobileMenu;
