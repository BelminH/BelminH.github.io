var block = null;

function init() {
  block = document.getElementById('myDiv');
  move();
}

function move() {
  block.style.left = parseInt(block.offsetLeft, 10) + 10 + 'px';

  if (parseInt(block.offsetLeft, 10) >= 600) {
    block.style.left = '12px';
  }

  setTimeout(move, 20);
}

window.onload = init;
