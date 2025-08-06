export const selectSection = (buttonClass, sectionClass, activeClass) => {
  const buttons = document.querySelectorAll(buttonClass);
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const sectionId = button.dataset.section;
      document.querySelectorAll(sectionClass).forEach((section) => {
        section.classList.remove("visible");
      });
      document.getElementById(sectionId).classList.add("visible");
      buttons.forEach((btn) => btn.classList.remove(activeClass));
      button.classList.add(activeClass);
    });
  });
};