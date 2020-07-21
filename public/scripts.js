const cards = document.querySelectorAll('.card')
const arrowBack = document.querySelector('#arrow_back')

for (let card of cards) {
    card.addEventListener('click', function() {
        const videoId = card.getAttribute('id')
        window.location.href = `/videos?id=${videoId}`
    })
}

arrowBack.addEventListener('click', () => window.location.href = '/classes')