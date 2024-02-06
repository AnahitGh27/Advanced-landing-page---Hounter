export function slider() {
    const dotContainer = document.querySelector('.testimonials__dots');
    const slides = document.querySelectorAll('.testimonials__slide');
    const slider = document.querySelector('.testimonials');

    let curSlide = 1;
    const maxSlide = slides.length;

    const createDots = function() {
        slides.forEach((_, i) => {
          dotContainer.insertAdjacentHTML(
            'beforeend',
            `<button class="testimonials__dots__dot" data-slide="${i}"></button>`
          );
        })
      };

    const activateDot = function(slide) {
        document.querySelectorAll('.testimonials__dots__dot').forEach((dot) => {
            dot.classList.remove('testimonials__dots__dot--active');
        });
        
        document.querySelector(`.testimonials__dots__dot[data-slide="${slide}"]`)
            .classList.add('testimonials__dots__dot--active');
    }

    const goToSlide = function(slide) {
        slides.forEach((s, i) => {
            s.style.transform = `translateX(${100 * (-slide + 1)}%)`;
        })
    }

    const nextSlide = function() {
        curSlide === maxSlide - 1 ? curSlide = 1 : ++curSlide;
        goToSlide(curSlide);
        activateDot(curSlide);
      }

    const prevSlide = function() {
        curSlide === 0 ? curSlide = 1 : --curSlide;
        goToSlide(curSlide);
        activateDot(curSlide);
      }

    document.addEventListener('keydown', function(e) {
        e.key === 'ArrowRight' && nextSlide();
        e.key === 'ArrowLeft' && prevSlide();
    });

    dotContainer.addEventListener('click', function(e) {
        if (e.target.classList.contains('testimonials__dots__dot')) {
          const { slide } = e.target.dataset;
          goToSlide(slide);
          activateDot(slide);
        }
      });

    const init = function() {
        createDots();
        goToSlide(1);
        activateDot(1);
    }

    init();
}