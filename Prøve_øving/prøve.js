// @ts-check


class Person {
    constructor(navn,alder,adresse) {
        this.alder = alder;
        this.navn = navn;
        this.adresse = adresse;
    }
}


function setup() {

    let personListe = [ ];

    let inpElektro = document.getElementById("elektro");
    let inpKlær = document.getElementById("klær");
    let inpBrus = document.getElementById("brus");
    let btnLagre = document.getElementById("lagre");
    let divOversikt = document.getElementById("oversikt");
    btnLagre.addEventListener("click", lagreData);

    function lagreData() {
        let elektro = inpElektro.value;
        let klær = inpKlær.value;
        let brus = inpBrus.value;
        let person = new Person(elektro,klær,brus);
        personListe[0] = person;
        visListe();
    }

    function visListe() {
        let innhold = "";
        for (let p of personListe) {
           innhold += `Navn:${p.navn}  Alder:${p.alder} Adresse:${p.adresse}`;
        }
        innhold += "";
        divOversikt.innerHTML = innhold;
    }
}