// @ts-check

let idx = 0
let xoffset = 0;
setInterval(bevegelse, 50);

function bevegelse() {
    idx++;
    if (idx < 32) {
        xoffset = idx * 15;
    }
    if (idx > 128)
        idx = 0;
}