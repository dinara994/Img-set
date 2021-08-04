const bigImg = document.querySelector('.big-img1')
const smallImg = document.querySelector('.small-img')

smallImg.addEventListener('click', (event) => {
    if (event.target.classList[0] === 'small') {                 //если клик на мал карт[idx] === с классом 'small'
        bigImg.src = event.target.src                           // то вывести как больш. картинка
    }
})









