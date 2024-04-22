const ldm_btnDays = document.querySelectorAll('button[data-day]');
const ldm_movies = document.querySelectorAll('div[data-day-id]');

ldm_btnDays.forEach(btn => {
    btn.addEventListener('click', function(){
        verifyDay(this.getAttribute('data-day'));
    })
})

function verifyDay(dayId){
    ldm_movies.forEach(movie => {
        if(movie.getAttribute('data-day-id') === dayId){
            movie.style.display = 'flex';
        } else {
            movie.style.display = 'none';
        }
    })
}

verifyDay(ldm_btnDays[0].getAttribute('data-day'));