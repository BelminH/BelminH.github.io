// @ts-check

/**
 * eihuiuhthurhuieruhierhtiu
 * @param {string} s
 */

function storForbokstav(s) {
    let f = s.charAt(0).toUpperCase();
    let r = s.substr(1);
    return f + r.toLocaleLowerCase();
}

/**
 * Tar et navn some "ole johann olsen"
 * og gir tilbake "Ole Johann Olsen"
 * @param {string} s
 */

function niceName(s) {
    let nameParts = s.split(" ");
    let result = [];
    for (let i = 0; i < nameParts.length; i++) {
        let navnebit = nameParts[i];
        result.push(storForbokstav(navnebit));
    }
    return result.join(" ");
}
/**
 * Returnerer en div med 
 * @param {number} bredde
 */
function lagSoyle(bredde) {
    let div = document.createElement("div");
    div.className = "soyle";
    div.style.width = bredde + "px";
    return div;
}

function setEtikkett(soyle, navn) {
    soyle.innerHTML = niceName(navn);
}

function bmi(person) {
    let h = person.hoyde / 100;
    let bmiVerdi = person.vekt / (h*h);
    return bmiVerdi;
}