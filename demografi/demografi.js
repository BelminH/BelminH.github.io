class Land {
    constructor(navn, befolkning, hovedstad, bnp, areal, hbef) {
        this.navn = navn;
        this.befolkning = befolkning;
        this.hovedstad = hovedstad;
        this.bnp = bnp;
        this.areal = areal;
        this.hbef = hbef;
    }
}

let landListe = [];

let inpNavn = document.getElementById("navn");
let inpBefolkning = document.getElementById("befolkning");
let inpHovedstad = document.getElementById("hovedstad");
let inpBnp = document.getElementById("bnp");
let inpAreal = document.getElementById("areal");
let inpHbef = document.getElementById("hbef");

btnLagre.addEventListener("click", lagreData);

function lagreData() {
    let navn = inpNavn.value;
    let befolkning = inpBefolkning.value;
    let inpHovedstad = inpHovedstad.value;
    let inpBnp = inpBnp.value;
    let inpAreal = inpAreal.value;
    let inpHbef = inpHbef.value;

    let land = new Land(navn, befolkning);
    landListe.push(person);
    visListe();
}

function visListe() {
    let innhold = "";
    for (let l of landListe) {
        innhold += `Navn:${l.navn} Befolkning:${l.befolkning} Hovedstad:${l.hovedstad} Bnp:${l.bnp} Areal:${l.areal} Hbef:${l.hbef}`;
    }
    innhold += "";
    divOversikt.innerHTML = innhold;
}