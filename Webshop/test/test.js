// Initialize Firebase
var config = {
    apiKey: "AIzaSyCti2bGCwBe1KbxG_VpKp3_PUnOY78lgX0",
    authDomain: "webchat-test-b7ef0.firebaseapp.com",
    databaseURL: "https://webchat-test-b7ef0.firebaseio.com",
    projectId: "webchat-test-b7ef0",
    storageBucket: "webchat-test-b7ef0.appspot.com",
    messagingSenderId: "237635251490"
};
firebase.initializeApp(config);

// When the user presses enter on the message input, write the message to firebase.
$("#messageInput").keypress(function (e) {
    if (e.keyCode == 13) {
        var name = $("#nameInput").val();
        var text = $("#messageInput").val();
        messagesRef.push({ name: name, text: text });
        $("#messageInput").val("");
    }
});

// Add a callback that is triggered for each chat message.
messagesRef.limitToLast(10).on("child_added", function (snapshot) {
    var message = snapshot.val();
    $("<div/>").text(message.text).prepend($("<em/>")
        .text(message.name + ": ")).appendTo($("#messagesDiv"));
    $("#messagesDiv")[0].scrollTop = $("#messagesDiv")[0].scrollHeight;
});