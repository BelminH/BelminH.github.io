function setup() {
    var config = {
        apiKey: "AIzaSyCakcm_c8ujPiAsPFp0lQRGyIVZ8XDKhZg",
        authDomain: "risk-27285.firebaseapp.com",
        databaseURL: "https://risk-27285.firebaseio.com",
        projectId: "risk-27285",
        storageBucket: "risk-27285.appspot.com",
        messagingSenderId: "147342101184"
    };
    firebase.initializeApp(config);

    let database = firebase.database();