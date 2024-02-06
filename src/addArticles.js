import { chnageArticle } from "./changeArticle";

const articleData = {
  images: ["img4", "img2", "img3"],
  avatars: ["img-7", "img-5", "img-6"],
  names: ["Cameron Williamson", "Courtney Henry", "Darlene Robertson"],
  desc: [
    "12 Things To Know Before Buying A House",
    "7 Ways to distinguish the quality of the house we want to buy",
    "The best way to know the quality of the house we want to buy",
  ],
  dates: [
    "8 min read &#124; 25 Apr 2021",
    "6 min read &#124; 24 Apr 2021",
    "2 min read &#124; 24 Apr 2021",
  ],
};

export function addArticles() {
  const moreArticlesBtn = document.querySelector(
    ".find-more__btn-more-articles"
  );

  const createArticles = function () {
    const articleContainer = document.querySelector(".find-more__places__left");

    articleData.images.forEach((el, i) => {
      const articleHtml = `<article class="find-more__places__left__card">
        <img
          src="img/find-more-${el}.jpeg"
          alt="Photo of place"
          width="200"
          height="148"
          class="find-more__places__left__card--img"
        />
        <div class="find-more__places__left__description">
          <div class="find-more__places__user user">
            <div class="user__${articleData.avatars[i]}--size32"></div>
            <div class="user__description">
              <p class="user__name label-style label-style--text">
                ${articleData.names[i]}
              </p>
            </div>
          </div>
          <p
            class="find-more__places__left__description-title subtitle u-mg-bottom-16"
          >
            ${articleData.desc[i]}
          </p>
          <div class="find-more__places__date">
            <img
              src="img/icons/clock.svg"
              alt="Clock icon"
              class="find-more__places__icon"
            />
            <p
              class="find-more__places__date-text label-style label-style--text"
            >
              ${articleData.dates[i]}
            </p>
          </div>
        </div>
      </article>`;

      articleContainer.insertAdjacentHTML("beforeend", articleHtml);
    });
  };

  moreArticlesBtn.addEventListener("click", function () {
    createArticles();
  });
}
