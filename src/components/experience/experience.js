import "./experience.css";
import { selectSection } from "../utils.js";

const template = () => {
  return `
  <section id="experienciaEstudios">
  <div class="buttons">
        <button data-section="section1" class="buttonSelect active">Estudios</button>
        <button data-section="section2" class="buttonSelect">Experiencia</button>
    </div>
    <div id="section1" class="seccion visible">
        <h3>Estudios</h3>
        <p>Esta es la sección estudios</p>
    </div>
    <div id="section2" class="seccion">
        <article class="project-1">
          <div class="project-image">
            <img src="https://res.cloudinary.com/dy45x7mjl/image/upload/v1755032860/Proyecto-4-Portfolio/Captura_de_pantalla_2025-08-12_a_las_23.05.19_pgvodg.png" alt="Portfolio estático preview" />
          </div>
          <div class="project-content">
            <h3>Proyecto 1 — Landing Page Mercedes-Benz</h3>
            <p>Proyecto Web Responsive (HTML & CSS) <br>
            <br>
- Creación de interfaz adaptable a cualquier dispositivo (Mobile First).<br>
- Maquetación con Flexbox y CSS Grid.<br>
- Estilos escalables con variables CSS y reutilización de clases.<br>
- Enfoque en accesibilidad y experiencia de usuario.<br>
- Integración de enlaces reales a productos.</p>
            <p><a href="https://proyecto-1-rockthecode.netlify.app/" target="_blank" rel="noopener">VISITAR</a></p>
          </div>
        </article>
        
    </div>
    

  </section>
  `;
};

const Experience = () => {
  document.addEventListener("DOMContentLoaded", () => {
    selectSection(".buttonSelect", ".seccion", "active");
  });
  return template();
};

export default Experience;
