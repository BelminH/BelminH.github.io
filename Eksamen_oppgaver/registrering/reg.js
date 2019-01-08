// @ts-check


class Person {
    constructor(alder,adresse) {
        this.alder = alder;
        this.adresse = adresse;
    }
}


function setup() {

    let personListe = [ ];

    let inpAlder = document.getElementById("alder");
    let inpAdresse = document.getElementById("adresse");
    let btnLagre = document.getElementById("lagre");
    let divOversikt = document.getElementById("oversikt");
    btnLagre.addEventListener("click", lagreData);

    

    function lagreData() {
        let alder = inpAlder.value;
        let adresse = inpAdresse.value;
        let person = new Person(alder,adresse);
        personListe.push(person);
        visListe();
    }

    function visListe() {
        let innhold = "<ol>";
        for (let p of personListe) {
           innhold += `  Alder:${p.alder} Antall dager:${p.adresse}</li>`;
           if(p.adresse > 7) {
               alert("Maksimum 7 dager");
               return;
           }
        }
        innhold += "</ol>";
        divOversikt.innerHTML = innhold;
    }
}
