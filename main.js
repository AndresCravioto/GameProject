const canvas = document.getElementById('tron');
const context = canvas.getContext('2d');
const tileWidth = 60;
const tileHeight = 60;
const mapWidth = 20;
const mapHeight = 13;

let gameMap = new Board();
gameMap.setMap();

Player.allInstances = [];

let p1 = new Player(0, 1, '#75A4FF');
let p2 = new Player(7,9, 'red');

document.addEventListener('keyup', (event) => {
	
	p1Keys = [37,38,39,40];
	p2Keys = [65,68,87,83];
	
	if (p1Keys.includes(event.keyCode)) {
		p1.deleteKey();
	}
  
	if (p2Keys.includes(event.keyCode)) {
		p2.deleteKey();
	}

});

document.addEventListener('keydown', (event) => {

	p1Keys = [37,38,39,40,18];
	p2Keys = [65,68,87,83, 69];
	
	if (p1Keys.includes(event.keyCode) && p1.key != 'USED') {
		p1.setKey(event, 37, 38, 39, 40, 18);
		p1.action();
	}
  
	if (p2Keys.includes(event.keyCode) && p2.key != 'USED') {
		p2.setKey(event, 65, 87, 68, 83, 69);
		p2.action();
	}

});


function drawBoard() {
	for(var y = 0; y < mapHeight; ++y)
	{
		for(var x = 0; x < mapWidth; ++x)
		{
			switch(gameMap[((y*mapWidth)+x)])
			{
				case 0:
					context.fillStyle = "#685b48";
					break;
				case 10:
					context.fillStyle = "#ffff00";
					break;
				default:
					context.fillStyle = "#5aa457";
			}

			context.fillRect( x*tileWidth, y*tileHeight, tileWidth, tileHeight);
		}
	}
}

function drawStartingPositions(players) {
	players.forEach(p => {
		context.fillStyle = p.color;
		context.fillRect(p.xCoord * tileWidth, p.yCoord *tileHeight, tileWidth, tileHeight);
		context.strokeStyle = 'black';
		context.strokeRect(p.xCoord * tileWidth, p.yCoord * tileHeight, tileWidth, tileHeight);
	});
};


function drawPlayers() {
	Player.allInstances.forEach(function (player) {
			context.fillStyle = player.color;
			context.fillRect(player.xCoord * tileWidth, player.yCoord * tileHeight, tileWidth, tileHeight);
			context.strokeStyle = 'black';
			context.strokeRect(player.xCoord * tileWidth, player.yCoord * tileHeight, tileWidth, tileHeight);
	});
}
	  
function draw() {
	drawBoard();
	drawPlayers();
}

drawStartingPositions(Player.allInstances);
let game = setInterval(draw, 50);

