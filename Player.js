class Player {
  constructor(xCoord, yCoord, color) {
    this.color = color || '#fff';
    this.dead = false;
    this.direction = '';
    this.key = '';
    this.xCoord = xCoord;
    this.yCoord = yCoord;
    this.startX = xCoord;
    this.startY = yCoord;

    Player.allInstances.push(this);
  };

  setKey(event, left, up, right, down) {
    switch (event.keyCode) {
      case up:
          this.key = 'UP';
            break;
      case right:
            this.key = 'RIGHT';
        break;
      case down:
            this.key = 'DOWN';
        break;
      case left:
            this.key = 'LEFT';
        break;
      default:
        break;
    };
  }

  deleteKey() {
    this.key='';
  }

  move() {
    
    if (this.key && !this.dead) {
            if (this.key === "LEFT" && gameMap[(((this.yCoord) * mapWidth) + this.xCoord -1 )] != 0 && this.xCoord -1 > -1) this.xCoord -= 1;
            if (this.key === "UP" && gameMap[(((this.yCoord -1) * mapWidth) + this.xCoord)] != 0 && this.yCoord -1 > -1) this.yCoord -= 1;
            if (this.key === "RIGHT" && gameMap[(((this.yCoord) * mapWidth) + this.xCoord +1 )] != 0 && this.xCoord +1 < mapWidth) this.xCoord += 1;
            if (this.key === "DOWN" && gameMap[(((this.yCoord +1) * mapWidth) + this.xCoord)] != 0 && this.yCoord +1 < mapHeight) this.yCoord += 1;
    }

    this.key = 'USED'
  }
};
