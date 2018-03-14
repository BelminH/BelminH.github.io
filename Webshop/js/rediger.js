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

    let inpBruker = document.getElementById("bruker");
    let inpInnlegg = document.getElementById("innlegg");

    let btnLagreBruker = document.getElementById("lagrebruker");
    btnLagreBruker.addEventListener("click", lagreBruker);

    let btnLagreInnlegg = document.getElementById("lagreinnlegg");
    btnLagreInnlegg.addEventListener("click", lagreBruker);

    function lagreBruker(e) {
        let bruker = inpBruker.value;
        let kortid = inpInnlegg.value;
        let ref = database.ref("bruker/" + bruker);
        ref.set({ kortid });
    }

    function lagreInnlegg(e) {
        let innlegg = inpInnlegg.value;
        let antallnye = inpAntallNye.value;
        let ref = database.ref("innlegg/" + innlegg);
        ref.set({ antallnye });
    }


