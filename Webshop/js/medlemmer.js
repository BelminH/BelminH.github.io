// @ts-check
function setup() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyB_MGnZqojxzv-24MtrQ1iL1j-n4XH2hTM",
        authDomain: "webshop-b8e56.firebaseapp.com",
        databaseURL: "https://webshop-b8e56.firebaseio.com",
        projectId: "webshop-b8e56",
        storageBucket: "webshop-b8e56.appspot.com",
        messagingSenderId: "662855103912"
    };
    firebase.initializeApp(config);
    let database = firebase.database();
    
    let divListe = document.getElementById("liste");
    let ref = firebase.database().ref("bruker");

    function visBruker(snapshot) {
        let brukernr = snapshot.key;
        let info = snapshot.val();
        divListe.innerHTML += `
            <div>
              <h4>Bruker nr ${brukernr}</h4>
              <ul>
               <li>${info.navn}
               <li>Mobil : ${info.mobil}
               <li>Epost ${info.epost}
              </ul>
            </div>
          `;
    }
    ref.on("child_added", visBruker);

    let btnLagreBruker = document.getElementById("lagrebruker");
    btnLagreBruker.addEventListener("click", lagreBruker);

    function lagreBruker(e) {
        let bruker = document.getElementById("bruker").value;
        let navn = document.getElementById("navn").value;
        let epost = document.getElementById("epost").value;
        let mobil = document.getElementById("mobil").value;
        let ref = database.ref("bruker/" + bruker);
        ref.set({ navn, epost, mobil });
    }


}

/* let btnLagreBruker = document.getElementById("lagrebruker");
    btnLagreBruker.addEventListener("click", lagreBruker);

    let btnLagreInnlegg = document.getElementById("lagreinnlegg");
    btnLagreInnlegg.addEventListener("click", lagreInnlegg);

    let inpBruker = document.getElementById("bruker");
    let inpInnlegg = document.getElementById("innlegg");

    function lagreBruker(e) {
        let bruker = inpBruker.value;
        let melding = inpInnlegg.value;
        let ref = firebase.database().ref("bruker/" + bruker);
        ref.set({ melding });
    }

    function lagreInnlegg(e) {
        let innlegg = inpInnlegg.value;
        let ref = firebase.database().ref("innlegg/" + innlegg);
    }*/