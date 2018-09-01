// To choose Character with VEX Library
function CharacterChoose() {
    vex.dialog.open({
        message: 'Which character do you want to play?',
        input: [
            // TODO :: add label - img to when I choose image also run click event
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

// Check Score Function
function CheckScore(score){
    if(score==5){
        vex.dialog.confirm({
            message: 'Your Score is 5 point!! Do you want to play more?',
            callback: function (value) {
                console.log(value)
            }
        })
    }
}

// Choose Character
function ChooseChar(value) {
    Player.sprite = 'images/' + value + '.png';
    Player.prototype.render = function () {
        ctx.drawImage(Resources.get(Player.sprite), this.x, this.y);
    }
    console.log(Player.sprite);
}

// Init Score setting
let score = 0;

// Enemy Class
let Enemy = function (x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
};

// Enemy update
Enemy.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;

    // Reset the position again when enemies are leave the canvas
    if (this.x > 550) {
        this.x = -100;
        this.speed = 50 + Math.floor(Math.random() * 512);
    }

    // Check collision between player and enemies
    if (player.x < this.x + 50 &&
        player.x + 50 > this.x &&
        player.y < this.y + 50 &&
        50 + player.y > this.y) {
        // Reset initial position
        player.x = 200;
        player.y = 380;
    }
    // Check collision between player and Items
    if (player.x < item.x + 50 &&
        player.x + 50 > item.x &&
        player.y < item.y + 50 &&
        50 + player.y > item.y) {
        // Reset initial position
        
        score+=1;
        CheckScore(score);
        item.x=Math.random() *400;
        item.y=itemInitPosition[Math.floor(Math.random()*itemInitPosition.length)];
        // Draw Scroe in HTML
        document.getElementById('score').innerHTML = score;
        console.log(score);
        }
};

// Enemy Image Render
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Item Class
let Item = function (x, y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/Heart.png';
};


Item.prototype.update = function () {
};

// Item Image Render
Item.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Player Class
let Player = function (x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/char-boy.png';
};


// Player update
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
    // When Player reaches the goal
    if (this.y < -50) {
        this.x = 200;
        this.y = 390;
        // Increase score
        score += 1;
        // Draw it in HTML
        document.getElementById('score').innerHTML = score;
        console.log(score);
    }
};

// Handle Keypress
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

let allEnemies = [];
// Init player location
let player = new Player(200, 400, 50);
// Init enemies location
let enemyInitPosition = [60, 140, 220, 300];
let enemy;
// Item value Y setting
let itemInitPosition = [60, 140, 220, 300];
// Random item location
let item =new Item(Math.random() * 512, itemInitPosition[Math.floor(Math.random()*itemInitPosition.length)]);

enemyInitPosition.forEach(function (positionY) {
    enemy = new Enemy(0, positionY, 50 + Math.floor(Math.random() * 512));
    allEnemies.push(enemy);
});

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
    let allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        // Add Key code to use W,A,S,D Button
        65: 'left',
        87: 'up',
        68: 'right',
        83: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});