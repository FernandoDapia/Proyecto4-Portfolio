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
        <h3>Experiencia</h3>
        <p>Esta es la sección experiencia</p>
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
