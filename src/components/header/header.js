import "./header.css";

const template = () => {
  return `
  <header>
    <nav id="headerNav">
      <ul>
        <li>
          <a href="#aboutme">Sobre mi</a>
        </li>
        <li>
          <a href="#education">Estudios</a>
        </li>
        <li>
          <a href="#experience">Experiencia</a>
        </li>
        <li>
          <a href="#projects">Proyectos</a>
        </li>
      </ul>
    </nav>
  </header>
  `;
};

document.addEventListener("DOMContentLoaded", () => {
const nav = document.getElementById("headerNav");
if(!nav) return;
window.addEventListener("scroll", () =>{
  if(window.scrollY > 50){
    nav.classList.add("scrolled")
  } else {
    nav.classList.remove("scrolled")
  }
})
})

const Header = () => {
  return template();
};

export default Header;