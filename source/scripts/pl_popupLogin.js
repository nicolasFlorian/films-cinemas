const popupLogin = document.querySelector('.popup-login');
const popupLoginClose = popupLogin.querySelector('.popup___close-btn');
const loginBtn = document.querySelector('.btn-dropdown .option-1');
const directoryPath = 'dist/videos/login'
const videoOptions = {
    video1: {
        name: 'Anatomy of a fall',
        src: 'anatomy-of-a-fall.mp4',
        namePt: 'Anatomia de uma Queda',
        star: 4.2,
        link: 'https://boxd.it/yuDE',
    },
    video2: {
        name: 'Challengers',
        src: 'challengers.mp4',
        namePt: 'Challengers',
        star: 4,
        link: 'https://boxd.it/zld0'
    },
    video3: {
        name: 'Dune - Part 2',
        src: 'dune-2.mp4',
        namePt: 'Duna - Parte 2',
        star: 4.5,
        link: 'https://boxd.it/pUfA'
    },
    video4: {
        name: 'Poor Things',
        src: 'poor-things.mp4',
        namePt: 'Pobres Criaturas',
        star: 4.1,
        link: 'https://boxd.it/tNWU',
    }
}
const starContainer = popupLogin.querySelector('.stars__container');


popupLoginClose.addEventListener('click', () => {
    ClosePopUp('login');
})

loginBtn.addEventListener('click', () => {
    OpenPopUp('login');
    const btnDropdown = document.querySelector('.btn-dropdown__select');
    btnDropdown.setAttribute('aria-expanded', 'false');

    popUpLoginBehavior();
    playVideo(videoOptions);
    videoBehavior();
})


function popUpLoginBehavior(){
    const forgetPassword = popupLogin.querySelector('.form__forget__passwrod a');
    const register = popupLogin.querySelector('.login__register a');

    forgetPassword.addEventListener('click', () => {
        showNotification();
    })
    register.addEventListener('click', () => {
        showNotification();
    })
}

function createStars(){
    const howManyStars = parseFloat(starContainer.getAttribute('data-star'));

    if(Number.isInteger(howManyStars)){
        console.log('is integer');
        starContainer.setAttribute('data-clip', 'false')
    }else{
        starContainer.setAttribute('data-clip', 'true')
    }
    
    for (let i = 0; i < howManyStars; i++){
        const star = CreteElements(`
        <svg class="star">
            <use xlink:href="dist/icons/normal/symbol/sprite.svg#star"></use>
        </svg>
        `)
        starContainer.appendChild(star);
    }
}

function playVideo(options){
    const videoContainer = popupLogin.querySelector('.video__bg__container');
    const video = videoContainer.querySelector('video');
    const videoSource = video.querySelector('source');
    const videoTitle = popupLogin.querySelector('.title__container h3');
    const videoLink = popupLogin.querySelector('.logo__container a');

    const keys = Object.keys(options);
    let index = 0;

    videoSource.src = `${directoryPath}/${options[keys[index]].src}`;

    videoTitle.textContent = options[keys[index]].namePt;
    videoLink.href = options[keys[index]].link;
    starContainer.setAttribute('data-star', options[keys[index]].star);
    createStars();

    popupLoginClose.addEventListener('click', () => {
        index = 0;
        starContainer.innerHTML = '';
    })

    video.addEventListener('ended', () => {
        index++;
        let stars = starContainer.querySelectorAll('.star');
        let starsIndex = stars.length - 1;

        if (index < keys.length) {
            videoSource.src = `${directoryPath}/${options[keys[index]].src}`;
            videoTitle.style.animation = 'slideOutY2 0.5s ease forwards'
            videoTitle.addEventListener('animationend', () => {
                videoTitle.textContent = options[keys[index]].namePt;
                videoTitle.style.animation = 'slideInY2 0.5s ease forwards'
            })
            videoLink.href = options[keys[index]].link;
            starContainer.setAttribute('data-star', options[keys[index]].star);
            stars.forEach((star, index) => {
                star.style.animation = `slideOutY2 ${index * 0.3}s forwards`;
            })
            stars[starsIndex].addEventListener('animationend', () => {
                starContainer.innerHTML = '';
                createStars();
                stars = starContainer.querySelectorAll('.star');
                stars.forEach((star, index) => {
                    star.style.animation = `slideInY2 ${index * 0.3}s forwards`;
                })
            })
            video.load();
        }else{
            index = 0;
            videoSource.src = `${directoryPath}/${options[keys[index]].src}`;
            videoTitle.style.animation = 'slideOutY2 0.5s ease-in-out forwards'
            videoTitle.addEventListener('animationend', () => {
                videoTitle.textContent = options[keys[index]].namePt;
                videoTitle.style.animation = 'slideInY2 0.5s ease-in-out forwards'
            })
            videoLink.href = options[keys[index]].link;
            starContainer.setAttribute('data-star', options[keys[index]].star);
            stars.forEach((star, index) => {
                star.style.animation = `slideOutY2 ${index * 0.3}s forwards`;
            })
            stars[starsIndex].addEventListener('animationend', () => {
                starContainer.innerHTML = '';
                createStars();
                stars = starContainer.querySelectorAll('.star');
                stars.forEach((star, index) => {
                    star.style.animation = `slideInY2 ${index * 0.3}s forwards`;
                })
            })
            video.load();
        }
    });

    video.load();
}

function videoBehavior(){
    const video = popupLogin.querySelector('video');
    const iconContainer = popupLogin.querySelector('.icons__video__container');
    const iconPlay = popupLogin.querySelector('svg.play');
    const iconPause = popupLogin.querySelector('svg.pause');
    const iconLink = popupLogin.querySelector('.logo__container a');

    video.addEventListener('click', () => {
        if(video.paused){
            video.play();
            iconContainer.setAttribute('data-behavior', 'paused');
            iconPause.style.animation = 'fadeIn 0.5s forwards';
            setTimeout(() => {
                iconPause.style.animation = 'fadeOut 0.5s forwards';
                iconContainer.setAttribute('data-behavior', 'none');
            }, 2000)
        }else{
            video.pause();
            iconContainer.setAttribute('data-behavior', 'played');
            iconPlay.style.animation = 'fadeIn 0.5s forwards';
        }
    })

    iconLink.addEventListener('click', () => {
        video.pause();
        iconContainer.setAttribute('data-behavior', 'played');
        iconPlay.style.animation = 'fadeIn 0.5s forwards';
    })

}