const canvas = document.getElementById('pigs');
const context = canvas.getContext('2d');
const tileWidth = 72;
const tileHeight = 72;
const mapWidth = 20;
const mapHeight = 12;
let tiles;
let sunCleotilde = null;
let moonCleotilde = null;

function load1() {

	let image = new Image();
	
    image.addEventListener("load", function(event) {
		tiles = this;

    });
    image.src = "GameTiles.png";

};

function loadSunCleotilde() {

	let image2 = new Image();
	
    image2.addEventListener("load", function(event) {
		sunCleotilde = this;

    });
    image2.src = "CleotildeRojo1.png";

};

function loadMoonCleotilde() {

	let image3 = new Image();
	
    image3.addEventListener("load", function(event) {
		moonCleotilde = this;

    });
    image3.src = "CleotildeAzul1.png";

};


loadSunCleotilde();
loadMoonCleotilde();
load1();

let gameMap = new Board();
gameMap.setMap();


Player.allInstances = [];

let p1 = new Player(0, 1, '#75A4FF', 0);
let p2 = new Player(7,9, 'red', 1);

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
			let startingCutPosition = null;

			if (gameMap[((y*mapWidth)+x)] == 0) {
				/*unplayable*/
				startingCutPosition = 288;
			} else if (gameMap[((y*mapWidth)+x)] == 2) {
				/*cracked*/
				startingCutPosition = 72;
			} else if (gameMap[((y*mapWidth)+x)] == 3) {
				/*tiny crack*/
				startingCutPosition = 144;
			} else if (gameMap[((y*mapWidth)+x)] == 4) {
				/* fondo*/
				startingCutPosition = 360;
			} else if (gameMap[((y*mapWidth)+x)] > 9  && gameMap[((y*mapWidth)+x)] < 30) {
				startingCutPosition = 144;
				gameMap[((y*mapWidth)+x)] += 1;
			} else if (gameMap[((y*mapWidth)+x)] >= 30 && gameMap[((y*mapWidth)+x)] < 50) {
				startingCutPosition = 216;
				gameMap[((y*mapWidth)+x)] += 1;
			} else if (gameMap[((y*mapWidth)+x)] == 50) {
				startingCutPosition = 360;
				gameMap[((y*mapWidth)+x)] -=47;
			} else {
				/*1 normal tile*/
				startingCutPosition = 0;
			}
			context.drawImage(tiles, startingCutPosition, 0, tileWidth, tileHeight, x*tileWidth, y*tileHeight, tileWidth, tileHeight);
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

		let cleotildes = [moonCleotilde, sunCleotilde];
			// context.fillStyle = player.color;
			// context.fillRect(player.xCoord * tileWidth, player.yCoord * tileHeight, tileWidth, tileHeight);
			// context.strokeStyle = 'black';
			// context.strokeRect(player.xCoord * tileWidth, player.yCoord * tileHeight, tileWidth, tileHeight);
			context.drawImage(cleotildes[player.index], player.xCoord * tileWidth, player.yCoord * tileHeight, tileWidth, tileHeight);
			

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

