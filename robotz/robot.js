function setup() {
    let dvBrett = document.getElementById("brett")
    let playerDiv = document.createElement("div");
    playerDiv.className = "player";
    divBrett.appendChild(brettDiv);
    let player = {
        x: 250,
        y: 250,
        vx: 1, 
        vy: 1, 
        div: playerDiv
    }


    setInterval(animate, 50);

    function animate () {
        player.x += 1;
        player.y += 1;
        player.div.style.left = player.x + "px";
        player.div.style.top = player.x + "px";
    }
}