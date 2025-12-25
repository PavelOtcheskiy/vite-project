export function initShowAllBrands() {
  const showAllBrands = document.querySelector(
    ".slideMenu__controls_showAllBrands"
  );
  const brandsContainer = document.querySelector(
    ".repairBrands__slideMenu_brands"
  );

  if (showAllBrands) {
    showAllBrands.addEventListener("click", function () {
      brandsContainer.classList.toggle("show-all");

      if (brandsContainer.classList.contains("show-all")) {
        showAllBrands.textContent = "Скрыть";
        showAllBrands.classList.add("hide");
      } else {
        showAllBrands.textContent = "Показать все";
        showAllBrands.classList.remove("hide");
      }
    });
  }
}