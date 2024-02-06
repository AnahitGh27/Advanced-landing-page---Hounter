function toggleSelect() {
    const optionsContainer = document.querySelector('.custom-select__options-container');
    const arrowIcon = document.querySelector('.custom-select__btn--icon');
    const formSelect = document.querySelector('.form__select');
    optionsContainer.classList.toggle('custom-select__options-container--active');
    if (optionsContainer.classList.contains('custom-select__options-container--active')) {
        arrowIcon.src = 'img/icons/arrow_up.svg';
        formSelect.style.marginBottom = '220px';
    } else {
        arrowIcon.src = 'img/icons/arrow_down.svg';
        formSelect.style.marginBottom = '0px';
    }
    
}
  
function selectOption(option) {
    document.getElementById('selectedOption').textContent = option;
    toggleSelect();
}
  
export  function customSelect() {
    const selectBtn = document.querySelector('.custom-select__btn');
    selectBtn.addEventListener('click', toggleSelect);

    const options = document.querySelectorAll('.custom-select__option');
    options.forEach((option) => {
        option.addEventListener('click', () => {
        selectOption(option.textContent);
        });
    });
}