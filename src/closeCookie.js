export function closeCookie() {
    const closeBtn = document.querySelector('.footer__bottom__close-icon');
    const cookieBanner = document.querySelector('.footer__cookie-btn');
    
    closeBtn.addEventListener('click', function() {
        cookieBanner.style.display = 'none';
    })
}