const toogleAria_btnDays = document.querySelectorAll('.theaters__button');

toogleAria_btnDays.forEach((btn) => {
    btn.addEventListener('click', () => {
        const selected = btn.getAttribute('aria-selected');

        if (selected === 'false') {
            toogleAria_btnDays.forEach((btn) => {
                btn.setAttribute('aria-selected', 'false');
            })
            btn.setAttribute('aria-selected', 'true');
        };
    });
});