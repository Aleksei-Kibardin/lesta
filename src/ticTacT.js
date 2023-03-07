const area = document.querySelector('.area'),
    cell = document.querySelector('cell');

for(i = 1; i <=9; i++) {
    area.innerHTML += `<div class="cell" pos= "${i}"></div>`
}