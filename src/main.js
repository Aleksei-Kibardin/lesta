const btnNext = document.querySelector('.next'),
    btnPrev = document.querySelector('.prev'),
    total = document.querySelector('#total'),
    current = document.querySelector('#current'),
    content = document.querySelectorAll('.content')

let index = 4;

current.textContent = index;

function hideContent() {
    content.forEach(item => {
        item.classList.add('hide');
        item.classList.remove('show', 'fade');
    });
}

function showContent(i) {
    content[i].classList.add('show', 'fade');
    content[i].classList.remove('hide');
}

hideContent();
showContent(index - 1);

btnNext.addEventListener('click', () => {
    if (index < 4) {
        index++
        current.textContent = index;
    } else{
        index = 1;
        current.textContent = index;
    }
    hideContent();
    showContent(index - 1);
})

btnPrev.addEventListener('click', () => {
    if (index > 1) {
        index--
        current.textContent = index;
    } else{
        index = 4;
        current.textContent = index;
    }
    hideContent();
    showContent(index - 1);
})