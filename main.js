const canvas = document.getElementById('tron');
const context = canvas.getContext('2d');
const tileWidth = 60;
const tileHeight = 60;
const mapWidth = 20;
const mapHeight = 14;

let gameMap = new Board();
gameMap.drawMap();

Player.allInstances = [];

let p1 = new Player(6, 6, '#75A4FF');
let p2 = new Player(7,9, 'red');
console.log(p1.upKey)
document.addEventListener('keydown', (event) => {
	p1.setKey(event)
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
	
	  
function draw() {
	drawBoard();
	drawStartingPositions(Player.allInstances);
}


let game = setInterval(draw, 100);