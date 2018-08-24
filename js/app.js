// Enemies our player must avoid
let Enemy = function (x, y, speed) {
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
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

// To choose Character with VEX Library
function click1() {
    vex.dialog.open({
        message: 'Which character do you want to play?',
        buttons: [
            $.extend({}, vex.dialog.buttons.NO, {
                className: 'vex-dialog-button-primary-horizontal',
                text: 'Char-Boy',
                click: function (e) {
                    this.value = 'char-boy';
                    this.close();
                }
            }),
            $.extend({}, vex.dialog.buttons.NO, {
                className: 'vex-dialog-button-primary-horizontal',
                text: 'Char-Cat-Girl',
                click: function (e) {
                    this.value = 'char-cat-girl';
                    this.close();
                }
            }),
            $.extend({}, vex.dialog.buttons.NO, {
                className: 'vex-dialog-button-primary-horizontal',
                text: 'Char-Horn-Girl',
                click: function (e) {
                    this.value = 'char-horn-girl';
                    this.close();
                }
            }),
            $.extend({}, vex.dialog.buttons.NO, {
                className: 'vex-dialog-button-primary-horizontal',
                text: 'Char-Pink-Girl',
                click: function (e) {
                    this.value = 'char-pink-girl';
                    this.close();
                }
            }),
            $.extend({}, vex.dialog.buttons.NO, {
                className: 'vex-dialog-button-primary-horizontal',
                text: 'Char-Princess-Girl',
                click: function (e) {
                    this.value = 'char-princess-girl';
                    this.close();
                }
            })
        ],
        callback: function (value) {
            // char-boy','char-cat-girl','char-horn-girl','char-pink-girl','char-princess-girl
            if (value === 'char-boy') {
                console.log('You choose Char-boy');
                return value;
            } else if (value === 'char-cat-girl') {
                console.log('You choose Char-Cat-Girl');
                return value;
            } else if (value === 'char-horn-girl') {
                console.log('you choose Char-Horn-Girl');
                return value;
            } else if (value === 'char-pink-girl') {
                console.log('You Choose Char-Pink-Girl');
                return value;
            } else if (value === 'char-princess-girl') {
                console.log('You Choose Char-Princess-Girl');
                return value;
            } else {
                console.log('Choose Nothing');
                return value;
            }
        }
    })
}

let Player = function (x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = '';
};

Player.prototype.update = function () {

};

Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let allEnemies = [];
let player = new Player(50, 50, 50);



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
// document.addEventListener('keyup', function(e) {
//     var allowedKeys = {
//         37: 'left',
//         38: 'up',
//         39: 'right',
//         40: 'down'
//     };

//     player.handleInput(allowedKeys[e.keyCode]);
// });

// To choose Character with VEX Library
function click1() {
    vex.dialog.open({
        message: 'Which character do you want to play?',
        buttons: [
            $.extend({}, vex.dialog.buttons.NO, {
                className: 'vex-dialog-button-primary-horizontal',
                text: 'Char-Boy',
                click: function (e) {
                    this.value = 'Char-Boy';
                    this.close();
                }
            }),
            $.extend({}, vex.dialog.buttons.NO, {
                className: 'vex-dialog-button-primary-horizontal',
                text: 'Char-Cat-Girl',
                click: function (e) {
                    this.value = 'Char-Cat-Girl';
                    this.close();
                }
            }),
            $.extend({}, vex.dialog.buttons.NO, {
                className: 'vex-dialog-button-primary-horizontal',
                text: 'Char-Horn-Girl',
                click: function (e) {
                    this.value = 'Char-Horn-Girl';
                    this.close();
                }
            }),
            $.extend({}, vex.dialog.buttons.NO, {
                className: 'vex-dialog-button-primary-horizontal',
                text: 'Char-Pink-Girl',
                click: function (e) {
                    this.value = 'Char-Pink-Girl';
                    this.close();
                }
            }),
            $.extend({}, vex.dialog.buttons.NO, {
                className: 'vex-dialog-button-primary-horizontal',
                text: 'Char-Princess-Girl',
                click: function (e) {
                    this.value = 'Char-Princess-Girl';
                    this.close();
                }
            })
        ],
        callback: function (value) {
            // char-boy','char-cat-girl','char-horn-girl','char-pink-girl','char-princess-girl
            if (value === 'Char-Boy') {
                console.log('You choose Char-boy');
            } else if (value === 'Char-Cat-Girl') {
                console.log('You choose Char-Cat-Girl');
            } else if (value === 'Char-Horn-Girl') {
                console.log('you choose Char-Horn-Girl');
            } else if (value === 'Char-Pink-Girl') {
                console.log('You Choose Char-Pink-Girl');
            } else if (value === 'Char-Princess-Girl') {
                console.log('You Choose Char-Princess-Girl');
            } else {
                console.log('Choose Nothing');
            }
            return value;
        }
    })
}
// Check this link https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true