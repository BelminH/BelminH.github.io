// @ts-check

function setup() {
    let divHeader = document.getElementById("header");
    let outMelding = document.querySelector("#melding");
    let inpNavn = document.getElementById("navn");
    let inpAlder = document.getElementById("alder");
    let inpKlasse = document.getElementById("klasse");
    let inpMobil = document.getElementById("mobil");
    let inpEpost = document.getElementById("epost");
    let inpAdresse = document.getElementById("adresse");
    let btnLagre = document.getElementById("lagre");
    btnLagre.addEventListener("click", lagreNavn);

    function lagreNavn(e) {
        let navn = inpNavn.value;
        let alder = inpAlder.value;
        let klasse = inpKlasse.value;
        let mobil = inpMobil.value;
        let epost = inpEpost.value;
        let adresse = inpAdresse.value;
        outMelding.innerHTML = `Du heter ${navn} og er ${alder} år. Du går i ${klasse} og er bor ${adresse}. Eposten din er ${epost}, og nummeret ditt er ${mobil}`;
    }
}


function LesFraDatabase() {
    
}