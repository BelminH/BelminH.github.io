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
    let divDyr = document.getElementById("dyr");

    let ref = firebase.database().ref("kunde");

    ref.once("value").
        then(function (snapshot) {
            let kundene = snapshot.val();
            if (kundene) {
                let dropBox = makeDrop(kundene);
                divListe.innerHTML = dropBox;

            }
        });

    function makeDrop(kunder) {
        let box = '<select id="kundenr">';
        let kundenr = Object.keys(kunder);
        let navn = kundenr.map(e =>
            `<option values="${e}">${kunder[e].fornavn}</option`);
        box += navn.join("") + "</select";
    }

}