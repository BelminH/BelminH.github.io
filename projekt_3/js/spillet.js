// @ts-check

var display, input, frames;
var alSprite, taSprite, ciSprite;
var aliens, dir, tank, bullets, cities;

function main() {
    display = new Screen(504, 600);
    input = new inputHandler();

    var img = new Image();
    img.addEventListener("load", function () {
        alSprite = [
            [new Sprite(this, 0, 0, 22, 16), new Sprite(this, 0, 16, 22, 16)],
            [new Sprite(this, 22, 0, 16, 16), new Sprite(this, 22, 16, 16, 16)],
            [new Sprite(this, 38, 0, 24, 16), new Sprite(this, 38, 16, 24, 16)]
        ];
        taSprite = new Sprite(this, 62, 0, 22, 16);
        ciSprite = new Sprite(this, 84, 8, 36, 24);

        init();
        run();
    });
    img.src = "../img/invaders.png"
};
function init() { };
function run() {
    var loop = function () {
        update();
        render();

        window.requestAnimationFrame(loop, screen.canvas);
    }
    window.requestAnimationFrame(loop, screen.canvas);
};
function update() { };
function render() {
    screen.drawSprite(alSprite[0][0])
};
