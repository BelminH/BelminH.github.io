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
// ... flere linjer
btnLagre.addEventListener("click", lagreData);

function lagreData() {
    let navn = inpNavn.value;
    let befolkning = inpBefolkning.value;
    //  .. flere linjer
    let land = new Land(navn, befolkning);
    landListe.push(person);
    visListe();
}

function visListe() {
    let innhold = "";
    for (let l of landListe) {
        innhold += `Navn:${l.navn}  Befolkning:${l.befolkning} ....`;
    }
    innhold += "";
    divOversikt.innerHTML = innhold;
}