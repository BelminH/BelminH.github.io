function setup() {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDk8WaEwZ89uXjqFj0wo2J0Nfmdi3idV3E",
    authDomain: "webchat-266a7.firebaseapp.com",
    databaseURL: "https://webchat-266a7.firebaseio.com",
    projectId: "webchat-266a7",
    storageBucket: "webchat-266a7.appspot.com",
    messagingSenderId: "1006371844842"
  };
  firebase.initializeApp(config);
  let divListe = document.getElementById("liste");
  let ref = firebase.database().ref("medlemmer");

  function visMedlemmer(snapshot) {
    let medlemmernr = snapshot.key;
    let info = snapshot.val();
    divListe.innerHTML += `
          <div>
            <h4>medlemmer nr ${medlemmernr}</h4>
            <ul>
             <li>${info.fornavn} ${info.etternavn}
             <li>Adresse : ${info.adresse}
             <li>Epost ${info.epost}
            </ul>
          </div>
        `;
  }
  ref.on("child_added", visMedlemmer);
} 