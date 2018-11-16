// @ts-check

class Bestilling {
    constructor(voksne, barn, forestilling) {
        this.voksne = voksne;
        this.barn = barn;
        this.forestilling = forestilling;
    }
}

function setup() {

    let ForestillingListe = [];

    let inpVoksne = document.getElementById("voksne");
    let inpBarn = document.getElementById("barn");
    let inpForestilling = document.getElementById("forestilling");
    let btnLagre = document.getElementById("lagre");
    let divOversikt = document.getElementById("oversikt");

    btnLagre.addEventListener("click", lagreData);

    function lagreData() {
        let voksne = inpVoksne.value;
        let barn = inpBarn.value;
        let forestilling = inpForestilling.value;
        let bestilling = new Bestilling(voksne,barn,forestilling);
        ForestillingListe.push(bestilling);
    }
    function ForestillingListe {
        let innhold = "<ol>";
        for (let b of ForestillingListe) {
            innhold += `<li>Voksne:${b.voksne} Barn:${b.barn} Forestilling:${b.forestilling}</li>`;
        }
        innhold += "</ol>"
        divOversikt.innerHTML = innhold;
    }
}