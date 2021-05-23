var world = [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 0, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 2, 1, 2, 2, 3, 2, 2, 1, 2, 1, 1, 1, 1, 2],
    [2, 1, 1, 2, 1, 2, 1, 3, 1, 2, 1, 2, 1, 1, 1, 1, 2],
    [2, 1, 1, 2, 1, 2, 1, 3, 1, 2, 1, 1, 1, 2, 2, 2, 2],
    [2, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 2, 1, 2, 1, 1, 2],
    [2, 1, 1, 2, 3, 1, 1, 1, 1, 2, 1, 2, 3, 2, 1, 1, 2],
    [2, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 2],
    [2, 1, 1, 1, 1, 2, 1, 2, 1, 2, 2, 2, 1, 2, 1, 1, 2],
    [2, 1, 1, 2, 2, 2, 1, 2, 1, 1, 1, 3, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
];

var score = 0;
var pacman = {
    x: 1,
    y: 1
}

function displayWorld() {
    var output = '';

    for (let i = 0; i < world.length; i++) {
        output += "\n<div class='row'>\n";
        for (let j = 0; j < world[i].length; j++) {
            if (world[i][j] == 2)
                output += "<div class='brick'></div>";

            else if (world[i][j] == 1)
                output += "<div class='coin'></div>";

            else if (world[i][j] == 0)
                output += "<div class='empty'></div>";

            else if (world[i][j] == 3)
                output += "<div class='cherry'></div>";
        }
        output += "\n</div>\n";
    }
    //console.log(output);
    document.getElementById('world').innerHTML = output;
}

function displayPacman() {
    document.getElementById('pacman').style.top = pacman.y * 30 + "px";
    document.getElementById('pacman').style.left = pacman.x * 30 + "px"
}

function displayScore() {
    document.getElementById('score').innerHTML = score;
}
displayWorld();
displayPacman();
displayScore();


document.onkeydown = function (e) {
    if (e.keyCode == 40 && world[pacman.y + 1][pacman.x] != 2) {
        pacman.y++;
    } else if (e.keyCode == 38 && world[pacman.y - 1][pacman.x] != 2) {
        pacman.y--;
    } else if (e.keyCode == 39 && world[pacman.y][pacman.x + 1] != 2) {
        pacman.x++;
    } else if (e.keyCode == 37 && world[pacman.y][pacman.x - 1] != 2) {
        pacman.x--;
    }
    if (world[pacman.y][pacman.x] == 1) {
        world[pacman.y][pacman.x] = 0;
        score += 10;
        displayWorld();
        displayScore();
    }
    if (world[pacman.y][pacman.x] == 3) {
        world[pacman.y][pacman.x] = 0;
        score += 30;
        displayWorld();
        displayScore();
    }
    //console.log(e.keyCode);
    displayPacman();
}