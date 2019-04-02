// @ts-check

let endringer;
// forteller fra hvilke div du skal hente informasjon
function setup() {
    let inpMil = document.getElementById("mil");
    let inpForbruk = document.getElementById("forbruk");
    let btnBeregn = document.getElementById("beregn");
    let spanResultat = document.getElementById("resultat");

    btnBeregn.addEventListener("click", visResultat);

    function visResultat() {
        let mil = inpMil.value;
        let forbruk = inpForbruk.value;
        let  = mil * forbruk;
        // tofixed gjør det automatisk til tekst
        spanResultat.innerHTML = .toFixed(2);
    }

    endringer = visResultat;
}
