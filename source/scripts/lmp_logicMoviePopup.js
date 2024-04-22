const lmp_moviesItem = document.querySelectorAll('.movies__container__cards .card');

lmp_moviesItem.forEach(movie => {
    movie.addEventListener('click', () => {
        let moviesContainer = movie.closest('.theaters__container__movies');
        checkMovie(movie, moviesContainer);
    });
})



function checkMovie(movie, moviesContainer) {
    checkTime(moviesContainer);

    let movieTitle = movie.querySelector('.card__title').textContent;
    let movieDirector;
    let movieGenre;
    let movieYear;
    let movieTrailer;
    let movieAge;
    let movieTime = movie.querySelector('.card__time').textContent;
    let movieRoom = moviesContainer.querySelector('h3').textContent.match(/\d+/)[0];
    let movieDate = moviesContainer.dataset.dayId;
    let movieBegin = movie.dataset.time;
    let movieImage = {
        jpg: new URL(movie.querySelector('.card__image picture img').src).pathname,
        webp: movie.querySelector('.card__image picture source').srcset
    };
    let movieSeats = {
        total: parseInt(movie.querySelector('.card__seats__container span').textContent.match(/\d+/g)[1]),
        unavailable: parseInt(movie.querySelector('.card__seats__container span').textContent.match(/\d+/g)[0]),
        available: parseInt(movie.querySelector('.card__seats__container span').textContent.match(/\d+/g)[1]) - parseInt(movie.querySelector('.card__seats__container span').textContent.match(/\d+/g)[0]),
    }
    let movieRequisition = movie.querySelector(".card__title__container div.icon-r__container").dataset.active;

    switch (true) {
        case movieTitle.includes('Anatomia de uma Queda'):
            movieDirector = 'Justine Triet';
            movieGenre = 'Drama';
            movieYear = '2023';
            movieTrailer = 'https://www.youtube.com/watch?v=FUXawkH-ONM';
            movieAge = '16';
            break;
        case movieTitle.includes('Black Swan'):
            movieDirector = 'Darren Aronofsky';
            movieGenre = 'Drama';
            movieYear = '2010';
            movieTrailer = 'https://www.youtube.com/watch?v=5jaI1XOB-bs';
            movieAge = '16';
            break;
        case movieTitle.includes('Duna - Parte 2'):
            movieDirector = 'Denis Villeneuve';
            movieGenre = 'Ficção Científica';
            movieYear = '2024';
            movieTrailer = 'https://www.youtube.com/watch?v=Way9Dexny3w';
            movieAge = '12';
            break;
        case movieTitle.includes('Godzilla vs. Kong'):
            movieDirector = 'Adam Wingard';
            movieGenre = 'Ação';
            movieYear = '2024';
            movieTrailer = 'https://www.youtube.com/watch?v=lV1OOlGwExM';
            movieAge = '12';
            break;
        case movieTitle.includes('Immaculate'):
            movieDirector = 'Michael Mohan';
            movieGenre = 'Terror';
            movieYear = '2024';
            movieTrailer = 'https://www.youtube.com/watch?v=sDhsfV7r_1w';
            movieAge = '16';
            break;
        case movieTitle.includes('Pobres Criaturas'):
            movieDirector = 'Yorgos Lanthimos';
            movieGenre = 'Drama';
            movieYear = '2023';
            movieTrailer = 'https://www.youtube.com/watch?v=RlbR5N6veqw';
            movieAge = '18';
            break;
        case movieTitle.includes('Back to Black'):
            movieDirector = 'Sam Taylor-Johnson';
            movieGenre = 'Drama/Biografia';
            movieYear = '2024';
            movieTrailer = 'https://www.youtube.com/watch?v=rYzIOBwyhIU';
            movieAge = '14';
            break;
        case movieTitle.includes('Dona Lurdes'):
            movieDirector = 'Cristiano Marques';
            movieGenre = 'Comédia';
            movieYear = '2024';
            movieTrailer = 'https://www.youtube.com/watch?v=Iey0SFyUxCk';
            movieAge = 'all';
            break;
        case movieTitle.includes('Ghostbusters Apocalipse de Gelo'):
            movieDirector = 'Gil Kenan';
            movieGenre = 'Ação/Terror';
            movieYear = '2024';
            movieTrailer = 'https://www.youtube.com/watch?v=HpOBXh02rVc';
            movieAge = '12';
            break;
        case movieTitle.includes('Challengers'):
            movieDirector = 'Luca Guadagnino';
            movieGenre = 'Drama';
            movieYear = '2024';
            movieTrailer = 'https://www.youtube.com/watch?v=VobTTbg-te0';
            movieAge = '16';
            break;
        case movieTitle.includes('Maxxxine'):
            movieDirector = 'Ti West';
            movieGenre = 'Terror';
            movieYear = '2024';
            movieTrailer = 'https://www.youtube.com/watch?v=y0uS3t6nFgY';
            movieAge = '18';
            break;
        case movieTitle.includes('Kung Fu Panda 4'):
            movieDirector = 'Mike Mitchell';
            movieGenre = 'Animação';
            movieYear = '2024';
            movieTrailer = 'https://www.youtube.com/watch?v=XnQF9sqgZLE'
            movieAge = 'all';
            break;
        case movieTitle.includes('O Menino e a Garça'):
            movieDirector = 'Hayao Miyazaki';
            movieGenre = 'Animação';
            movieYear = '2023';
            movieTrailer = 'https://www.youtube.com/watch?v=t5khm-VjEu4';
            movieAge = 'all';
            break;
        case movieTitle.includes('Matador de Aluguel'):
            movieDirector = 'Doug Liman';
            movieGenre = 'Ação';
            movieYear = '2024';
            movieTrailer = 'https://www.youtube.com/watch?v=Y0ZsLudtfjI';
            movieAge = '16';
            break;
        case movieTitle.includes('A Rede Social'):
            movieDirector = 'David Fincher';
            movieGenre = 'Drama';
            movieYear = '2010';
            movieTrailer = 'https://www.youtube.com/watch?v=lB95KLmpLR4';
            movieAge = '14';
            break;
        case movieTitle.includes('X'):
            movieDirector = 'Ti West';
            movieGenre = 'Terror';
            movieYear = '2022';
            movieTrailer = 'https://www.youtube.com/watch?v=Awg3cWuHfoc';
            movieAge = '18';
            break;
        case movieTitle.includes('Pearl'):
            movieDirector = 'Ti West';
            movieGenre = 'Terror';
            movieYear = '2023';
            movieTrailer = 'https://www.youtube.com/watch?v=L5PW5r3pEOg';
            movieAge = '18';
            break;
        case movieTitle.includes('Furiosa'):
            movieDirector = 'George Miller';
            movieGenre = 'Ação';
            movieYear = '2024';
            movieTrailer = 'https://www.youtube.com/watch?v=XJMuhwVlca4';
            movieAge = '14';
            break;
        case movieTitle.includes('Divertidamente 2'):
            movieDirector = 'Kelsey Mann';
            movieGenre = 'Animação';
            movieYear = '2024';
            movieTrailer = 'https://www.youtube.com/watch?v=LEjhY15eCx0';
            movieAge = 'all';
            break;
        case movieTitle.includes('Zona de Interesse'):
            movieDirector = 'Jonathan Glazer';
            movieGenre = 'Drama';
            movieYear = '2023';
            movieTrailer = 'https://www.youtube.com/watch?v=r-vfg3KkV54';
            movieAge = '16';
            break;
        case movieTitle.includes('Instinto de Mãe'):
            movieDirector = 'Benoît Delhomme';
            movieGenre = 'Drama';
            movieYear = '2023';
            movieTrailer = 'https://www.youtube.com/watch?v=aLikloRQiUE';
            movieAge = '14';
            break;
        case movieTitle.includes('Spirited Away'):
            movieDirector = 'Hayao Miyazaki';
            movieGenre = 'Animação';
            movieYear = '2001';
            movieTrailer = 'https://www.youtube.com/watch?v=ByXuk9QqQkk';
            movieAge = 'all';
            break;
        default:
            movieDirector = 'Desconhecido';
            movieGenre = 'Desconhecido';
            movieYear = 'Desconhecido';
            movieTrailer = '';
            movieAge = 'unknown';
            break;
    }

    function checkTime(moviesContainer){
        const timeOpen = new Date();
        timeOpen.setHours(9,15,0)
        let cards = moviesContainer.querySelectorAll('.card');
        cards.forEach((card, index) => {
            if(index !== 0){
                let cardTime = parseInt(card.querySelector('.card__time').textContent.match(/\d+/)[0]);
                timeOpen.setMinutes(timeOpen.getMinutes() + cardTime);
                timeOpen.setMinutes(timeOpen.getMinutes() + 30);
            }

            let minutes = Math.round(timeOpen.getMinutes() / 5) * 5;
            timeOpen.setMinutes(minutes);

            let hours = timeOpen.getHours().toString().padStart(2, '0');
            minutes = timeOpen.getMinutes().toString().padStart(2, '0');

            let movieBegin = `${hours}:${minutes}`;

            card.setAttribute('data-time', movieBegin);
        })
    }

    let movieOptions = {
        title: movieTitle,
        director: movieDirector,
        genre: movieGenre,
        year: movieYear,
        trailer: movieTrailer,
        age: movieAge,
        time: movieTime,
        room: movieRoom,
        date: movieDate,
        begin: movieBegin,
        movieImage: movieImage,
        movieSeats: movieSeats,
        requisition: movieRequisition,
    }

    return CreateMoviePopUp(movieOptions);
}

