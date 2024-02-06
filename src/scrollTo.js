export function scrollTo() {
    const btnLeft = document.querySelector('.featured-house__btn--left');
    const btnRight = document.querySelector('.featured-house__btn--right');
    const cards = document.querySelectorAll('.featured-house--slide');
    const iconLeft = document.querySelector('.featured-house__arrow--left');
    const iconRight = document.querySelector('.featured-house__arrow--right');

    const nextSlide = function() {
        cards.forEach((s) => {
            s.style.transform = `translateX(-100%)`;
        });
    }

    const prevSlide = function() {
        cards.forEach((s) => {
            s.style.transform = `translateX(0%)`;
        });
    }

    const changeRightToLeft = function() {
            btnRight.classList.remove.apply(btnRight.classList, ['btn--only-icon--primary']);
            btnRight.classList.add.apply(btnRight.classList, ['btn--secondary', 'btn--secondary--only-icon']);
            btnLeft.classList.remove.apply(btnLeft.classList, ['btn--secondary', 'btn--secondary--only-icon']);
            btnLeft.classList.add.apply(btnLeft.classList, ['btn--only-icon--primary']);
            iconLeft.classList.remove('btn__icon--tertiary');
            iconLeft.classList.add('btn__icon');
            iconRight.classList.remove('btn__icon');
            iconRight.classList.add('btn__icon--tertiary');
    }

    const changeLeftToRight = function() {
        btnLeft.classList.remove.apply(btnLeft.classList, ['btn--only-icon--primary']);
        btnLeft.classList.add.apply(btnLeft.classList, ['btn--secondary', 'btn--secondary--only-icon']);
        btnRight.classList.remove.apply(btnRight.classList, ['btn--secondary', 'btn--secondary--only-icon']);
        btnRight.classList.add.apply(btnRight.classList, ['btn--only-icon--primary']);
        iconRight.classList.remove('btn__icon--tertiary');
        iconRight.classList.add('btn__icon');
        iconLeft.classList.remove('btn__icon');
        iconLeft.classList.add('btn__icon--tertiary');
    }

    btnRight.addEventListener('click', function() {
        changeRightToLeft();
        nextSlide();
    });

    btnLeft.addEventListener('click', function() {
        changeLeftToRight();
        prevSlide();
    });
}
