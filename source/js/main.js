import { iosVhFix } from "./utils/ios-vh-fix";
import { initModals } from "./modules/modals/init-modals";
import { Form } from "./modules/form-validate/form";

import {
  getSwiperHero,
  getSwiperProgramms,
  getSwiperNews,
  getSwiperReviews,
} from "./modules/slider";
import {
  openMenu,
  openDropMenuProgramm,
  openDropMenuNews,
} from "./modules/open-menu";
import { initAccordions } from "./modules/accordion/init-accordion";
import { CustomSelect } from "./modules/select/custom-select";
import { initMap } from "./modules/map";
import { replaceActiveClass } from "./modules/news-fiters";

// ---------------------------------

window.addEventListener("DOMContentLoaded", () => {
  // Utils
  // ---------------------------------
  iosVhFix();
  getSwiperHero();
  getSwiperProgramms();
  getSwiperNews();
  getSwiperReviews();
  openMenu();
  openDropMenuProgramm();
  openDropMenuNews();
  initAccordions();
  initMap();
  replaceActiveClass();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener("load", () => {
    initModals();

    const select = new CustomSelect();
    select.init();

    const form = new Form();
    window.form = form;
    form.init();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
