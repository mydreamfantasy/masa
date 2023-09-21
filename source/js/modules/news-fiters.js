const container = document.querySelector(".news__filtration-list");

let currentButton = container.querySelector(".news__filtration-item--current");

const replaceActiveClass = () => {
  container.addEventListener("click", (evt) => {
    if (evt.target.matches(".news__filtration-item")) {
      currentButton.classList.remove("news__filtration-item--current");
      evt.target.classList.add("news__filtration-item--current");
      currentButton = evt.target;
    }
  });
};

export { replaceActiveClass };
