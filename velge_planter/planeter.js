// @ts-check
class Planet {
    constructor(navn, baneradius, periode, diameter, banefart, masse) {
        this.navn = navn;
        this.baneradius = baneradius;
        this.periode = periode;
        this.diameter = diameter;
        this.banefart = banefart;
        this.masse = masse;
    }
}

function setup() {
    let btnTegn = document.getElementById("tegn");
    let selL1 = document.getElementById("planet1");
    let selL2 = document.getElementById("planet2");
    let selL3 = document.getElementById("planet3");
    let selL4 = document.getElementById("planet4");
    let divMain = document.getElementById("main");
    let divGrafikk = document.getElementById("grafikk");
    let divOversikt = document.getElementById("oversikt");
    let btnLagre = document.getElementById("lagre");
    let inpNavn = document.getElementById("navn");
    let inpDiameter = document.getElementById("diameter");

    btnLagre.addEventListener("click", lagreData);
    btnTegn.addEventListener("click", visGrafisk);


    let planetListe = new Map();
    let planet = new Planet("Merkur", 57.91, 0.24, 4879, 47.8, 0.33)
    planetListe.set("Merkur", planet);

    visListe();

    function lagreData() {
        let navn = inpNavn.value;
        let diameter = inpDiameter.value;

        let planet = new Planet(navn, diameter);
        planetListe.set(navn, planet);
        visListe();
    }

    function visGrafisk() {
        let l1 = selL1.value;
        let l2 = selL2.value;
        let l3 = selL3.value;
        let l4 = selL4.value;
        if (l1 === l2 && l3 === l4 && l2 === l3) {
            alert("Velg minst to planter");
            return;
        }
        let liste = new Set([l1, l2, l3, l4]);
        divGrafikk.innerHTML = "";

        let max = 0;
        liste.forEach(navn => {
            let liste = planetListe.get(navn);
            if (liste.diameter > max) max = liste.diameter;
        })
        /* for å få map til å funke*/
        let nyListe = Array.from(liste).map(navn => planetListe.get(navn));

        let sortertListe = Array.from(nyListe).map(e => (e)).sort((a, b) => b.diameter - a.diameter);
        console.log(sortertListe);
        sortertListe.forEach(e => {
            lagRunning(e, max);
        })

    }

    /**
     * Lager en running som tilsvarer diameter. i et valgt planet
     * @param {Planet} planet   Navn på et planet som skal finnes i planetListe
     * @param {number} max  maksimum diamter for valgte planet
     */
    function lagRunning(planet, max) {
        let radius = Math.sqrt(200 * 200 * (+planet.diameter / max));
        let sirkel = document.createElement("div");
        sirkel.className = "sirkel";
        divGrafikk.appendChild(sirkel);
        sirkel.style.width = sirkel.style.height = radius + "px";
    }

    function visListe() {

        let s = "";
        planetListe.forEach(planet => {
            s += `<option>${planet.navn}</option>`;
        })
        selL1.innerHTML = selL2.innerHTML = selL3.innerHTML = selL4.innerHTML = s;

    }

}

