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

    let divListe = document.getElementById("liste");
    let ref = firebase.database().ref("innlegg");

    function visInnleggnr(snapshot) {
        let innleggnr = snapshot.key;
        let info = snapshot.val();
        let ref2 = firebase.database().ref("bruker/" + info.brukernr);
        ref2.once("value").then(function (snapshot) {
            let bruker = snapshot.val();
            if (bruker) {
                divListe.innerHTML += `
                <div>
                  <h4> ${innleggnr}</h4>
                  <ul>
                   <li>${bruker.navn}
                   <li>Melding : ${info.melding}
                  </ul>
                </div>
              `;
            }
          });
       
    }
    ref.on("child_added", visInnleggnr);
} 