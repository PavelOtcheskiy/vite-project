import Swiper from 'swiper/bundle';

export function initSwipers() {
  if (innerWidth < 768) {
    new Swiper(".repairBrands .swiper", {
      slidesPerView: "auto",
      spaceBetween: 16,
      freeMode: true,
      grabCursor: true,
      pagination: {
        el: ".repairBrands .swiper-pagination",
        clickable: true,
      },
    });

    new Swiper(".repairTypes .swiper", {
      slidesPerView: "auto",
      spaceBetween: 16,
      freeMode: true,
      grabCursor: true,
      pagination: {
        el: ".repairTypes .swiper-pagination",
        clickable: true,
      },
    });

    new Swiper(".repairPrices .swiper", {
      slidesPerView: "auto",
      spaceBetween: 16,
      freeMode: true,
      grabCursor: true,
      pagination: {
        el: ".repairPrices .swiper-pagination",
        clickable: true,
      },
    });
  }
}
