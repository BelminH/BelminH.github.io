// @ts-check
class Land {
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
    let selL1 = document.getElementById("land1");
    let selL2 = document.getElementById("land2");
    let selL3 = document.getElementById("land3");
    let selL4 = document.getElementById("land4");
    let divMain = document.getElementById("main");
    let divGrafikk = document.getElementById("grafikk");
    let divOversikt = document.getElementById("oversikt");
    let btnLagre = document.getElementById("lagre");
    let inpNavn = document.getElementById("navn");
    let inpDiameter = document.getElementById("diameter");

    btnLagre.addEventListener("click", lagreData);
    btnTegn.addEventListener("click", visGrafisk);


    let landListe = new Map();
    let land = new Land("Merkur", 57.91, 0.24, 4879, 47.8, 0.33)
    landListe.set("Merkur", land);

    visListe();

    function lagreData() {
        let navn = inpNavn.value;
        let diameter = inpDiameter.value;

        let land = new Land(navn, diameter);
        landListe.set(navn, land);
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
            let liste = landListe.get(navn);
            if (liste.diameter > max) max = liste.diameter;
        })
        /* for å få map til å funke*/
        let nyListe = Array.from(liste).map(navn => landListe.get(navn));

        let sortertListe = Array.from(nyListe).map(e => (e)).sort((a, b) => b.diameter - a.diameter);
        console.log(sortertListe);
        sortertListe.forEach(e => {
            lagRunning(e, max);
        })

    }

    /**
     * Lager en running som tilsvarer bef. i et valgt planet
     * @param {Land} land   Navn på et planet som skal finnes i planetListe
     * @param {number} max  maksimum bef for valgte planet
     */
    function lagRunning(land, max) {
        let radius = Math.sqrt(200 * 200 * (+land.diameter / max));
        let sirkel = document.createElement("div");
        sirkel.className = "sirkel";
        divGrafikk.appendChild(sirkel);
        sirkel.style.width = sirkel.style.height = radius + "px";

    }


    function visListe() {

        let s = "";
        landListe.forEach(land => {
            s += `<option>${land.navn}</option>`;
        })
        selL1.innerHTML = selL2.innerHTML = selL3.innerHTML = selL4.innerHTML = s;
    }
}