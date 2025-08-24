import "./header.css";
import MobileMenu from "../mobileMenu/mobileMenu";

const template = () => {
  return `
  <header>
    <nav id="headerNav">
      <ul>
        <li><a href="#sobreMi">Sobre mi</a></li>
        <li><a href="#experienciaEstudios">Estudios & Proyectos</a></li>
      </ul>
    </nav>
    ${MobileMenu()}
  </header>
  `;
};

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("headerNav");
  if (!nav) return;
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });
});

const Header = () => {
  return template();
};

export default Header;
