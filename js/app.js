// To choose Character with VEX Library
function CharacterChoose() {
    vex.dialog.open({
        message: 'Which character do you want to play?',
        input: [
            '<label for="char-boy"><img src="images/char-boy.png" class="imagepadding" /></label>',
            '<img src="images/char-cat-girl.png" class="imagepadding" />',
            '<img src="images/char-pink-girl.png" class="imagepadding" />',
            '<img src="images/char-horn-girl.png" class="imagepadding" />',
            '<img src="images/char-princess-girl.png" class="imagepadding" />'
        ].join(''),
        buttons: [
            $.extend({}, vex.dialog.buttons.NO, {
                text: 'Char-Princess-Girl',
                click: function () {
                    this.value = 'char-princess-girl';
                    this.close();
                }
            }),
            $.extend({}, vex.dialog.buttons.NO, {
                text: 'Char-Horn-Girl',
                click: function () {
                    this.value = 'char-horn-girl';
                    this.close();
                }
            }),
            $.extend({}, vex.dialog.buttons.NO, {
                text: 'Char-Pink-Girl',
                click: function () {
                    this.value = 'char-pink-girl';
                    this.close();
                }
            }),
            $.extend({}, vex.dialog.buttons.NO, {
                text: 'Char-Cat-Girl',
                click: function () {
                    this.value = 'char-cat-girl';
                    this.close();
                }
            }),
            $.extend({}, vex.dialog.buttons.NO, {
                text: 'Char-Boy',
                click: function () {
                    this.value = 'char-boy';
                    this.close();
                }
            })
        ],
        callback: function (value) {
            // Choose Character
            switch (value) {
                case "char-boy":
                    console.log('You choose Char-boy');
                    ChooseChar(value);
                    break;
                case "char-cat-girl":
                    console.log('You choose Char-Cat-Girl');
                    ChooseChar(value);
                    break;
                case "char-horn-girl":
                    console.log('you choose Char-Horn-Girl');
                    ChooseChar(value);
                    break;
                case "char-pink-girl":
                    console.log('You Choose Char-Pink-Girl');
                    ChooseChar(value);
                    break;
                case "char-princess-girl":
                    console.log('You Choose Char-Princess-Girl');
                    ChooseChar(value);
                    break;
                    // If I didn't choose anything, select Char-Boy
                default:
                    console.log('You choose Char-boy');
                    ChooseChar('char-boy');
            }
        }
    })
}

// Choose Character
function ChooseChar(value) {
    Player.sprite = 'images/' + value + '.png';
    Player.prototype.render = function () {
        ctx.drawImage(Resources.get(Player.sprite), this.x, this.y);
    }
    console.log(Player.sprite);
}

// Enemies our player must avoid
var Enemy = function (x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;

    // when off canvas, reset position of enemy to move across again
    if (this.x > 550) {
        this.x = -100;
        this.speed = 100 + Math.floor(Math.random() * 512);
    }

    // Check for collision between player and enemies
    if (player.x < enemy.x + 60 &&
        player.x + 37 > enemy.x &&
        player.y < enemy.y + 25 &&
        30 + player.y > enemy.y) {
        player.x = 200;
        player.y = 380;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
let Player = function (x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/char-boy';
};

let score = 0;

Player.prototype.update = function () {
    // Side Collision Check
    if (this.x > 400) {
        this.x = 400;
    }
    if (this.x < 0) {
        this.x = 0;
    }
    if (this.y > 400) {
        this.y = 400;
    }
    // When Player reach the goal
    if (this.y < -50) {
        this.x = 200;
        this.y = 390;
        score += 1;
        console.log(score);
    }
};

Player.prototype.handleInput = function (keyPress) {
    switch (keyPress) {
        case 'left':
            this.x -= this.speed;
            break;
        case 'up':
            this.y -= this.speed;
            break;
        case 'right':
            this.x += this.speed;
            break;
        case 'down':
            this.y += this.speed;
            break;
    }
};

// Player.prototype.render = function () {
// ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
// }
// Initial Setting because I don't want to repetition
ChooseChar('char-boy');


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let allEnemies = [];
let player = new Player(200, 400, 70);
var enemyPosition = [60, 140, 220];
var enemy;

enemyPosition.forEach(function (posY) {
    enemy = new Enemy(0, posY, 100 + Math.floor(Math.random() * 512));
    allEnemies.push(enemy);
});

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        // Add Key code to use WASD Button
        65: 'left',
        87: 'up',
        68: 'right',
        83: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


// Check this link https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true