function CreteElements(html){
    const template = document.createElement('template');

    template.innerHTML = html.trim();

    return template.content.firstElementChild;
}

function CreateMoviePopUp(movieOptions){
    const popUpBg = CreteElements(`<div class="popup popup-movie"></div>`)
    const popUp = CreteElements(`
    <div class="popup__container">
    </div>
    `)

    // Movie Details
    let movieDetailsContent = CreteElements(`
    <div class="movie__details__container">
        <div class="movie__details">
            <div class="title__container">
            <h2>${movieOptions.title}</h2>
            <div class="icon-r__container" data-active="${movieOptions.requisition}">
                <span>R</span>
            </div>
            </div>

            <div class="movie__info__container">
                <div class="movie__direction movie__info">
                    <span class="movie__details__label">${movieOptions.year} - Dirigido por:</span>
                    <span class="movie__details__value">${movieOptions.director}</span>
                </div>
                <div class="movie__genre movie__info">
                    <span class="movie__details__label">Gênero:</span>
                    <span class="movie__details__value">${movieOptions.genre}</span>
                </div>
            </div>

            <div class="movie__duration__container">
                <a href="${movieOptions.trailer}" target="_blank" class="btn-primary">
                    <svg>
                        <use xlink:href="dist/icons/symbol/sprite.svg#play"></use>
                    </svg>
                    Trailer
                </a>
                <span class="movie__duration">${movieOptions.time}</span>
            </div>
        </div>

        <div class="movie__image">
            <picture>
                <source srcset="${movieOptions.movieImage.webp}">
                <img src="${movieOptions.movieImage.jpg}" alt="${movieOptions.title}">
            </picture>
        </div>


        <div class="session__details__container">
            <div class="btn-primary room session__btn__container">
                <span>Sala</span>
                <span>${movieOptions.room}</span>
            </div>

            <div class="btn-primary date session__btn__container">
                <span>Data</span>
                <span>${movieOptions.date}</span>
            </div>

            <div class="btn-primary time session__btn__container">
                <span>Hora</span>
                <span>${movieOptions.begin}</span>
            </div>

            <div class="btn-primary age" data-age="${movieOptions.age}">
            </div>
        </div>

    </div>
    `)
    popUp.appendChild(movieDetailsContent)

    // Movie Seats
    let movieSeatsContent = CreteElements(`
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
    `)
    popUp.appendChild(movieSeatsContent)
    CalculateColumns(movieOptions, movieSeatsContent);

    // Movie Checkout
    let movieCheckoutContent = CreteElements(`
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
                    <use xlink:href="dist/icons/symbol/sprite.svg#cancel"></use>
                </svg>
            </button>
            <button class="btn-primary purchase__btn" disabled>COMPRAR</button>
        </div>
    </div>
    `)
    popUp.appendChild(movieCheckoutContent)

    // Movie Tickets
    let movieTicketsContent = CreteElements(`
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
                    <use xlink:href="dist/icons/symbol/sprite.svg#ticket"></use>
                </svg>
                <select>
                    <option>Inteira</option>
                    <option>Meia</option>
                </select>
                <svg>
                    <use xlink:href="dist/icons/symbol/sprite.svg#arrow-full"></use>
                </svg>
            </div>

            <div class="ticket__value">
                <span>R$</span>
                <span class="amount">0</span>
                <span class="amount__cents">,00</span>
            </div>
        </div>
    </div>
    `)
    popUp.appendChild(movieTicketsContent)

    popUpBg.appendChild(popUp)

    document.body.appendChild(popUpBg)
    OpenPopUp('movie')

    popUpBehavior(popUp, popUpBg)

    seatsUnavailable(popUp, movieOptions);
}

