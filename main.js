const canvas = document.getElementById('pigs');
const context = canvas.getContext('2d');
const tileWidth = 72;
const tileHeight = 72;
const mapWidth = 20;
const mapHeight = 12;


let gameMap = new Board();
gameMap.setMap();


Player.allInstances = [];

let p1 = new Player(0, 1, '#75A4FF');
let p2 = new Player(7,9, 'red');

let image = new Image();
let array = new Array();
playercount = Player.allInstances.length;

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
			if (gameMap[((y*mapWidth)+x)] == 0) {
				context.fillStyle = "#685b48";
			} else if (gameMap[((y*mapWidth)+x)] == 2) {
				context.fillStyle = "brown";
			} else if (gameMap[((y*mapWidth)+x)] == 3) {
				context.fillStyle = "black";;
			} else if (gameMap[((y*mapWidth)+x)] > 9  && gameMap[((y*mapWidth)+x)] < 30) {
				context.fillStyle = "#ffff00";
				gameMap[((y*mapWidth)+x)] += 1;
			} else if (gameMap[((y*mapWidth)+x)] >= 30 && gameMap[((y*mapWidth)+x)] < 50) {
				context.fillStyle = "orange";
				gameMap[((y*mapWidth)+x)] += 1;
			} else if (gameMap[((y*mapWidth)+x)] == 50) {
				context.fillStyle = "red";
				gameMap[((y*mapWidth)+x)] -=47;
			} else {
				context.fillStyle = "#5aa457";
			}
			
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

			if (gameMap[((player.yCoord*mapWidth)+player.xCoord)] == 50) {
				player.changeHp(-1);
			}

			if(player.hp <= 0 && player.dead == false) {
				player.die();
			}
	});
}
	  
function draw() {
	drawBoard();
	drawPlayers();
}

drawStartingPositions(Player.allInstances);
let game = setInterval(draw, 50);

