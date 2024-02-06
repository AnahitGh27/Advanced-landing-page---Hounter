export function chnageArticle() {
    const rightArticle = document.querySelector('.find-more__places__right--card');
    const leftArticles = document.querySelectorAll('.find-more__places__left__card');

    leftArticles.forEach(function (article, index) {
        article.addEventListener('click', function () {
            const imageLeft = article.querySelector('.find-more__places__left__card--img').src;
            const userImgLeft = article.querySelector('.find-more__places__user--img').classList[1];
            const author = article.querySelector('.user__name').textContent;
            const title = article.querySelector('.find-more__places__left__description-title').textContent;
            const date = article.querySelector('.find-more__places__date-text').textContent;

            rightArticle.querySelector('.find-more__places__right__card--img').src = imageLeft;
            const userImgRight = rightArticle.querySelector('.find-more__places__user--img').classList[1];
            rightArticle.querySelector('.find-more__places__user--img').classList.remove(userImgRight);
            rightArticle.querySelector('.find-more__places__user--img').classList.add(userImgLeft);
            rightArticle.querySelector('.find-more__places__user--name').textContent = author;
            rightArticle.querySelector('h3').textContent = title;
            rightArticle.querySelector('.find-more__places__date-text').textContent = date;
        });
    });
}