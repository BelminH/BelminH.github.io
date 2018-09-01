// @ts-check
function setup() {
    let divBoard = document.getElementById("board");
    let divMain = document.getElementById("main");
    let btnStart = document.getElementById("start");

    btnStart.addEventListener("click", startSpillet);

    function startSpillet(e) {
        divBoard.removeChild(btnStart);
        let baller = [];
        for (let i = 0; i < 10000; i++) {
            let ball = document.createElement("div");
            ball.className = "ball";
            let x = Math.random() * 520;
            let y = Math.random() * 520;
            let vx = Math.random() * 50 - 25;
            let vy = Math.random() * 50 - 25;
            ball.dataset.vx = String(vx);
            ball.dataset.vy = String(vy);
            ball.dataset.x = String(x);
            ball.dataset.y = String(y);
            ball.dataset.w = "26";
            ball.dataset.h = "26";
            ball.style.left = x + "px";
            ball.style.top = y + "px";
            divBoard.appendChild(ball);
            baller.push(ball);
        }

        setInterval(animering, 20);

        function animering() {
            for (let i = 0; i < 10000; i++) {
                let ball = baller[i];
                ball.dataset.x = +ball.dataset.x + +ball.dataset.vx;
                ball.dataset.y = +ball.dataset.y + +ball.dataset.vy;
                ball.style.left = ball.dataset.x + "px";
                ball.style.top = ball.dataset.y + "px";

                if (+ball.dataset.x > 550) {
                    ball.dataset.vx = -ball.dataset.vx;
                }

                if (+ball.dataset.x < 0) {
                    ball.dataset.vx = Math.abs(+ball.dataset.vx);
                }

                if (+ball.dataset.y > 550) {
                    ball.dataset.vy = -ball.dataset.vy;
                }

                if (+ball.dataset.y < 0) {
                    ball.dataset.vy = -ball.dataset.vy;
                }

            }
            for (let i = 0; i < 10000; i++) {
                let a = baller[i];
                for (let j = i+1; j < 10000; j++) {
                    let b = baller[j];
                    if (kollisjon(a.dataset, b.dataset)) {
                        a.dataset.vx = -a.dataset.vx;
                    }
                }
            }
        }
        function kollisjon(a, b) {
            if (
                +a.x > +b.x - +a.w &&
                +a.x < +b.x + +b.w &&
                +a.y > +b.y - +a.h &&
                +a.y < +b.y + +b.h
            ) {
                return true;
            } else {
                return false;
            }
        }

    }
}
