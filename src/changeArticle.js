export function chnageArticle() {
    const rightArticle = document.querySelector('.find-more__places__right--card');
    const leftArticlesContainer = document.querySelector('.find-more__places__left');

    leftArticlesContainer.addEventListener('click', function (event) {
        const clickedArticle = event.target.closest('.find-more__places__left__card');
        if (!clickedArticle) return;

        const imageLeft = clickedArticle.querySelector('.find-more__places__left__card--img').src;
        const userImgLeft = clickedArticle.querySelector('.find-more__places__user--img').classList[1];
        const author = clickedArticle.querySelector('.user__name').textContent;
        const title = clickedArticle.querySelector('.find-more__places__left__description-title').textContent;
        const date = clickedArticle.querySelector('.find-more__places__date-text').textContent;

        rightArticle.querySelector('.find-more__places__right__card--img').src = imageLeft;
        const userImgRight = rightArticle.querySelector('.find-more__places__user--img').classList[1];
        rightArticle.querySelector('.find-more__places__user--img').classList.remove(userImgRight);
        rightArticle.querySelector('.find-more__places__user--img').classList.add(userImgLeft);
        rightArticle.querySelector('.find-more__places__user--name').textContent = author;
        rightArticle.querySelector('h3').textContent = title;
        rightArticle.querySelector('.find-more__places__date-text').textContent = date;
    });
}