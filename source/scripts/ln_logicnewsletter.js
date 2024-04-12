const ln_form = document.querySelector('.newsletter__container__form');
const ln_input = ln_form.querySelector('input[type="email"]');
const ln_button = ln_form.querySelector('button');

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;


ln_input.addEventListener('input', () => {
    if(ln_input.value.length > 0){
        ln_button.removeAttribute('disabled');
        ln_button.addEventListener('click', function(e){
            if(!emailRegex.test(ln_input.value)){
                e.preventDefault();
                ln_input.classList.add('error');
            }else{
                ln_input.classList.remove('error');
            }

            e.preventDefault();
        })
    }else{
        ln_button.setAttribute('disabled', 'disabled');
    }
})