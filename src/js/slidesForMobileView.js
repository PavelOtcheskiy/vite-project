export function slidesForMobileView() {
  const brandsSlides = document.querySelectorAll(
    ".repairBrands .swiper-slide"
  );
  const typesSlides = document.querySelectorAll(".repairTypes .swiper-slide");

  if (window.innerWidth < 768) {
    brandsSlides.forEach((element, index) => {
      element.classList.toggle("hidden", index > 8);
    });

    typesSlides.forEach((element, index) => {
      element.classList.toggle("hidden", index > 8);
    });
  } else {
    brandsSlides.forEach((element) => element.classList.remove("hidden"));
    typesSlides.forEach((element) => element.classList.remove("hidden"));
  }
}