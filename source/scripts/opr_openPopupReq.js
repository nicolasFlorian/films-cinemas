const opr_popup = document.querySelector('.popup-requisition');
const opr_link = document.querySelector('.link__requisition');
const opr_closeButton = opr_popup.querySelector('.popup___close-btn');
const opr_btnPlans = opr_popup.querySelector('.btn-plan');
const opr_btnTicket = opr_popup.querySelector('.btn-ticket');
const body = document.querySelector('body');

opr_link.addEventListener('click', function(){
    OpenPopUp('requisition')
});

opr_closeButton.addEventListener('click', function(){
    ClosePopUp('requisition')
})

function OpenPopUp (whichPopUp){
    const popUp = document.querySelector(`.popup-${whichPopUp}`);
    popUp.setAttribute('data-active', 'true')
    body.style.overflow = 'hidden'
}

function ClosePopUp (whichPopUp){
    const popUp = document.querySelector(`.popup-${whichPopUp}`);
    const popUpContainer = popUp.querySelector('.popup__container');

    popUp.style.animation = 'fadeOut .3s'
    popUpContainer.style.animation = 'scaleOut .3s'
    setTimeout(() => {
        popUp.setAttribute('data-active', 'false')
        body.style.overflow = ''
        popUp.style.animation = ''
        popUpContainer.style.animation = ''
    }, 300)
}

function showNotification (){
    const notification = document.querySelector('.notification');
    notification.setAttribute('data-active', 'true')
    setTimeout(() => {
        notification.style.animation = 'fadeOut .3s'
        setTimeout(() => {
            notification.style.animation = ''
            notification.setAttribute('data-active', 'false')
        }, 300)
    }, 2700)
}

opr_btnPlans.addEventListener('click', function(){
    ClosePopUp('requisition')
    ClosePopUp('movie')
})

opr_btnTicket.addEventListener('click', function(){
    this.disabled = true;
    showNotification()
    setTimeout(() => {
        this.disabled = false;
    }, 3000)
})