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
}