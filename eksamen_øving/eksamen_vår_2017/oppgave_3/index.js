// @ts-check
class Hotell {
    constructor(navn, kortnavn, sommerpris, vinterpris) {
        this.navn = navn;
        this.kortnavn = kortnavn;
        this.s = sommerpris;
        this.v = vinterpris;
    }
}

let vispris;

let hotellPris = new Map();
hotellPris.set("aurora",new Hotell("Aurora", "aurora", 590, 690));
hotellPris.set("downtown"new Hotell("Downtown", "downtown", 590, 750));
hotellPris.set("cityhall"new Hotell("City Hall", "cityhall", 450, 530));

/**
 * lager en map over hotell og priser
 * kan slå opp på hotell
 */
function setup() {
    let selBy = document.getElementById("by");
    let formSkjema = document.getElementById("skjema");
    let selPeriode = document.getElementById("periode");
    let selDobbelt = document.getElementById("dobbelt");
    let selEnkelt = document.getElementById("enkelt");
    let selHotell = document.getElementById("hotell");
    let chkKultur = document.getElementById("kultur");
    let spanPris = document.getElementById("pris");

    selBy.addEventListener("change", visValgtBy);

    function visValgtBy() {
        formSkjema.classList.remove("valgt");
        // @ts-ignore - Klager på value, men jeg vet at value finnes
        let by = selBy.value;
        if (by === "") return;
        // Ingen by valgt - hopp ut
        if (by === "newyork") {
            // Bare løsning for New York
            formSkjema.classList.add("valgt");
        }
    }

    vispris = function () {
        // @ts-ignore - Klager på value, men jeg vet at value finnes
        let periode = selPeriode.value;
        // @ts-ignore - Klager på value, men jeg vet at value finnes
        let dobbelt = selDobbelt.value;
        // @ts-ignore - Klager på value, men jeg vet at value finnes
        let enkelt = selEnkelt.value;
        // @ts-ignore - Klager på value, men jeg vet at value finnes
        let hotell = selHotell.value;
        // @ts-ignore - Klager på checked, men jeg vet at checked finnes
        let kultur = chkKultur.checked;
        // en måte å regne ut pris
        /*let pris = 0;
        if (kultur) {
            pris = 700;
        }*/
        let pris = kultur ? 700 : 0;
        let rompris = hotellPris.get(hotell);
        let sesongpris = rompris[periode];
        pris += sesongpris * dobbelt + (sesongpris + 300) * enkelt;


        spanPris.innerHTML = pris.toFixed(2);
    }
}