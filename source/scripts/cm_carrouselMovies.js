// CONTAINER MOVIES

const cm_movies = document.querySelector('.theaters__container');
const cm_moviesList = cm_movies.querySelector('.movies__container__cards');
const cm_moviesItems = cm_moviesList.querySelectorAll('.card');
const cm_mask = document.querySelectorAll('.movies__slide__container .mask');

// CONTROL BUTTONS CARROUSEL

const cm_controlButtons = document.querySelector('.controls__buttons');
const allBtn = cm_controlButtons.querySelectorAll('button')
const btnPrev = cm_controlButtons.querySelector('[data-to="prev"]');
const btnNext = cm_controlButtons.querySelector('[data-to="next"]');

// OPTIONS

const cardSize = {
    width: cm_moviesItems[0].offsetWidth,
    gapSize: parseInt(getComputedStyle(cm_moviesList).getPropertyValue('gap'))
};



function lookAreaHidden() {
    const totalListWidth = cm_moviesList.scrollWidth;
    const areaHiddenExist = totalListWidth > cm_moviesList.offsetWidth ? true : false;

    return areaHiddenExist;
}



if(lookAreaHidden()){
    ableButtons();
    moveSlide();
    ableMask();
}

function ableButtons(){
    btnPrev.setAttribute("aria-disabled", true);
    btnNext.setAttribute("aria-disabled", false);

    cm_moviesList.addEventListener('scroll', () => {
        // CONTROL THE BUTTONS
        let areaHiddenLeft = cm_moviesList.scrollWidth - cm_moviesList.scrollLeft - cm_moviesList.clientWidth;

        if(areaHiddenLeft === 0){
            btnNext.setAttribute("aria-disabled", true);
        }else if(cm_moviesList.scrollLeft === 0){
            btnPrev.setAttribute("aria-disabled", true);
        }else{
            btnPrev.setAttribute("aria-disabled", false);
            btnNext.setAttribute("aria-disabled", false);
        }
    })


}


function moveSlide(){
    let totalAreaHidden = cm_moviesList.scrollWidth - cm_moviesList.clientWidth;

    btnNext.addEventListener('click', () => {

        if(btnNext.getAttribute("aria-disabled") !== "true" && totalAreaHidden > cardSize.width){
            cm_moviesList.scrollBy({left: cardSize.width + cardSize.gapSize, behavior: 'smooth'});
            totalAreaHidden -= (cardSize.width + cardSize.gapSize)
        }else{
            cm_moviesList.scrollBy({left: totalAreaHidden, behavior: 'smooth'});
            totalAreaHidden = 0;
        }
    });

    btnPrev.addEventListener('click', () => {
        if(btnPrev.getAttribute("aria-disabled") !== "true"){
            cm_moviesList.scrollBy({left: -cardSize.width - cardSize.gapSize, behavior: 'smooth'});
            totalAreaHidden += (cardSize.width + cardSize.gapSize)
            console.log("From Prev" + totalAreaHidden)
        }
    });
}


let hasReachedRight = false;
let hasReturnedLeft = false;

function ableMask(){
    cm_moviesList.addEventListener('scroll', () => {
        let areaHiddenLeft = cm_moviesList.scrollWidth - cm_moviesList.scrollLeft - cm_moviesList.clientWidth;
        
        if(areaHiddenLeft === 0){
            hasReachedRight = true;
            hasReturnedLeft = false;
        }

        if(cm_moviesList.scrollLeft === 0){
            hasReturnedLeft = true;
            hasReachedRight = false;
        }

        if(hasReachedRight && hasReturnedLeft == false){
            cm_mask[1].setAttribute("aria-hidden", true);
            cm_mask[0].setAttribute("aria-hidden", false);
        }else if(hasReturnedLeft && hasReachedRight == false){
            cm_mask[0].setAttribute("aria-hidden", true);
            cm_mask[1].setAttribute("aria-hidden", false);
        }
    })
}

