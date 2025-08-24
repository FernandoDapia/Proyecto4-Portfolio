import "./style.css";
import Header from "./src/components/header/header.js";
import Hero from "./src/components/hero/hero.js";
import sobreMi from "./src/components/sobreMi/sobreMi.js";
import Skills from "./src/components/skills/skills.js";
import Experience from "./src/components/experience/experience.js";
import Footer from "./src/components/footer/footer.js";

const render = () => {
  document.querySelector("#app").innerHTML = `
    ${Header()}
    ${Hero()}
    ${sobreMi()}
    ${Skills()}
    ${Experience()}
    ${Footer()}
  `;
};


render();
