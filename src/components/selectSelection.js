export const selectSection = (buttonClass, sectionClass, activeClass) => {
  document.querySelectorAll(buttonClass).forEach(button => {
    button.addEventListener("click", () => {
      const sectionId = button.dataset.section;
      document.querySelectorAll(sectionClass).forEach(section => 
        section.classList.toggle("visible", section.id === sectionId)
      );
      document.querySelectorAll(buttonClass).forEach(btn => 
        btn.classList.toggle(activeClass, btn === button)
      );
    });
  });
};