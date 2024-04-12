const lf_faqItem = document.querySelectorAll('.faq__container__item');

lf_faqItem.forEach(item => {
    const faqItemTitle = item.querySelector('[data-faq-question]');
    const faqItemContent = item.querySelector('[data-faq-answer]');

    item.addEventListener('click', () => {
        faqItemTitle.setAttribute('aria-expanded', faqItemTitle.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
        faqItemContent.setAttribute('aria-hidden', faqItemContent.getAttribute('aria-hidden') === 'true' ? 'false' : 'true');
    });
});