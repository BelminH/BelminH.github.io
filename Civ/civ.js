function setup() {
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
    let ref = firebase.database().ref("nations");

    function visLand(snapshot) {
        let navn = snapshot.key;
        let info = snapshot.val();
        divListe.innerHTML += `
          <div>
            <h4>${navn}</h4>
            <ul>
             <li>Capital ${info.capital}
             <li>${info.title} ${info.leader}
             <li> Perks
                <ul>
                    <li> Money: ${info.perk.money}
                    <li> Move: ${info.perk.move}
                    <li> War: ${info.perk.war}
                    <li> Science: ${info.perk.science}
                </ul>
            </ul>
          </div>
        `;
    }

    ref.on("child_added", visLand);
}