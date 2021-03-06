level = 0;
score = 0;
var explodedPlayer = new Image();
explodedPlayer.src = "../img/xp.png";
var explosiongreen = new Image();
explosiongreen.src = "alienexplosiongreen.png";
var explosionyellow = new Image();
explosionyellow.src = "alienexplosionyelow.png";
var explosionwhite = new Image();
explosionwhite.src = "alienexplosionwhite.png";
function startGame() {
  gamearea.start();
}
function shootPlayer() {
  ind = Math.floor(Math.random() * aliens.length);
  if (aliens[ind].type != '0' && aliens[ind].type != 'x') aliens[ind].shoot();
}
function updateScore() {
  gamearea.context.clearRect(900, 0, 200, 150);
  gamearea.context.fillStyle = "Chartreuse";
  gamearea.context.font = "bold 30px Consolas";
  gamearea.context.fillText("Score: " + score, 900, 50);
}
function updateLifes() {
  gamearea.context.clearRect(500, 0, 200, 150);
  gamearea.context.fillStyle = "Chartreuse";
  gamearea.context.font = "bold 30px Consolas";
  gamearea.context.fillText("��� X: " + player.lifes, 500, 50);
}
function updateLevel() {
  gamearea.context.clearRect(50, 0, 200, 150);
  gamearea.context.fillStyle = "Chartreuse";
  gamearea.context.font = "bold 30px Consolas";
  gamearea.context.fillText("Level: " + level, 50, 50);
}
function shootAliens(event) {
  if (event.keyCode == 32) player.shoot();
}

// kjører hvis ikke spilleren flytter på seg
function movePlayer(event) {
  if (!player.moving) {
    moveInterval = setInterval(function () { player.move(event); }, 50);
    player.moving = true;
  }
}
function stopPlayer(event) {
  clearInterval(moveInterval);
  player.moving = false;
}
var gamearea = {
  // området for hvor spillet er på 
  canvas: document.createElement("canvas"),
  start: function () {
    this.canvas.width = 1100;
    this.canvas.height = 600;
    this.canvas.style.backgroundColor = "black";
    this.canvas.style.display = "block";
    this.canvas.style.top = "20%";
    this.canvas.style.left = "30%";
    this.canvas.style.margin = "-20px";
    this.canvas.style.padding = "0";
    this.canvas.style.position = "absolute";
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.context = this.canvas.getContext("2d");
    player.draw();
    nums = ['3', '3', '2', '2', '1'];
    shiftShape = 0, dx = 0, dy = 0, forward = true; nbShotaliens = 0;
    updateScore();
    aliens = new Array(55);
    changeShape = setInterval(displayAlien, 500 / (0.5 * level + 1));
    alShootInterval = setInterval(shootPlayer, 2500);
    window.addEventListener("keydown", movePlayer, event);
    window.addEventListener("keyup", stopPlayer, event);
    window.addEventListener("keydown", shootAliens, event);
  },
  stop: function (winning) {
    clearInterval(changeShape);
    clearInterval(alShootInterval);
    window.removeEventListener("keydown", movePlayer, event);
    window.removeEventListener("keyup", stopPlayer, event);
    window.removeEventListener("keydown", shootAliens, event);

    if (winning) {
      level++; gamearea.start();
    } else {
      gamearea.context.globalAlpha = 0.5;
      gamearea.context.fillRect(0, 0, 1100, 600);
      gamearea.context.fillStyle = "ivory";
      gamearea.context.globalAlpha = 1.0;
      gamearea.context.fillRect(250, 10, 450, 150);
      gamearea.context.font = "40px Arial Black";
      gamearea.context.fillStyle = "red";
      gamearea.context.fillText("Game over, Loser!!", 270, 100);
    }
  }
}
var player = {
  x: 40, y: 580, moving: false, lifes: 3,
  draw: function () {
    gamearea.context.fillStyle = "ivory";
    gamearea.context.fillRect(this.x, this.y, 80, 20);
    gamearea.context.fillRect(this.x + 35, this.y - 20, 10, 20);
  },
  update: function (d) {
    this.x += d;
  },
  //spilleren ikke går ut av skjermen
  move: function (ev) {
    gamearea.context.clearRect(this.x, this.y, 80, 20);
    gamearea.context.clearRect(this.x + 35, this.y - 20, 10, 20);
    if (ev.keyCode == 37 && this.x > 0) this.update(-15);
    else if (ev.keyCode == 39 && this.x + 80 < innerWidth) this.update(15);
    this.draw();
  },
  shoot: function () {
    var b = new bullet(this.x + 40, 560, -10);
    b.interval = setInterval(function () { b.update(); }, 10);
  }
}
function displayAlien() {
  updateLevel();
  updateLifes();
  if (shiftShape == 0)
    for (i = 0; i < aliens.length; i++)
      aliens[i] = new alien(nums[i % 5]);
  gamearea.context.clearRect(0, 100, 1100, 460);
  for (i = 0; i < 11; i++)
    for (j = 0; j < 5; j++) {
      aliens[i * 5 + j].draw(65 * i + 30 + dx, 260 - j * 40 + dy, shiftShape % 2);
      if (aliens[i * 5 + j].y >= 530 && aliens[i * 5 + j].type != '0' && aliens[i * 5 + j].type != 'x')
        gamearea.stop(false);
    }
  if (forward) {
    dx += 20;
    if (dx > 300) forward = false;
  } else {
    dx -= 20;
    if (dx < 20) {
      forward = true;
      dy += 20;
    }
  }
  shiftShape++;
}

