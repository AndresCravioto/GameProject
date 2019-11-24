const canvas = document.getElementById('tron');
const context = canvas.getContext('2d');
const unit = 15;

let gameMap = 
   [];

Player.allInstances = [];

let p1 = new Player(unit * 6, unit * 6, '#75A4FF');

function setKey(key, player, up, right, down, left) {
  switch (key) {
    case up:
      if (player.direction !== 'DOWN') {
        player.key = 'UP';
      };
      break;
    case right:
      if (player.direction !== 'LEFT') {
        player.key = 'RIGHT';
      };
      break;
    case down:
      if (player.direction !== 'UP') {
        player.key = 'DOWN';
      };
      break;
    case left:
      if (player.direction !== 'RIGHT') {
        player.key = 'LEFT';
      };
      break;
    default:
      break;
  };
};

function handleKeyPress(event) {
  let key = event.keyCode;


  setKey(key, p1, 38, 39, 40, 37); // arrow keys
};

document.addEventListener('keydown', handleKeyPress);

function getPlayableCells(canvas, unit) {
  let playableCells = new Set();
  for (let i = 0; i < canvas.width / unit; i++) {
    for (let j = 0; j < canvas.height / unit; j++) {
      playableCells.add(`${i * unit}x${j * unit}y`);
    };
  };
  return playableCells;
};

let playableCells = getPlayableCells(canvas, unit);

function drawStartingPositions(players) {
  players.forEach(p => {
    context.fillStyle = p.color;
    context.fillRect(p.x, p.y, unit, unit);
    context.strokeStyle = 'black';
    context.strokeRect(p.x, p.y, unit, unit);
  });
};

drawStartingPositions(Player.allInstances);

let outcome, winnerColor, playerCount = Player.allInstances.length;

function draw() {
  if (Player.allInstances.filter(p => !p.key).length === 0) {


    Player.allInstances.forEach(p => {

      if (p.key) {

        p.direction = p.key;

        context.fillStyle = p.color;
        context.fillRect(p.x, p.y, unit, unit);
        context.strokeStyle = 'black';
        context.strokeRect(p.x, p.y, unit, unit);

        if (!playableCells.has(`${p.x}x${p.y}y`) && p.dead === false) {
          p.dead = true;
          p.direction = '';
          playerCount -= 1;
        }

        playableCells.delete(`${p.x}x${p.y}y`);

        if (!p.dead) {
          if (p.direction === "LEFT") p.x -= unit;
          if (p.direction === "UP") p.y -= unit;
          if (p.direction === "RIGHT") p.x += unit;
          if (p.direction === "DOWN") p.y += unit;
        };

      };

    });

  }
}

let game = setInterval(draw, 100);
