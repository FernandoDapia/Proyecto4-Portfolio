import "./education.css";

const studies = [
  {
    title: "Bootcamp Full Stack Developer",
    school: "Rock{theCode}",
    date: "2024 - 2025",
    description: `
      - Desarrollo web full stack con JavaScript</br>
      - Frontend: HTML5, CSS3, React</br>
      - Backend: Node.js, Express</br>
      - Control de versiones con Git</br>
    `,
  },
];
const generateStudies = () => {
  return studies
    .map(
      (study) => `
    <article class="study-item">
      <div class="study-content">
        <h3>${study.title}</h3>
        <h4>${study.school}</h4>
        <p class="study-date">${study.date}</p>
        <p class="study-description">${study.description}</p>
      </div>
    </article>
  `
    )
    .join("");
};

const template = () => {
  return `
    <div class="studies-container">
      ${generateStudies()}
    </div>
  `;
};

export { generateStudies };
export default template;
