// @ts-check

class Person {
    constructor(fornavn, etternavn, alder, kjonn, loypevalg) {
        this.fornavn = fornavn;
        this.etternavn = etternavn;
        this.alder = alder;
        this.kjonn = kjonn;
        this.loypevalg = loypevalg;
    }
}

function setup() {
    let divMain = document.getElementById("main");
    let inpFornavn = document.getElementById("fornavn");
    let inpEtternavn = document.getElementById("etternavn");
    let inpAlder = document.getElementById("alder");
    let inpKjonn = document.getElementById("kjonn");
    let inpLoypevalg = document.getElementById("loypevalg");
    let btnLagre = document.getElementById("lagre");

    btnLagre.addEventListener("click", lagrePerson);

    let personer = [];

    function lagrePerson() {
        let fornavn = inpFornavn.value;
        let etternavn = inpEtternavn.value;
        let alder = inpAlder.valueAsNumber;
        let kjonn = inpKjonn.value;
        let loypevalg = inpLoypevalg.value;
        let p = new Person(fornavn, etternavn, alder, kjonn, loypevalg);
        personer.push(p);
        lagSoylerForPersoner();
    } 

    function lagSoylerForPersoner() {
        divMain.innerHTML = "";
        for (let i = 0; i < personer.length; i++) {
            let p = personer[i];
            let s = lagSoyle(p.loypevalg * 2);
            setEtikett(s, p.fornavn + ' ' + p.etternavn + ' ' + p.alder + ' ' + p.kjonn + ' ' + p.loypevalg);
            divMain.appendChild(s);
        }
    }


}