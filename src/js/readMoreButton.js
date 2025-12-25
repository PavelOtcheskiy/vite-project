export function initReadMoreButton() {
  const readMoreBtn = document.querySelector(
    ".content__controls_readMoreBtn"
  );
  const textContainer = document.querySelector(".content__text");

  if (readMoreBtn) {
    readMoreBtn.addEventListener("click", function () {
      textContainer.classList.toggle("showAll");

      if (textContainer.classList.contains("showAll")) {
        readMoreBtn.textContent = "Скрыть";
        readMoreBtn.classList.add("hide");
      } else {
        readMoreBtn.textContent = "Читать далее";
        readMoreBtn.classList.remove("hide");
      }
    });
  }
}