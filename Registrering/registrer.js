// @ts-check

class Person {
    constructor(navn, alder, adresse) {
        this.alder = alder;
        this.navn = navn;
        this.adresse = adresse;
    }
}

function setup() {

    let personListe = [];

    let inpNavn = document.getElementById("navn");
    let inpAlder = document.getElementById("alder");
    let inpAdresse = document.getElementById("adresse");
    let divOversikt = document.getElementById("oversikt");
    let btnLagre = document.getElementById("lagre");

    btnLagre.addEventListener("click", lagreData);

    function lagreData() {
        let navn = inpNavn.value;
        let alder = inpAlder.value;
        let adresse = inpAdresse.value;
        let person = new Person(navn, alder, adresse);
        personListe.push(person);
        visListe();
    }

    function visListe {
        let innhold = "<ol>";
        for (let p of personListe) {
            innhold += `<li>Navn:${p.navn} Alder:${p.aldrer} Adresse:${p.adresse}</li>`;
        }
        innhold += "</ol>"
        divOversikt.innerHTML = innhold;
    }
}