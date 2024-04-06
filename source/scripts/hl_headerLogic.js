const hl_header = document.querySelector('header.header');
const hl_logo = hl_header.querySelector('.header-logo')
const hl_hero =  document.querySelector('section.hero');

window.addEventListener('scroll', () => {
    this.window.scrollY > (hl_hero.clientHeight / 2) ? hl_logo.setAttribute("aria-hidden", false) : hl_logo.setAttribute("aria-hidden", true)
})