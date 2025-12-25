import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "@/scss/main.scss";

import { initReadMoreButton } from "@/js/readMoreButton.js";
import { initShowAllBrands } from "@/js/ShowAllBrands.js";
import { initShowAllTypes } from "@/js/ShowAllTypes.js";
import { initSwipers } from "@/js/swipers.js";
import { slidesForMobileView } from "@/js/slidesForMobileView.js";
import { openSideMenus } from "@/js/sideMenus.js";

document.addEventListener("DOMContentLoaded", function () {
  initReadMoreButton();
  initShowAllBrands();
  initShowAllTypes();
  initSwipers();
  slidesForMobileView();
  openSideMenus();
});

window.addEventListener("resize", () => {
  slidesForMobileView();
});
