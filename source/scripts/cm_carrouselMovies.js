// CONTAINER MOVIES

const cm_movies = document.querySelector('.theaters__container');
const cm_moviesList = Array.from(cm_movies.querySelectorAll('.theaters__container__movies'));


cm_moviesList.forEach(listContainer => {
    const list = listContainer.querySelector('.movies__container__cards');
    const Items = listContainer.querySelectorAll('.card');
    const mask = listContainer.querySelectorAll('.movies__slide__container .mask');

    const cardSize = {
        width: Items[0].offsetWidth,
        gapSize: parseInt(getComputedStyle(list).getPropertyValue('gap'))
    };

    if (lookAreaHidden(list)) {
        ableButtons(listContainer, list);
        moveSlide(listContainer, list, cardSize);
        ableMask(list, mask);
        enableTouchScroll(list);
    }
});

function lookAreaHidden(list) {

    const totalListWidth = list.scrollWidth;
    const areaHiddenExist = totalListWidth > list.offsetWidth ? true : false;

    return areaHiddenExist;
}

function ableButtons(listContainer, list){
    const btnPrev = listContainer.querySelector('[data-to="prev"]');
    const btnNext = listContainer.querySelector('[data-to="next"]');

    btnPrev.setAttribute("aria-disabled", true);
    btnNext.setAttribute("aria-disabled", false);

    list.addEventListener('scroll', () => {
        // CONTROL THE BUTTONS
        let areaHiddenLeft = list.scrollWidth - list.scrollLeft - list.clientWidth;

        if(areaHiddenLeft === 0){
            btnNext.setAttribute("aria-disabled", true);
        }else if(list.scrollLeft === 0){
            btnPrev.setAttribute("aria-disabled", true);
        }else{
            btnPrev.setAttribute("aria-disabled", false);
            btnNext.setAttribute("aria-disabled", false);
        }
    })
}

function moveSlide(listContainer, list, cardSize){
    const btnPrev = listContainer.querySelector('[data-to="prev"]');
    const btnNext = listContainer.querySelector('[data-to="next"]');
    let totalAreaHidden = list.scrollWidth - list.clientWidth;

    btnNext.addEventListener('click', () => {
        if(btnNext.getAttribute("aria-disabled") !== "true" && totalAreaHidden > cardSize.width){
            list.scrollBy({left: cardSize.width + cardSize.gapSize, behavior: 'smooth'});
            totalAreaHidden -= (cardSize.width + cardSize.gapSize)
        }else{
            list.scrollBy({left: totalAreaHidden, behavior: 'smooth'});
            totalAreaHidden = 0;
        }
    });

    btnPrev.addEventListener('click', () => {
        if(btnPrev.getAttribute("aria-disabled") !== "true"){
            list.scrollBy({left: -cardSize.width - cardSize.gapSize, behavior: 'smooth'});
            totalAreaHidden += (cardSize.width + cardSize.gapSize)
        }
    });
}

function ableMask(list, mask){
    let hasReachedRight = false;
    let hasReturnedLeft = false;

    list.addEventListener('scroll', () => {
        let areaHiddenLeft = list.scrollWidth - list.scrollLeft - list.clientWidth;
        
        if(areaHiddenLeft === 0){
            hasReachedRight = true;
            hasReturnedLeft = false;
        }

        if(list.scrollLeft === 0){
            hasReturnedLeft = true;
            hasReachedRight = false;
        }

        if(hasReachedRight && hasReturnedLeft == false){
            mask[1].setAttribute("aria-hidden", true);
            mask[0].setAttribute("aria-hidden", false);
        }else if(hasReturnedLeft && hasReachedRight == false){
            mask[0].setAttribute("aria-hidden", true);
            mask[1].setAttribute("aria-hidden", false);
        }
    })
}

function enableTouchScroll(list) {
    let startX = 0;
    let scrollLeft = 0;

    list.addEventListener('touchstart', (e) => {
        startX = e.touches[0].pageX - list.offsetLeft;
        scrollLeft = list.scrollLeft;
    });

    list.addEventListener('touchmove', (e) => {
        e.preventDefault();
        const x = e.touches[0].pageX - list.offsetLeft;
        const walk = (x - startX);
        list.scrollLeft = scrollLeft - walk;
    });
}