const popupTicket = document.querySelector('.popup-ticket');
const popupTicketClose = popupTicket.querySelector('.popup__close-btn');
const formTicket = popupTicket.querySelector('form');
const ticketBtn = document.querySelector('.btn-dropdown__options__option.option-2');

popupTicketClose.addEventListener('click', () => {
    ClosePopUp('ticket');
})

ticketBtn.addEventListener('click', () => {
    OpenPopUp('ticket');
    formBehavior();
})

function formBehavior(){
    const input = formTicket.querySelector('input');
    const btn = formTicket.querySelector('button');

    input.addEventListener('input', () => {
        if(input.value.length > 0){
            btn.removeAttribute('disabled');
            btn.addEventListener('click', function(e){
                e.preventDefault();
                if(!emailRegex.test(input.value)){
                    input.classList.add('error');
                }else{
                    input.classList.remove('error');
                    showNotification();
                }
            })
        }else{
            btn.setAttribute('disabled', 'disabled');
        }
    })
}