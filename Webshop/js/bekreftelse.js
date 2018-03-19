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
    let ref = firebase.database().ref("bestilling");

    function visBestilling(snapshot) {
        let bestillingnr = snapshot.key;
        let info = snapshot.val();
        divListe.innerHTML += `
            <div>
              <h4>Bestilling: ${bestillingnr}</h4>
              <ul>
               <li>Navn: ${info.navn}
               <li>Mobil: ${info.mobil}
               <li>Epost: ${info.email}
              </ul>
            </div>
          `;
    }
    ref.on("child_added", visBestilling);
}