function popUpBehavior(popUp, popUpBg){
    const btnClose = popUp.querySelector('.close__btn');
    const btnPurchase = popUp.querySelector('.purchase__btn');
    const btnRequisition = popUp.querySelector('.icon-r__container');
    btnClose.addEventListener('click', () => {
        ClosePopUp('movie')
        setTimeout(() => {
            popUpBg.remove()
        }, 500)
    })

    const seats = document.querySelectorAll('.seat');
    seats.forEach(seat => {
        seat.addEventListener('click', () => {
            if (seat.dataset.stats === 'available') {
                seat.dataset.stats = 'selected';
            } else if (seat.dataset.stats === 'selected') {
                seat.dataset.stats = 'available';
            }

            let selectedSeats = document.querySelectorAll('.seat[data-stats="selected"]');
            let totalTickets = document.querySelector('.info__tickets-number .amount__value');
            let ticketRow = document.querySelector('.ticket__row');
            let ticketContainer = ticketRow.parentNode;
            const ticketLine = ticketRow.querySelector('.ticket__line .amount');
            const ticketSeat = ticketRow.querySelector('.ticket__seat .amount');
            const ticketValue = ticketRow.querySelector('.ticket__value .amount');
            const ticketValueCents = ticketRow.querySelector('.ticket__value .amount__cents');

            totalTickets.textContent = selectedSeats.length;

            while (ticketContainer.children.length > 1) {
                ticketContainer.removeChild(ticketContainer.lastChild);
            }

            for (let i = 0; i < selectedSeats.length; i++){
                if(i > 0){
                    let ticketRowClone = ticketRow.cloneNode(true);
                    ticketContainer.appendChild(ticketRowClone);
                }
                ticketContainer.children[i].dataset.active = true;
            }

            btnPurchase.addEventListener('click', () => {
                showNotification();
            })

            if(selectedSeats.length === 0){
                ticketRow.dataset.active = false;
                ticketLine.textContent = '0';
                ticketSeat.textContent = '0º';
                ticketValue.textContent = '0';
                ticketValueCents.textContent = ',00';
                btnPurchase.disabled = true;
                ticketRow.querySelector('.ticket__type select').value = 'Inteira';
            }else{
                btnPurchase.disabled = false;
            }

            selectedSeats.forEach((seat, index) => {
                let currentTicketRow = ticketContainer.children[index];
            
                let ticketLine = currentTicketRow.querySelector('.ticket__line .amount');
                let ticketSeat = currentTicketRow.querySelector('.ticket__seat .amount');
                let ticketValue = currentTicketRow.querySelector('.ticket__value .amount');
                let ticketValueCents = currentTicketRow.querySelector('.ticket__value .amount__cents');
                let ticketType = currentTicketRow.querySelector('.ticket__type select');
            
                ticketLine.textContent = seat.closest('.seat__row__container').querySelector('.number__row').textContent;
                ticketSeat.textContent = `${seat.textContent}º`;
                if(ticketType.value === 'Inteira'){
                    ticketValue.textContent = '29';
                    ticketValueCents.textContent = ',90';
                }
                ticketType.addEventListener('change', () => {
                    if(ticketType.value === 'Inteira'){
                        ticketValue.textContent = '29';
                        ticketValueCents.textContent = ',90';
                    }else{
                        ticketValue.textContent = '14';
                        ticketValueCents.textContent = ',95';
                    }
                    calculateTotal();
                })
            })
            calculateTotal();

            function calculateTotal() {
                let allTicketValues = document.querySelectorAll('.ticket__value .amount');
                let allTicketValuesCents = document.querySelectorAll('.ticket__value .amount__cents');
                let totalValue = document.querySelector('.info__total .amount__value');
                let totalValueCents = document.querySelector('.info__total .amount__value__cents');
                let total = 0;
                allTicketValues.forEach((value, index) => {
                    let cents = allTicketValuesCents[index].textContent.replace(',', '.');
                    total += parseFloat(value.textContent) + parseFloat(cents);
                })
                total = total.toFixed(2).toString().split('.');
                totalValue.textContent = total[0];
                totalValueCents.textContent = `,${total[1]}`;
            }

        });
    });

    btnRequisition.addEventListener('click', () => {
        OpenPopUp('requisition')
    })
}

