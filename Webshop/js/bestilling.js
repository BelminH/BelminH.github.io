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

    let btnLagrebestilling = document.getElementById("lagrebestilling");
    btnLagrebestilling.addEventListener("click", lagreBestilling);

    function lagreBestilling(e) {
        let bestilling = document.getElementById("bestilling").value;
        let navn = document.getElementById("navn").value;
        let mobil = document.getElementById("mobil").value;
        let email = document.getElementById("email").value;
        let ref = database.ref("bestilling/" + bestilling);
        ref.set({ navn, mobil, email });
    }


}