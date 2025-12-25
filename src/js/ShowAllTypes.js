export function initShowAllTypes() {
  const showAllTypes = document.querySelector(
    ".slideMenu__controls_showAllTypes"
  );
  const typesContainer = document.querySelector(
    ".repairTypes__slideMenu_services"
  );

  if (showAllTypes) {
    showAllTypes.addEventListener("click", function () {
      typesContainer.classList.toggle("show-all");

      if (typesContainer.classList.contains("show-all")) {
        showAllTypes.textContent = "Скрыть";
        showAllTypes.classList.add("hide");
      } else {
        showAllTypes.textContent = "Показать все";
        showAllTypes.classList.remove("hide");
      }
    });
  }
}