function seatsUnavailable(popUp, movieOptions){
    const seats = popUp.querySelectorAll('.seat');
    const unavailableSeats = movieOptions.movieSeats.unavailable;
    let usedSeats = new Set();

    for (let i = 0; i < unavailableSeats; i++){
        let randomSeats;
        do{
            randomSeats = Math.floor(Math.random() * movieOptions.movieSeats.total);
        } while(usedSeats.has(randomSeats));

        usedSeats.add(randomSeats);
        seats[randomSeats].dataset.stats = 'unavailable';
    }

}

function CalculateColumns(movieOptions, content){
    const rowsFirstDivision = 5;
    const rowsOtherDivisions = 4;
    const totalSeats = movieOptions.movieSeats.total;
    let necessaryDivisions;
    const divisionsContainer = content.querySelector('.seat__divisions__container');

    totalSeats > (rowsFirstDivision * 10) ? necessaryDivisions = Math.ceil((totalSeats - 50) / 40) + 1 : necessaryDivisions = 1;

    createDivisions(necessaryDivisions);

    let rowsContainerArray = [];

    appendRows();

    createSeats();

    organizeElements();

    function createDivisions(necessaryDivisions){
        for (let i = 0; i < necessaryDivisions; i++){
            let division = CreteElements(`<div class="seat__container"></div>`)
            divisionsContainer.appendChild(division)
        }
    }

    function createRowsContainer(){
        const rowsContainer = CreteElements(`<div class="seat__row__container"></div>`)
        const elements = {
            span: CreteElements(`<span class="number__row"></span>`),
            seats: CreteElements(`<div class="seats"></div>`)
        }
        rowsContainer.appendChild(elements.span)
        rowsContainer.appendChild(elements.seats)
        rowsContainer.appendChild(elements.span.cloneNode(true))
        
        rowsContainerArray.push(rowsContainer)
    }

    function appendRows(){
        for (let i = 0; i < necessaryDivisions; i++){
            if(i === 0){
                for (let j = 0; j < rowsFirstDivision; j++){
                    createRowsContainer();
                }
            }else{
                for (let j = 0; j < rowsOtherDivisions; j++){
                    createRowsContainer();
                }
            }
        }
    }

    function createSeats(){
        let totalSeatsIndicator = totalSeats;
        rowsContainerArray.forEach(rowsContainer => {
            let seats = rowsContainer.querySelector('.seats');
            if(totalSeatsIndicator > 10){
                for (let i = 0; i < 10; i++){
                    let seat = CreteElements(`<div class="seat" data-stats="available">${i + 1}</div>`)
                    seats.appendChild(seat)
                }
                totalSeatsIndicator -= 10;
            }else{
                for (let i = 0; i < totalSeatsIndicator; i++){
                    let seat = CreteElements(`<div class="seat" data-stats="available">${i + 1}</div>`)
                    seats.appendChild(seat)
                }
                totalSeatsIndicator = 0;
            }
        })
    }

    function organizeElements(){
        rowsContainerArray.forEach((rowsContainer, index) => {
            const seatsDiv = rowsContainer.querySelector('.seats');
            
            if(seatsDiv.children.length < 10){
                rowsContainerArray.unshift(rowsContainerArray[index]);
                rowsContainerArray.splice(index + 1, 1);
            }
        })

        for(let i = rowsContainerArray.length - 1; i >= 0; i--){
            let seats = rowsContainerArray[i].querySelector('.seats');
            if(seats.children.length === 0){
                rowsContainerArray.splice(i, 1);
            }
        }
    
        for(let i = 0; i < rowsContainerArray.length; i++){
            let rowsContainer = rowsContainerArray[i];
            let spanElements = rowsContainer.querySelectorAll('.number__row');
            spanElements.forEach(span => {
                span.textContent = i + 1;
            })
        }
    
        for (let i = 0; i < necessaryDivisions; i++){
            let divisions = divisionsContainer.children;
            if(i === 0){
                for (let j = 0; j < rowsFirstDivision; j++){
                    divisions[i].appendChild(rowsContainerArray.shift())
                    if(rowsContainerArray.length === 0){
                        break;
                    }
                }
            }else{
                for (let j = 0; j < rowsOtherDivisions; j++){
                    divisions[i].appendChild(rowsContainerArray.shift())
                    if(rowsContainerArray.length === 0){
                        break;
                    }
                }
            }
        }
    }
}