function alien(type) {
  this.type = type; this.score = 0;
  this.draw = function (x, y, shape) {
    this.x = x; this.y = y; var alienImage = new Image();
    switch (this.type) {
      case '0':
        alienImage.src = this.exploimage.src;
        this.score = 0;
        this.type = 'x';
        break;
      case '1':
        ((shape == 0) ? alienImage.src = "../img/enemy.png" : alienImage.src = "../img/enemy.png");
        this.exploimage = explosiongreen;
        this.score = 40;
        break;
      case '2':
        ((shape == 0) ? alienImage.src = "../img/enemy.png" : alienImage.src = "../img/enemy.png");
        this.exploimage = explosionwhite;
        this.score = 20;
        break;
      case '3':
        ((shape == 0) ? alienImage.src = "../img/enemy.png" : alienImage.src = "../img/enemy.png");
        this.exploimage = explosionyellow;
        this.score = 10;
        break;
      default:
        gamearea.context.clearRect(this.x, this.y, 45, 30);
        return;
    }
    alienImage.onload = function () { gamearea.context.drawImage(alienImage, x, y, 45, 30); }
  }
  this.shoot = function () {
    var alienBullet = new bullet(this.x + 20, this.y + 30, 10);
    alienBullet.interval = setInterval(function () { alienBullet.update(); }, 20);
  }
}
function bullet(x, y, speed) {
  this.x = x; this.y = y; this.interval = 0;
  this.update = function () {
    gamearea.context.clearRect(this.x, this.y, 5, 10);
    if (speed < 0) {
      for (i = 0; i < aliens.length; i++) {
        if (this.x > aliens[i].x && this.x < aliens[i].x + 45 && this.y > aliens[i].y &&
          this.y < aliens[i].y + 30 && aliens[i].type != '0' && aliens[i].type != 'x') {
          score += aliens[i].score; updateScore();
          nbShotaliens++;
          clearInterval(this.interval);
          aliens[i].type = '0';
          if (nbShotaliens == aliens.length) gamearea.stop(true);
          return;
        }
      }
    } else {
      if (this.x > player.x && this.x < player.x + 80 && this.y > player.y && this.y < player.y + 20) {
        player.lifes--; updateLifes();
        var x = player.x;
        gamearea.context.drawImage(explodedPlayer, x, 550, 79.5, 50);
        if (player.lifes == 0) gamearea.stop(false);
        else setTimeout(function () {
          gamearea.context.clearRect(x, 550, 79.5, 50);
          player.draw();
        }, 500);
      }
    }
    this.y += speed;
    gamearea.context.fillRect(this.x, this.y, 5, 10);
  }
}