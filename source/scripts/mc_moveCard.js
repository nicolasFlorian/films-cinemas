const mc_cards = document.querySelectorAll('.plan__card');

mc_cards.forEach(card => {
    animateCard(card)

    const giftBtn = card.querySelector('.btn-gift');
    giftBtn.addEventListener('click', () => {
        showNotification();
    })
})

function animateCard(card) {
    card.addEventListener('mousemove', (e) => {
        VanillaTilt.init(card, {
            max: 5,
            speed: 4000,
            transition: true,
            scale: 1.05,
        })
    })
}