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
    let spanKunde = document.getElementById("kundevelger");
    let divDyr = document.getElementById("dyr");

    let ref = firebase.database().ref("kunde");

    ref.once("value").then(function (snapshot) {
        let kundene = snapshot.val();
        if (kundene) {
            let dropBox = makeDrop(kundene);
            spanKunde.innerHTML = dropBox;

            let drpKunde = document.getElementById("kundenr");
            drpKunde.addEventListener("change", visDyr);
        }
    });

    function visDyr(e) {
        let valgt = +document.getElementById("kundenr").value;
        let ref = firebase.database().ref("dyr").orderByChild("kundenr").equalTo(valgt);
        ref.once("value").then(function (snapshot) {
            let dyrene = snapshot.val();
            if (dyrene) {
                let dyrnr = Object.keys(dyrene);
                let dyrliste = `<ol>` +
                    dyrnr.map(e => `<li>${dyrene[e].navn} ${dyrene[e].art}</li>`).join("")
                    + `</ol>`;
                divDyr.innerHTML = dyrliste;

            }
        });
    }


    function makeDrop(kunder) {
        let box = '<select id="kundenr">';
        let kundenr = Object.keys(kunder);
        let navn = kundenr.map(e =>
            `<option value="${e}">${kunder[e].fornavn}</option>`);
        box += navn.join("") + "</select>";
        return box;
    }

}