var boundaries = document.querySelectorAll(".boundary");
var start = document.querySelector("#start");
var end = document.querySelector("#end");
var status = document.querySelector("#status");
var win = true;

  start.addEventListener("mouseover", function() {
    document.getElementById("status").innerHTML = "Flytt musepekeren over til E for å vinne spillet";
    for (var i = 0; i < boundaries.length; i++) {
      boundaries[i].addEventListener("mouseover", function() {
        win = false;
        this.style.background = "red";
        alert("Du tapte, begynn på nytt!");
        this.style.background = "#eeeeee";
        document.getElementById("status").innerHTML = "Du tapte!";
      });
    }
    
  });

end.addEventListener("mouseover", function() {
  if (win == true) {
    document.getElementById("status").innerHTML = "Du vant!";
    alert("Gratulerer! Du vant!");
  }
  win = true;
});