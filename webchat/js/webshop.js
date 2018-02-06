  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCS8p-TzI-CAekrgz0jbA0k_Y0lJvP-RAo",
    authDomain: "project-civ-game.firebaseapp.com",
    databaseURL: "https://project-civ-game.firebaseio.com",
    projectId: "project-civ-game",
    storageBucket: "project-civ-game.appspot.com",
    messagingSenderId: "96399653925"
  };
  firebase.initializeApp(config);
    let divListe = document.getElementById("liste");

    let ref = firebase.database().ref("kunde");

    function visKunder(snapshot) {
        let kundenr = snapshot.key;
        let info = snapshot.val();
        divListe.innerHTML += `
          <div>
            <h4>Kunde nr ${kundenr}</h4>
            <ul>
             <li>${info.fornavn} ${info.etternavn}
             <li>Epost : ${info.epost}
             <li>Mobil ${info.mobil}
            </ul>
          </div>
        `;
    }
    ref.on("child_added", visKunder);

}