// @ts-check


function startGame() {
    let divBoard = document.getElementById("board");
    setTimeout(reallyStartTheGame, 0.1 * 1000);

    let snake = document.createElement("div");
    snake.className = "snake";

    let objSnake = { px: 0, py: 0, segments: 1 };


    function reallyStartTheGame() {
        divBoard.innerHTML = "";
        document.addEventListener("keydown", saveKey);
        divBoard.appendChild(snake);

        setInterval(gameLoop, 100);

    }

    function gameLoop() {
        snake.style.top = objSnake.py * 20 + "px";
        snake.style.left = objSnake.py * 20 + "px";
    }

    function saveKey(e) {
        let k = e.keyCode;
        switch (k) {
            case 37:
                break;
            case 38:
                break;
            case 39:
                break;
            case 40:
                break;
        }
    }
}