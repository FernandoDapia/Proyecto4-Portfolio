import "./hero.css";

const template = () => {
  return `
  <section id="heroSection">
      <div class="hero">
        <div class="heroPhoto">
          <img
            src="https://res.cloudinary.com/dy45x7mjl/image/upload/v1737572036/Proyecto-4-Portfolio/Captura_de_pantalla_2025-01-22_a_las_19.50.06-modified_czdqo9.png"
          />
        </div>
        <div class="heroTitle">
          <p>¡Hola Mundo!✌🏻</p>
          <p>Soy&nbsp;<span>Fernando Dapia</span></p>
          <p>Desarrollador Full - Stack Junior</p>
          <div class="social-icons">
            <a href="https://github.com/FernandoDapia" target="_blank">
              <img
                src="https://res.cloudinary.com/dy45x7mjl/image/upload/v1737662660/Proyecto-4-Portfolio/logo-github_dnvawd.svg"
                alt="GitHub"
                class="icon"
              />
            </a>
            <a href="mailto:fernandocodigo52@gmail.com" target="_blank">
              <img
                src="https://res.cloudinary.com/dy45x7mjl/image/upload/v1737662893/Proyecto-4-Portfolio/envelope-solid_kimjd2.svg"
                alt="Email"
                class="icon"
              />
            </a>
            <a href="https://www.linkedin.com/in/fernando-dapia-rodriguez-b832a1322" target="_blank">
              <img
                src="https://res.cloudinary.com/dy45x7mjl/image/upload/v1737663787/Proyecto-4-Portfolio/linkedin-brands-solid_crgcq9.svg"
                alt="Linkedin"
                class="icon"
              />
            </a>
          </div>
        </div>
    </section>
  
  `;
};

const Hero = () => {
  return template();
};

export default Hero;
