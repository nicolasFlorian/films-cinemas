const popUpCheckout = document.querySelector('.popup-checkout');
const popUpCheckoutClose = popUpCheckout.querySelector('.popup__close-btn');
const cardUi = popUpCheckout.querySelector('.card-ui__container');
const planCards = document.querySelectorAll('.plan__card');

planCards.forEach(card => {
    const subscribeBtn = card.querySelector('.btn-success');
    subscribeBtn.addEventListener('click', () => {
        const cardPrice = card.querySelector('.plan__card__price').textContent.replace(/[^\d,]/g, '');
        const cardTitle = card.querySelector('.plan__card__title').textContent;

        OpenPopUp('checkout');
        const checkoutPlan = popUpCheckout.querySelector('.plan__chosen');
        checkoutPlan.textContent = `PLANO ${cardTitle}`;
        const checkoutPrice = popUpCheckout.querySelector('.amount__plan__chosen');
        const checkoutPriceValue = checkoutPrice.querySelector('.amount');
        const checkoutPriceCents = checkoutPrice.querySelector('.cents');
        const [price, cents] = cardPrice.split(',');
        checkoutPriceValue.textContent = price;
        checkoutPriceCents.textContent = `,${cents}0`;
    })
})

cardUi.addEventListener('mousemove', (e) => {
    VanillaTilt.init(cardUi, {
        max: 3,
        speed: 4000,
        transition: true,
        scale: 1.03,
        glare: true,
        'max-glare': 0.1
    })
})

popUpCheckoutClose.addEventListener('click', () => {
    ClosePopUp('checkout');
})

const inputs = {
    name: popUpCheckout.querySelector('.popup-checkout input#name'),
    email: popUpCheckout.querySelector('.popup-checkout input#email__checkout'),
    cardNumber: popUpCheckout.querySelector('.popup-checkout input#card'),
    validity: popUpCheckout.querySelector('.popup-checkout input#date'),
    cvv: popUpCheckout.querySelector('.popup-checkout input#cvv'),
    submit: popUpCheckout.querySelector('.popup-checkout button.btn-success')
}

const cardElements = {
    name: popUpCheckout.querySelector('.person__name'),
    number: popUpCheckout.querySelector('.number__card'),
    validity: popUpCheckout.querySelector('.date'),
    cvv: popUpCheckout.querySelector('.cvv__card'),
    flag: popUpCheckout.querySelector('.type__icon'),
}

const paymentCards = {
    mastercard: {
        name: 'Mastercard',
        regex: /^5[1-5][0-9]{5,}|222[1-9][0-9]{3,}|22[3-9][0-9]{4,}|2[3-6][0-9]{5,}|27[01][0-9]{4,}|2720[0-9]{3,}$/,
        id: 'mastercard'
    },
    visa: {
        name: 'Visa',
        regex:/^4[0-9]{6,}$/,
        id: 'visa'
    },
    americanExpress: {
        name: 'American Express',
        regex: /^3[47][0-9]{5,}$/,
        id: 'american-express'
    },
    discover: {
        name: 'Discover',
        regex: /^6(?:011|5[0-9]{2})[0-9]{3,}$/,
        id: 'discover'
    },
    dinersClub: {
        name: 'Diners Club',
        regex: /^3(?:0[0-5]|[68][0-9])[0-9]{4,}$/,
        id: 'diners-club'
    },
    jcb: {
        name: 'JCB',
        regex: /^(?:2131|1800|35[0-9]{3})[0-9]{3,}$/,
        id: 'jcb'
    },
}

const regexs = {
    cvv: /^[0-9]{3,4}$/,
    date: /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/
}

inputs.name.addEventListener('input', () => {
    cardElements.name.textContent = inputs.name.value;

    if(inputs.name.value.length > 0){
        cardElements.name.setAttribute('data-placeholder', 'false')
    }else{
        cardElements.name.textContent = 'Nome no cartão'
        cardElements.name.setAttribute('data-placeholder', 'true')
    }    
})

validateInputs();


function validateInputs(){

    inputs.submit.addEventListener('click', (e) => {
        e.preventDefault();

        if(!emailRegex.test(inputs.email.value)){
            e.preventDefault();
            inputs.email.classList.add('error');
        }else{
            inputs.email.classList.remove('error');
        }

        if(inputs.name.value.length === 0){
            inputs.name.classList.add('error');
        }else{
            inputs.name.classList.remove('error');
        }

        if(inputs.cardNumber.value.length === 0){
            inputs.cardNumber.classList.add('error');
            inputs.validity.classList.add('error');
            inputs.cvv.classList.add('error');
        }else{
            inputs.cardNumber.classList.remove('error');
            inputs.validity.classList.remove('error');
            inputs.cvv.classList.remove('error');
        }
    })

    inputs.cardNumber.addEventListener('input', () => {

        inputs.cardNumber.value = inputs.cardNumber.value.replace(/\D/g, '');

        if (inputs.cardNumber.value.length > 16) {
            inputs.cardNumber.value = inputs.cardNumber.value.slice(0, 16);
        }

        inputs.cardNumber.value = inputs.cardNumber.value.replace(/(\d{4})/g, '$1 ').trim();

        cardElements.number.textContent = inputs.cardNumber.value;

        let valueTrim = inputs.cardNumber.value.replace(/\s/g, '');

        if(inputs.cardNumber.value.length > 0){
            for(const card in paymentCards){
                if(paymentCards[card].regex.test(valueTrim)){
                    cardElements.flag.setAttribute('data-flag', card);
                    cardElements.flag.querySelector('use').setAttribute('xlink:href', `dist/icons/payment/symbol/sprite.svg#${paymentCards[card].id}`);
                    break;
                }
            }
        }

        if(inputs.cardNumber.value.length > 0){
            cardElements.number.setAttribute('data-placeholder', 'false')
        }else{
            cardElements.number.textContent = '0000 0000 0000 0000'
            cardElements.number.setAttribute('data-placeholder', 'true')
        }
    })

    inputs.cvv.addEventListener('input', () => {
        inputs.cvv.value = inputs.cvv.value.replace(/[^0-9]/g, '');
    
        setTimeout(() => {
            if (inputs.cvv.value.length > 4) {
                inputs.cvv.value = inputs.cvv.value.slice(0, 4);
            }
            cardElements.cvv.textContent = inputs.cvv.value.replace(/./g, '*');
    
            if(inputs.cvv.value.length > 0){
                cardElements.cvv.setAttribute('data-placeholder', 'false')
            }else{
                cardElements.cvv.textContent = '***'
                cardElements.cvv.setAttribute('data-placeholder', 'true')
            }
        }, 0);
    });

    inputs.validity.addEventListener('input', () => {
        inputs.validity.value = inputs.validity.value.replace(/[^0-9\/]/g, '');
        if (inputs.validity.value.length === 2 && !inputs.validity.value.includes('/')) {
            inputs.validity.value += '/';
        } else if (inputs.validity.value.length > 5) {
            inputs.validity.value = inputs.validity.value.slice(0, 5);
        } else if (inputs.validity.value.length <= 2 && inputs.validity.value.includes('/')) {
            inputs.validity.value = inputs.validity.value.slice(0, 1);
        }
        cardElements.validity.textContent = inputs.validity.value;

        if(inputs.validity.value.length > 0){
            cardElements.validity.setAttribute('data-placeholder', 'false')
        }else{
            cardElements.validity.textContent = '00/00'
            cardElements.validity.setAttribute('data-placeholder', 'true')
        }
    });

}