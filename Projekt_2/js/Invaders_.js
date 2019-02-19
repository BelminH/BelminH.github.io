// @ts-check
var pilot = {
    left: 600,
    top: 550
};
var missiles = [];
var fiende = [
    { left: 250, top: 75 },
    { left: 350, top: 75 },
    { left: 450, top: 75 },
    { left: 550, top: 75 },
    { left: 650, top: 75 },
    { left: 750, top: 75 },
    { left: 850, top: 75 },
    { left: 950, top: 75 },
    { left: 250, top: 160 },
    { left: 350, top: 160 },
    { left: 450, top: 160 },
    { left: 550, top: 160 },
    { left: 650, top: 160 },
    { left: 750, top: 160 },
    { left: 850, top: 160 },
    { left: 950, top: 160 },
];

document.onkeydown = function (e) {
    if (e.keyCode === 37) {
        // Venstre
        pilot.left = pilot.left - 15;
    }
    if (e.keyCode === 39) {
        // Hoyre
        pilot.left = pilot.left + 15;
    }
    if (e.keyCode === 32) {
        // Mellomrom (skyt)
        missiles.push({
            left: pilot.left + 20,
            top: pilot.top - 20
        });
        drawMissiles()
    }
    drawPilot();
}
function drawPilot() {
    document.getElementById('pilot').style.left = pilot.left + 'px';
    document.getElementById('pilot').style.top = pilot.top + 'px';
}
function drawMissiles() {
    document.getElementById('missiles').innerHTML = ""
    for (var i = 0; i < missiles.length; i++) {
        document.getElementById('missiles').innerHTML += `<div class='missile1' style='left:${missiles[i].left}px; top:${missiles[i].top}px'></div>`;
    }
}
// farten paa missilene
function moveMissiles() {
    for (var i = 0; i < missiles.length; i++) {
        missiles[i].top = missiles[i].top - 15
    }
}
if (missiles.length > 10) {
    var removed = missiles.splice(0);
}
function drawFiende() {
    document.getElementById('fiende').innerHTML = ""
    for (var i = 0; i < fiende.length; i++) {
        document.getElementById('fiende').innerHTML += `<div class='enemy' style='left:${fiende[i].left}px; top:${fiende[i].top}px'></div>`;
    }
}
function moveFiende() {
    for (var i = 0; i < fiende.length; i++) {
        fiende[i].top = fiende[i].top + 15;
    }
}

function collisionDetection() {
    for (var enemy = 0; enemy < fiende.length; enemy++) {
        for (var missile = 0; missile < missiles.length; missile++) {
            if (
                missiles[missile].left >= fiende[enemy].left &&
                missiles[missile].left <= (fiende[enemy].left + 50) &&
                missiles[missile].top <= (fiende[enemy].top + 50) &&
                missiles[missile].top >= fiende[enemy].top
            ) {
                fiende.splice(enemy, 1);
                missiles.splice(missile, 1);
            }
        }
    }
}

function skyting() {
    moveMissiles();
    drawMissiles();
    collisionDetection();
    requestAnimationFrame(skyting);
}

function side() {
    // moveFiende flytter den nedover
    // moveFiende();
    // flytter den fra side til side
    drawFiende();
    requestAnimationFrame(side);
}

requestAnimationFrame(skyting);
requestAnimationFrame(side);

function setup() {
    document.getElementById('fiende').style.animation = 'bevegelse 32s forwards'
}
// musikk
//let lyd = document.getElementById("lyd");
//let lyd = document.createElement("audio");
//lyd.play();