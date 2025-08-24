import "./experience.css";
import { selectSection } from "../selectSelection.js";
import { generateStudies } from "../education/education.js";

const template = () => {
  return `
  <section id="experienciaEstudios">
    <div class="buttons">
      <button data-section="section1" class="buttonSelect active">Estudios</button>
      <button data-section="section2" class="buttonSelect">Experiencia</button>
    </div>
    <div id="section1" class="seccion visible">
      ${generateStudies()}
    </div>
    <div id="section2" class="seccion">
      ${generateProyects()}  
    </div>
  </section>
  `;
};

const project = [
  {
    image:
      "https://res.cloudinary.com/dy45x7mjl/image/upload/v1755032860/Proyecto-4-Portfolio/Captura_de_pantalla_2025-08-12_a_las_23.05.19_pgvodg.png",
    title: "Proyecto 1 — Landing Page Mercedes-Benz",
    description: `Proyecto Web Responsive (HTML & CSS)
    - Creación de interfaz adaptable a cualquier dispositivo Mobile First<br>
    - Maquetación con Flexbox y CSS Grid<br>
    - Estilos escalables con variables CSS y reutilización de clases<br>
    - Enfoque en accesibilidad y experiencia de usuario<br>
    - Integración de enlaces reales a productos`,
    link: "https://proyecto-1-rockthecode.netlify.app/",
  },
  {
    image:
      "https://res.cloudinary.com/dy45x7mjl/image/upload/v1755641320/Proyecto-4-Portfolio/Captura_de_pantalla_2025-08-20_a_las_0.07.29_b5dqal.png",
    title: "Proyecto 2 — Tienda de filtros JD",
    description: `Proyecto Tienda de Filtros (JavaSvript & DOM)
    - Web responsive replicada desde Figma, con HTML mínimo y contenido dinámico inyectado mediante JavaScript.<br>
    - Sistema de filtros interactivos combinables y gestionados desde un modal.<br>
    - Productos sugeridos aleatorios si no hay resultados de búsqueda.<br>
    - Botón limpiar filtros para reiniciar inputs y mostrar todos los productos.<br>`,
    link: "https://proyecto-2-tienda-de-filtros.netlify.app/",
  },
];

const generateProyects = () => {
  return project
    .map(
      (item) => `
    <article class="project"> 
      <div class="project-image">
        <img src="${item.image}" alt="${item.title} preview" />
      </div>
      <div class="project-content">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <p><a href="${item.link}" target="_blank" rel="noopener">VISITAR</a></p>
      </div>
    </article>
  `
    )
    .join("");
};

const Experience = () => {
  document.addEventListener("DOMContentLoaded", () => {
    selectSection(".buttonSelect", ".seccion", "active");
  });
  return template();
};

export default Experience;
