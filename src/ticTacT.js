const area = document.querySelector(".area"),
  cell = document.querySelectorAll(".cell");

let player = "x",
  win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

let data = ['', '', '', '', '', '', '', '', ''];

function move(i) {

  if (player === "x") {
    if (!i.innerHTML) {
      i.innerHTML = player;
    } else {
      alert("клетка занята");
    }
  }
  data.splice(i.getAttribute('id'), 1, player)
  console.log(data)
}

function aiplayer (){
    j = Math.floor(Math.random() * 10);
}

cell.forEach((i) => {
  i.addEventListener("click", (e) => {
    move(i);
  });
});
