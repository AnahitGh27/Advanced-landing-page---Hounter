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
    const selectedOption = document.getElementById('selectedOption');
    selectedOption.textContent = option;
    selectedOption.style.color = '#1B1C57';
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

    document.addEventListener('click', (event) => {
        const target = event.target;
        const isCustomSelect = target.closest('.custom-select');

        if (!isCustomSelect) {
            const optionsContainer = document.querySelector('.custom-select__options-container');
            optionsContainer.classList.remove('custom-select__options-container--active');
            const arrowIcon = document.querySelector('.custom-select__btn--icon');
            arrowIcon.src = 'img/icons/arrow_down.svg';
        }
    });
}