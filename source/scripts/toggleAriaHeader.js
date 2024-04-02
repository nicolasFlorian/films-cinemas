const toogleAria_btnDropdown = document.querySelector('.btn-dropdown');
const toogleAria_btnSelect = toogleAria_btnDropdown.querySelector('.btn-dropdown__select');
const toogleAria_btnOptions = toogleAria_btnDropdown.querySelector('.btn-dropdown__options');

toogleAria_btnSelect.addEventListener('click', () => {
    const expanded = toogleAria_btnSelect.getAttribute('aria-expanded') === 'true';
    toogleAria_btnSelect.setAttribute('aria-expanded', !expanded);
    toogleAria_btnOptions.setAttribute('aria-hidden', expanded);
});