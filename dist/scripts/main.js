const cm_movies=document.querySelector(".theaters__container"),cm_moviesList=Array.from(cm_movies.querySelectorAll(".theaters__container__movies"));function lookAreaHidden(e){return e.scrollWidth>e.offsetWidth}function ableButtons(e,t){const a=e.querySelector('[data-to="prev"]'),n=e.querySelector('[data-to="next"]');a.setAttribute("aria-disabled",!0),n.setAttribute("aria-disabled",!1),t.addEventListener("scroll",()=>{0==t.scrollWidth-t.scrollLeft-t.clientWidth?n.setAttribute("aria-disabled",!0):0===t.scrollLeft?a.setAttribute("aria-disabled",!0):(a.setAttribute("aria-disabled",!1),n.setAttribute("aria-disabled",!1))})}function moveSlide(e,t,a){const n=e.querySelector('[data-to="prev"]'),r=e.querySelector('[data-to="next"]');let i=t.scrollWidth-t.clientWidth;r.addEventListener("click",()=>{"true"!==r.getAttribute("aria-disabled")&&i>a.width?(t.scrollBy({left:a.width+a.gapSize,behavior:"smooth"}),i-=a.width+a.gapSize):(t.scrollBy({left:i,behavior:"smooth"}),i=0)}),n.addEventListener("click",()=>{"true"!==n.getAttribute("aria-disabled")&&(t.scrollBy({left:-a.width-a.gapSize,behavior:"smooth"}),i+=a.width+a.gapSize)})}function ableMask(e,t){let a=!1,n=!1;e.addEventListener("scroll",()=>{0==e.scrollWidth-e.scrollLeft-e.clientWidth&&(a=!0,n=!1),0===e.scrollLeft&&(n=!0,a=!1),a&&0==n?(t[1].setAttribute("aria-hidden",!0),t[0].setAttribute("aria-hidden",!1)):n&&0==a&&(t[0].setAttribute("aria-hidden",!0),t[1].setAttribute("aria-hidden",!1))})}function enableTouchScroll(t){let a=0,n=0;t.addEventListener("touchstart",e=>{a=e.touches[0].pageX-t.offsetLeft,n=t.scrollLeft}),t.addEventListener("touchmove",e=>{e.preventDefault();e=e.touches[0].pageX-t.offsetLeft-a;t.scrollLeft=n-e})}cm_moviesList.forEach(e=>{var t=e.querySelector(".movies__container__cards"),a=e.querySelectorAll(".card"),n=e.querySelectorAll(".movies__slide__container .mask"),a={width:a[0].offsetWidth,gapSize:parseInt(getComputedStyle(t).getPropertyValue("gap"))};lookAreaHidden(t)&&(ableButtons(e,t),moveSlide(e,t,a),ableMask(t,n),enableTouchScroll(t))});const hl_header=document.querySelector("header.header"),hl_logo=hl_header.querySelector(".header-logo"),hl_hero=document.querySelector("section.hero"),ldm_btnDays=(window.addEventListener("scroll",()=>{this.window.scrollY>hl_hero.clientHeight/2?hl_logo.setAttribute("aria-hidden",!1):hl_logo.setAttribute("aria-hidden",!0)}),document.querySelectorAll("button[data-day]")),ldm_movies=document.querySelectorAll("div[data-day-id]");function verifyDay(t){ldm_movies.forEach(e=>{e.getAttribute("data-day-id")===t?e.style.display="flex":e.style.display="none"})}ldm_btnDays.forEach(e=>{e.addEventListener("click",function(){verifyDay(this.getAttribute("data-day"))})}),verifyDay(ldm_btnDays[0].getAttribute("data-day"));const lf_faqItem=document.querySelectorAll(".faq__container__item"),lmp_moviesItem=(lf_faqItem.forEach(e=>{const t=e.querySelector("[data-faq-question]"),a=e.querySelector("[data-faq-answer]");e.addEventListener("click",()=>{t.setAttribute("aria-expanded","true"===t.getAttribute("aria-expanded")?"false":"true"),a.setAttribute("aria-hidden","true"===a.getAttribute("aria-hidden")?"false":"true")})}),document.querySelectorAll(".movies__container__cards .card"));function checkMovie(e,t){{var a=t;const v=new Date;v.setHours(9,15,0),(a=a.querySelectorAll(".card")).forEach((e,t)=>{0!==t&&(t=parseInt(e.querySelector(".card__time").textContent.match(/\d+/)[0]),v.setMinutes(v.getMinutes()+t),v.setMinutes(v.getMinutes()+30));var t=5*Math.round(v.getMinutes()/5),a=(v.setMinutes(t),v.getHours().toString().padStart(2,"0")),t=v.getMinutes().toString().padStart(2,"0");e.setAttribute("data-time",a+":"+t)})}a=e.querySelector(".card__title").textContent;let n,r,i,o,s;var l=e.querySelector(".card__time").textContent,c=t.querySelector("h3").textContent.match(/\d+/)[0],t=t.dataset.dayId,d=e.dataset.time,u={jpg:new URL(e.querySelector(".card__image picture img").src).pathname,webp:e.querySelector(".card__image picture source").srcset},p={total:parseInt(e.querySelector(".card__seats__container span").textContent.match(/\d+/g)[1]),unavailable:parseInt(e.querySelector(".card__seats__container span").textContent.match(/\d+/g)[0]),available:parseInt(e.querySelector(".card__seats__container span").textContent.match(/\d+/g)[1])-parseInt(e.querySelector(".card__seats__container span").textContent.match(/\d+/g)[0])},e=e.querySelector(".card__title__container div.icon-r__container").dataset.active;switch(!0){case a.includes("Anatomia de uma Queda"):n="Justine Triet",r="Drama",i="2023",o="https://www.youtube.com/watch?v=FUXawkH-ONM",s="16";break;case a.includes("Black Swan"):n="Darren Aronofsky",r="Drama",i="2010",o="https://www.youtube.com/watch?v=5jaI1XOB-bs",s="16";break;case a.includes("Duna - Parte 2"):n="Denis Villeneuve",r="Ficção Científica",i="2024",o="https://www.youtube.com/watch?v=Way9Dexny3w",s="12";break;case a.includes("Godzilla vs. Kong"):n="Adam Wingard",r="Ação",i="2024",o="https://www.youtube.com/watch?v=lV1OOlGwExM",s="12";break;case a.includes("Immaculate"):n="Michael Mohan",r="Terror",i="2024",o="https://www.youtube.com/watch?v=sDhsfV7r_1w",s="16";break;case a.includes("Pobres Criaturas"):n="Yorgos Lanthimos",r="Drama",i="2023",o="https://www.youtube.com/watch?v=RlbR5N6veqw",s="18";break;case a.includes("Back to Black"):n="Sam Taylor-Johnson",r="Drama/Biografia",i="2024",o="https://www.youtube.com/watch?v=rYzIOBwyhIU",s="14";break;case a.includes("Dona Lurdes"):n="Cristiano Marques",r="Comédia",i="2024",o="https://www.youtube.com/watch?v=Iey0SFyUxCk",s="all";break;case a.includes("Ghostbusters Apocalipse de Gelo"):n="Gil Kenan",r="Ação/Terror",i="2024",o="https://www.youtube.com/watch?v=HpOBXh02rVc",s="12";break;case a.includes("Challengers"):n="Luca Guadagnino",r="Drama",i="2024",o="https://www.youtube.com/watch?v=VobTTbg-te0",s="16";break;case a.includes("Maxxxine"):n="Ti West",r="Terror",i="2024",o="https://www.youtube.com/watch?v=y0uS3t6nFgY",s="18";break;case a.includes("Kung Fu Panda 4"):n="Mike Mitchell",r="Animação",i="2024",o="https://www.youtube.com/watch?v=XnQF9sqgZLE",s="all";break;case a.includes("O Menino e a Garça"):n="Hayao Miyazaki",r="Animação",i="2023",o="https://www.youtube.com/watch?v=t5khm-VjEu4",s="all";break;case a.includes("Matador de Aluguel"):n="Doug Liman",r="Ação",i="2024",o="https://www.youtube.com/watch?v=Y0ZsLudtfjI",s="16";break;case a.includes("A Rede Social"):n="David Fincher",r="Drama",i="2010",o="https://www.youtube.com/watch?v=lB95KLmpLR4",s="14";break;case a.includes("X"):n="Ti West",r="Terror",i="2022",o="https://www.youtube.com/watch?v=Awg3cWuHfoc",s="18";break;case a.includes("Pearl"):n="Ti West",r="Terror",i="2023",o="https://www.youtube.com/watch?v=L5PW5r3pEOg",s="18";break;case a.includes("Furiosa"):n="George Miller",r="Ação",i="2024",o="https://www.youtube.com/watch?v=XJMuhwVlca4",s="14";break;case a.includes("Divertidamente 2"):n="Kelsey Mann",r="Animação",i="2024",o="https://www.youtube.com/watch?v=LEjhY15eCx0",s="all";break;case a.includes("Zona de Interesse"):n="Jonathan Glazer",r="Drama",i="2023",o="https://www.youtube.com/watch?v=r-vfg3KkV54",s="16";break;case a.includes("Instinto de Mãe"):n="Benoît Delhomme",r="Drama",i="2023",o="https://www.youtube.com/watch?v=aLikloRQiUE",s="14";break;case a.includes("Spirited Away"):n="Hayao Miyazaki",r="Animação",i="2001",o="https://www.youtube.com/watch?v=ByXuk9QqQkk",s="all";break;default:n="Desconhecido",r="Desconhecido",i="Desconhecido",o="",s="unknown"}return CreateMoviePopUp({title:a,director:n,genre:r,year:i,trailer:o,age:s,time:l,room:c,date:t,begin:d,movieImage:u,movieSeats:p,requisition:e})}function CreteElements(e){var t=document.createElement("template");return t.innerHTML=e.trim(),t.content.firstElementChild}function CreateMoviePopUp(e){var t=CreteElements('<div class="popup popup-movie"></div>'),a=CreteElements(`
    <div class="popup__container">
    </div>
    `),n=CreteElements(`
    <div class="movie__details__container">
        <div class="movie__details">
            <div class="title__container">
            <h2>${e.title}</h2>
            <div class="icon-r__container" data-active="${e.requisition}">
                <span>R</span>
            </div>
            </div>

            <div class="movie__info__container">
                <div class="movie__direction movie__info">
                    <span class="movie__details__label">${e.year} - Dirigido por:</span>
                    <span class="movie__details__value">${e.director}</span>
                </div>
                <div class="movie__genre movie__info">
                    <span class="movie__details__label">Gênero:</span>
                    <span class="movie__details__value">${e.genre}</span>
                </div>
            </div>

            <div class="movie__duration__container">
                <a href="${e.trailer}" target="_blank" class="btn-primary">
                    <svg>
                        <use xlink:href="dist/icons/normal/symbol/sprite.svg#play"></use>
                    </svg>
                    Trailer
                </a>
                <span class="movie__duration">${e.time}</span>
            </div>
        </div>

        <div class="movie__image">
            <picture>
                <source srcset="${e.movieImage.webp}">
                <img src="${e.movieImage.jpg}" alt="${e.title}">
            </picture>
        </div>


        <div class="session__details__container">
            <div class="btn-primary room session__btn__container">
                <span>Sala</span>
                <span>${e.room}</span>
            </div>

            <div class="btn-primary date session__btn__container">
                <span>Data</span>
                <span>${e.date}</span>
            </div>

            <div class="btn-primary time session__btn__container">
                <span>Hora</span>
                <span>${e.begin}</span>
            </div>

            <div class="btn-primary age" data-age="${e.age}">
            </div>
        </div>

    </div>
    `),n=(a.appendChild(n),CreteElements(`
    <div class="movie__seats__container">
        <div class="background__screen">
            <div class="screen"></div>
            <div class="screen__shadow"></div>
        </div>

        <div class="seat__divisions__container"></div>

        <div class="seat__info__container">
            <div class="seat__info">
                <span class="seat-example" data-stats="available"></span>
                <span>Disponível</span>
            </div>
            <div class="seat__info">
                <span class="seat-example" data-stats="selected"></span>
                <span>Selecionado</span>
            </div>
            <div class="seat__info">
                <span class="seat-example" data-stats="unavailable"></span>
                <span>Ocupado</span>
            </div>
        </div>
    </div>
    `)),n=(a.appendChild(n),CalculateColumns(e,n),CreteElements(`
    <div class="movie__checkout__container">
        <div class="checkout__info__container">
            <div class="info__total">
                <span class="label">Total:</span>
                <span class="amount">
                    <span>R$</span>
                    <span class="amount__value">0</span>
                    <span class="amount__value__cents">,00</span>
                </span>
            </div>
            <div class="info__tickets-number">
                <span class="label">Ingressos:</span>
                <span class="amount__value">0</span>
            </div>
        </div>
        
        <div class="checkout__btn__container">
            <button class="btn-primary close__btn">
                <svg>
                    <use xlink:href="dist/icons/normal/symbol/sprite.svg#cancel"></use>
                </svg>
            </button>
            <button class="btn-primary purchase__btn" disabled>COMPRAR</button>
        </div>
    </div>
    `)),n=(a.appendChild(n),CreteElements(`
    <div class="movie__tickets__container">
        <div class="ticket__row" data-active="false">

            <div class="ticket__line">
                <span class="amount">0</span>
                <span>Linha</span>
            </div>

            <div class="ticket__seat">
                <span class="amount">0º</span>
                <span>Assento</span>
            </div>

            <div class="ticket__type">
                <svg>
                    <use xlink:href="dist/icons/normal/symbol/sprite.svg#ticket"></use>
                </svg>
                <select>
                    <option>Inteira</option>
                    <option>Meia</option>
                </select>
                <svg>
                    <use xlink:href="dist/icons/normal/symbol/sprite.svg#arrow-full"></use>
                </svg>
            </div>

            <div class="ticket__value">
                <span>R$</span>
                <span class="amount">0</span>
                <span class="amount__cents">,00</span>
            </div>
        </div>
    </div>
    `));a.appendChild(n),t.appendChild(a),document.body.appendChild(t),OpenPopUp("movie"),popUpBehavior(a,t),seatsUnavailable(a,e)}function popUpBehavior(e,t){var a=e.querySelector(".close__btn");const u=e.querySelector(".purchase__btn");e=e.querySelector(".icon-r__container");a.addEventListener("click",()=>{ClosePopUp("movie"),setTimeout(()=>{t.remove()},500)}),document.querySelectorAll(".seat").forEach(d=>{d.addEventListener("click",()=>{"available"===d.dataset.stats?d.dataset.stats="selected":"selected"===d.dataset.stats&&(d.dataset.stats="available");var t=document.querySelectorAll('.seat[data-stats="selected"]'),e=document.querySelector(".info__tickets-number .amount__value"),a=document.querySelector(".ticket__row");let s=a.parentNode;var n,r=a.querySelector(".ticket__line .amount"),i=a.querySelector(".ticket__seat .amount"),o=a.querySelector(".ticket__value .amount"),l=a.querySelector(".ticket__value .amount__cents");for(e.textContent=t.length;1<s.children.length;)s.removeChild(s.lastChild);for(let e=0;e<t.length;e++)0<e&&(n=a.cloneNode(!0),s.appendChild(n)),s.children[e].dataset.active=!0;function c(){var e=document.querySelectorAll(".ticket__value .amount");let a=document.querySelectorAll(".ticket__value .amount__cents");var t=document.querySelector(".info__total .amount__value"),n=document.querySelector(".info__total .amount__value__cents");let r=0;e.forEach((e,t)=>{t=a[t].textContent.replace(",",".");r+=parseFloat(e.textContent)+parseFloat(t)}),r=r.toFixed(2).toString().split("."),t.textContent=r[0],n.textContent=","+r[1]}u.addEventListener("click",()=>{showNotification()}),0===t.length?(a.dataset.active=!1,r.textContent="0",i.textContent="0º",o.textContent="0",l.textContent=",00",u.disabled=!0,a.querySelector(".ticket__type select").value="Inteira"):u.disabled=!1,t.forEach((e,t)=>{var t=s.children[t],a=t.querySelector(".ticket__line .amount"),n=t.querySelector(".ticket__seat .amount");let r=t.querySelector(".ticket__value .amount"),i=t.querySelector(".ticket__value .amount__cents"),o=t.querySelector(".ticket__type select");a.textContent=e.closest(".seat__row__container").querySelector(".number__row").textContent,n.textContent=e.textContent+"º","Inteira"===o.value&&(r.textContent="29",i.textContent=",90"),o.addEventListener("change",()=>{"Inteira"===o.value?(r.textContent="29",i.textContent=",90"):(r.textContent="14",i.textContent=",95"),c()})}),c()})}),e.addEventListener("click",()=>{OpenPopUp("requisition")})}function seatsUnavailable(e,t){var a=e.querySelectorAll(".seat"),n=t.movieSeats.unavailable,r=new Set;for(let e=0;e<n;e++){let e;for(;e=Math.floor(Math.random()*t.movieSeats.total),r.has(e););r.add(e),a[e].dataset.stats="unavailable"}}function CalculateColumns(e,t){const a=e.movieSeats.total;let n;const r=t.querySelector(".seat__divisions__container");var i=n=50<a?Math.ceil((a-50)/40)+1:1;for(let e=0;e<i;e++){var o=CreteElements('<div class="seat__container"></div>');r.appendChild(o)}let s=[];for(let e=0;e<n;e++)if(0===e)for(let e=0;e<5;e++)c();else for(let e=0;e<4;e++)c();{let r=a;s.forEach(e=>{var t=e.querySelector(".seats");if(10<r){for(let e=0;e<10;e++){var a=CreteElements(`<div class="seat" data-stats="available">${e+1}</div>`);t.appendChild(a)}r-=10}else{for(let e=0;e<r;e++){var n=CreteElements(`<div class="seat" data-stats="available">${e+1}</div>`);t.appendChild(n)}r=0}})}s.forEach((e,t)=>{e.querySelector(".seats").children.length<10&&(s.unshift(s[t]),s.splice(t+1,1))});for(let e=s.length-1;0<=e;e--)0===s[e].querySelector(".seats").children.length&&s.splice(e,1);for(let t=0;t<s.length;t++)s[t].querySelectorAll(".number__row").forEach(e=>{e.textContent=t+1});for(let t=0;t<n;t++){var l=r.children;if(0===t)for(let e=0;e<5&&(l[t].appendChild(s.shift()),0!==s.length);e++);else for(let e=0;e<4&&(l[t].appendChild(s.shift()),0!==s.length);e++);}function c(){var e=CreteElements('<div class="seat__row__container"></div>'),t={span:CreteElements('<span class="number__row"></span>'),seats:CreteElements('<div class="seats"></div>')};e.appendChild(t.span),e.appendChild(t.seats),e.appendChild(t.span.cloneNode(!0)),s.push(e)}}lmp_moviesItem.forEach(t=>{t.addEventListener("click",()=>{var e=t.closest(".theaters__container__movies");checkMovie(t,e)})});const ln_form=document.querySelector(".newsletter__container__form"),ln_input=ln_form.querySelector('input[type="email"]'),ln_button=ln_form.querySelector("button"),emailRegex=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,mc_cards=(ln_input.addEventListener("input",()=>{0<ln_input.value.length?(ln_button.removeAttribute("disabled"),ln_button.addEventListener("click",function(e){emailRegex.test(ln_input.value)?ln_input.classList.remove("error"):(e.preventDefault(),ln_input.classList.add("error")),e.preventDefault()})):ln_button.setAttribute("disabled","disabled")}),document.querySelectorAll(".plan__card"));function animateCard(t){t.addEventListener("mousemove",e=>{VanillaTilt.init(t,{max:5,speed:4e3,transition:!0,scale:1.05})})}mc_cards.forEach(e=>{animateCard(e),e.querySelector(".btn-gift").addEventListener("click",()=>{showNotification()})});const opr_popup=document.querySelector(".popup-requisition"),opr_link=document.querySelector(".link__requisition"),opr_closeButton=opr_popup.querySelector(".popup___close-btn"),opr_btnPlans=opr_popup.querySelector(".btn-plan"),opr_btnTicket=opr_popup.querySelector(".btn-ticket"),body=document.querySelector("body");function OpenPopUp(e){document.querySelector(".popup-"+e).setAttribute("data-active","true"),body.style.overflow="hidden"}function ClosePopUp(e){const t=document.querySelector(".popup-"+e),a=t.querySelector(".popup__container");t.style.animation="fadeOut .3s",a.style.animation="scaleOut .3s",setTimeout(()=>{t.setAttribute("data-active","false"),body.style.overflow="",t.style.animation="",a.style.animation=""},300)}function showNotification(){const e=document.querySelector(".notification");e.setAttribute("data-active","true"),setTimeout(()=>{e.style.animation="fadeOut .3s",setTimeout(()=>{e.style.animation="",e.setAttribute("data-active","false")},300)},2700)}opr_link.addEventListener("click",function(){OpenPopUp("requisition")}),opr_closeButton.addEventListener("click",function(){ClosePopUp("requisition")}),opr_btnPlans.addEventListener("click",function(){ClosePopUp("requisition"),ClosePopUp("movie")}),opr_btnTicket.addEventListener("click",function(){this.disabled=!0,showNotification(),setTimeout(()=>{this.disabled=!1},3e3)});const popUpCheckout=document.querySelector(".popup-checkout"),popUpCheckoutClose=popUpCheckout.querySelector(".popup__close-btn"),cardUi=popUpCheckout.querySelector(".card-ui__container"),planCards=document.querySelectorAll(".plan__card"),inputs=(planCards.forEach(r=>{r.querySelector(".btn-success").addEventListener("click",()=>{var e=r.querySelector(".plan__card__price").textContent.replace(/[^\d,]/g,""),t=r.querySelector(".plan__card__title").textContent;OpenPopUp("checkout");popUpCheckout.querySelector(".plan__chosen").textContent="PLANO "+t;var t=popUpCheckout.querySelector(".amount__plan__chosen"),a=t.querySelector(".amount"),t=t.querySelector(".cents"),[e,n]=e.split(",");a.textContent=e,t.textContent=`,${n}0`})}),cardUi.addEventListener("mousemove",e=>{VanillaTilt.init(cardUi,{max:3,speed:4e3,transition:!0,scale:1.03,glare:!0,"max-glare":.1})}),popUpCheckoutClose.addEventListener("click",()=>{ClosePopUp("checkout")}),{name:popUpCheckout.querySelector(".popup-checkout input#name"),email:popUpCheckout.querySelector(".popup-checkout input#email__checkout"),cardNumber:popUpCheckout.querySelector(".popup-checkout input#card"),validity:popUpCheckout.querySelector(".popup-checkout input#date"),cvv:popUpCheckout.querySelector(".popup-checkout input#cvv"),submit:popUpCheckout.querySelector(".popup-checkout button.btn-success")}),cardElements={name:popUpCheckout.querySelector(".person__name"),number:popUpCheckout.querySelector(".number__card"),validity:popUpCheckout.querySelector(".date"),cvv:popUpCheckout.querySelector(".cvv__card"),flag:popUpCheckout.querySelector(".type__icon")},paymentCards={mastercard:{name:"Mastercard",regex:/^5[1-5][0-9]{5,}|222[1-9][0-9]{3,}|22[3-9][0-9]{4,}|2[3-6][0-9]{5,}|27[01][0-9]{4,}|2720[0-9]{3,}$/,id:"mastercard"},visa:{name:"Visa",regex:/^4[0-9]{6,}$/,id:"visa"},americanExpress:{name:"American Express",regex:/^3[47][0-9]{5,}$/,id:"american-express"},discover:{name:"Discover",regex:/^6(?:011|5[0-9]{2})[0-9]{3,}$/,id:"discover"},dinersClub:{name:"Diners Club",regex:/^3(?:0[0-5]|[68][0-9])[0-9]{4,}$/,id:"diners-club"},jcb:{name:"JCB",regex:/^(?:2131|1800|35[0-9]{3})[0-9]{3,}$/,id:"jcb"}},regexs={cvv:/^[0-9]{3,4}$/,date:/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/};function validateInputs(){inputs.submit.addEventListener("click",e=>{e.preventDefault(),emailRegex.test(inputs.email.value)?inputs.email.classList.remove("error"):(e.preventDefault(),inputs.email.classList.add("error")),0===inputs.name.value.length?inputs.name.classList.add("error"):inputs.name.classList.remove("error"),0===inputs.cardNumber.value.length?(inputs.cardNumber.classList.add("error"),inputs.validity.classList.add("error"),inputs.cvv.classList.add("error")):(inputs.cardNumber.classList.remove("error"),inputs.validity.classList.remove("error"),inputs.cvv.classList.remove("error"))}),inputs.cardNumber.addEventListener("input",()=>{inputs.cardNumber.value=inputs.cardNumber.value.replace(/\D/g,""),16<inputs.cardNumber.value.length&&(inputs.cardNumber.value=inputs.cardNumber.value.slice(0,16)),inputs.cardNumber.value=inputs.cardNumber.value.replace(/(\d{4})/g,"$1 ").trim(),cardElements.number.textContent=inputs.cardNumber.value;var e=inputs.cardNumber.value.replace(/\s/g,"");if(0<inputs.cardNumber.value.length)for(const t in paymentCards)if(paymentCards[t].regex.test(e)){cardElements.flag.setAttribute("data-flag",t),cardElements.flag.querySelector("use").setAttribute("xlink:href","dist/icons/payment/symbol/sprite.svg#"+paymentCards[t].id);break}0<inputs.cardNumber.value.length?cardElements.number.setAttribute("data-placeholder","false"):(cardElements.number.textContent="0000 0000 0000 0000",cardElements.number.setAttribute("data-placeholder","true"))}),inputs.cvv.addEventListener("input",()=>{inputs.cvv.value=inputs.cvv.value.replace(/[^0-9]/g,""),setTimeout(()=>{4<inputs.cvv.value.length&&(inputs.cvv.value=inputs.cvv.value.slice(0,4)),cardElements.cvv.textContent=inputs.cvv.value.replace(/./g,"*"),0<inputs.cvv.value.length?cardElements.cvv.setAttribute("data-placeholder","false"):(cardElements.cvv.textContent="***",cardElements.cvv.setAttribute("data-placeholder","true"))},0)}),inputs.validity.addEventListener("input",()=>{inputs.validity.value=inputs.validity.value.replace(/[^0-9\/]/g,""),2!==inputs.validity.value.length||inputs.validity.value.includes("/")?5<inputs.validity.value.length?inputs.validity.value=inputs.validity.value.slice(0,5):inputs.validity.value.length<=2&&inputs.validity.value.includes("/")&&(inputs.validity.value=inputs.validity.value.slice(0,1)):inputs.validity.value+="/",cardElements.validity.textContent=inputs.validity.value,0<inputs.validity.value.length?cardElements.validity.setAttribute("data-placeholder","false"):(cardElements.validity.textContent="00/00",cardElements.validity.setAttribute("data-placeholder","true"))})}inputs.name.addEventListener("input",()=>{cardElements.name.textContent=inputs.name.value,0<inputs.name.value.length?cardElements.name.setAttribute("data-placeholder","false"):(cardElements.name.textContent="Nome no cartão",cardElements.name.setAttribute("data-placeholder","true"))}),validateInputs();const popupLogin=document.querySelector(".popup-login"),popupLoginClose=popupLogin.querySelector(".popup___close-btn"),loginBtn=document.querySelector(".btn-dropdown .option-1"),directoryPath="dist/videos/login",videoOptions={video1:{name:"Anatomy of a fall",src:"anatomy-of-a-fall.mp4",namePt:"Anatomia de uma Queda",star:4.2,link:"https://boxd.it/yuDE"},video2:{name:"Challengers",src:"challengers.mp4",namePt:"Challengers",star:4,link:"https://boxd.it/zld0"},video3:{name:"Dune - Part 2",src:"dune-2.mp4",namePt:"Duna - Parte 2",star:4.5,link:"https://boxd.it/pUfA"},video4:{name:"Poor Things",src:"poor-things.mp4",namePt:"Pobres Criaturas",star:4.1,link:"https://boxd.it/tNWU"}},starContainer=popupLogin.querySelector(".stars__container");function popUpLoginBehavior(){var e=popupLogin.querySelector(".form__forget__passwrod a"),t=popupLogin.querySelector(".login__register a");e.addEventListener("click",()=>{showNotification()}),t.addEventListener("click",()=>{showNotification()})}function createStars(){var t=parseFloat(starContainer.getAttribute("data-star"));Number.isInteger(t)?(console.log("is integer"),starContainer.setAttribute("data-clip","false")):starContainer.setAttribute("data-clip","true");for(let e=0;e<t;e++){var a=CreteElements(`
        <svg class="star">
            <use xlink:href="dist/icons/normal/symbol/sprite.svg#star"></use>
        </svg>
        `);starContainer.appendChild(a)}}function playVideo(a){const n=popupLogin.querySelector(".video__bg__container").querySelector("video"),r=n.querySelector("source"),i=popupLogin.querySelector(".title__container h3"),o=popupLogin.querySelector(".logo__container a"),s=Object.keys(a);let l=0;r.src=directoryPath+"/"+a[s[l]].src,i.textContent=a[s[l]].namePt,o.href=a[s[l]].link,starContainer.setAttribute("data-star",a[s[l]].star),createStars(),popupLoginClose.addEventListener("click",()=>{l=0,starContainer.innerHTML=""}),n.addEventListener("ended",()=>{l++;let e=starContainer.querySelectorAll(".star");var t=e.length-1;l<s.length?(r.src=directoryPath+"/"+a[s[l]].src,i.style.animation="slideOutY2 0.5s ease forwards",i.addEventListener("animationend",()=>{i.textContent=a[s[l]].namePt,i.style.animation="slideInY2 0.5s ease forwards"}),o.href=a[s[l]].link,starContainer.setAttribute("data-star",a[s[l]].star),e.forEach((e,t)=>{e.style.animation=`slideOutY2 ${.3*t}s forwards`}),e[t].addEventListener("animationend",()=>{starContainer.innerHTML="",createStars(),(e=starContainer.querySelectorAll(".star")).forEach((e,t)=>{e.style.animation=`slideInY2 ${.3*t}s forwards`})})):(l=0,r.src=directoryPath+"/"+a[s[l]].src,i.style.animation="slideOutY2 0.5s ease-in-out forwards",i.addEventListener("animationend",()=>{i.textContent=a[s[l]].namePt,i.style.animation="slideInY2 0.5s ease-in-out forwards"}),o.href=a[s[l]].link,starContainer.setAttribute("data-star",a[s[l]].star),e.forEach((e,t)=>{e.style.animation=`slideOutY2 ${.3*t}s forwards`}),e[t].addEventListener("animationend",()=>{starContainer.innerHTML="",createStars(),(e=starContainer.querySelectorAll(".star")).forEach((e,t)=>{e.style.animation=`slideInY2 ${.3*t}s forwards`})})),n.load()}),n.load()}function videoBehavior(){const e=popupLogin.querySelector("video"),t=popupLogin.querySelector(".icons__video__container"),a=popupLogin.querySelector("svg.play"),n=popupLogin.querySelector("svg.pause");var r=popupLogin.querySelector(".logo__container a");e.addEventListener("click",()=>{e.paused?(e.play(),t.setAttribute("data-behavior","paused"),n.style.animation="fadeIn 0.5s forwards",setTimeout(()=>{n.style.animation="fadeOut 0.5s forwards",t.setAttribute("data-behavior","none")},2e3)):(e.pause(),t.setAttribute("data-behavior","played"),a.style.animation="fadeIn 0.5s forwards")}),r.addEventListener("click",()=>{e.pause(),t.setAttribute("data-behavior","played"),a.style.animation="fadeIn 0.5s forwards"})}popupLoginClose.addEventListener("click",()=>{ClosePopUp("login")}),loginBtn.addEventListener("click",()=>{OpenPopUp("login"),document.querySelector(".btn-dropdown__select").setAttribute("aria-expanded","false"),popUpLoginBehavior(),playVideo(videoOptions),videoBehavior()});const popupTicket=document.querySelector(".popup-ticket"),popupTicketClose=popupTicket.querySelector(".popup__close-btn"),formTicket=popupTicket.querySelector("form"),ticketBtn=document.querySelector(".btn-dropdown__options__option.option-2");function formBehavior(){const t=formTicket.querySelector("input"),e=formTicket.querySelector("button");t.addEventListener("input",()=>{0<t.value.length?(e.removeAttribute("disabled"),e.addEventListener("click",function(e){e.preventDefault(),emailRegex.test(t.value)?(t.classList.remove("error"),showNotification()):t.classList.add("error")})):e.setAttribute("disabled","disabled")})}popupTicketClose.addEventListener("click",()=>{ClosePopUp("ticket")}),ticketBtn.addEventListener("click",()=>{OpenPopUp("ticket"),formBehavior()});const toogleAria_btnDays=document.querySelectorAll(".theaters__button"),toogleAria_btnDropdown=(toogleAria_btnDays.forEach(e=>{e.addEventListener("click",()=>{"false"===e.getAttribute("aria-selected")&&(toogleAria_btnDays.forEach(e=>{e.setAttribute("aria-selected","false")}),e.setAttribute("aria-selected","true"))})}),document.querySelector(".btn-dropdown")),toogleAria_btnSelect=toogleAria_btnDropdown.querySelector(".btn-dropdown__select"),toogleAria_btnOptions=toogleAria_btnDropdown.querySelector(".btn-dropdown__options");toogleAria_btnSelect.addEventListener("click",()=>{var e="true"===toogleAria_btnSelect.getAttribute("aria-expanded");toogleAria_btnSelect.setAttribute("aria-expanded",!e),toogleAria_btnOptions.setAttribute("aria-hidden",e)});
//# sourceMappingURL=maps/main.js.map
