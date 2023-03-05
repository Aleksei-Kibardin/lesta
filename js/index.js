const btnNext = document.querySelector('.next'),
    btnPrev = document.querySelector('.prev'),
    total = document.querySelector('#total'),
    current = document.querySelector('#current'),
    constent = document.querySelectorAll('.content')

let index = 1;

current.textContent = index;

btnNext.addEventListener('click', () => {
    if (index < 5) {
        current.textContent = index++;
    } else{
        index = 1;
        current.textContent = index;
    }
    
})

btnPrev.addEventListener('click', () => {
    if (index > 0) {
        current.textContent = index--;
    } else{
        index = 4;
        current.textContent = index;
    }
    
})