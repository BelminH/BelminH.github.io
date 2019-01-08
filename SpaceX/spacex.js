// @ts-check

function setup() {
    let divSpacex = document.getElementById("spacex");
    let divInfo = document.getElementById("info");
    let h = window.innerHeight - 200 - 120;
    let py = -200;
    let fart = +2;

    let ani = setInterval(animasjon, 100);

    function animasjon() {
        py = py + fart;
        fart = fart + 1;
        divSpacex.style.top = py + "px";
        if (py > h) {
            clearInterval(ani);
            if (fart < 8) {
                console.log("du har landet");
            } else {
                divInfo.innerHTML ="du har krasjet";
            }
        }
    }
}