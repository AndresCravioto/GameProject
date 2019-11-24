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
    this.upKey = 38;
    this.rightKey = 39;
    this.leftKey = 37;
    this.downKey = 40;
    Player.allInstances.push(this);
  };

  setKey(event) {
    switch (event.keyCode) {
      case this.upKey:
          this.key = 'UP';
            break;
      case this.rightKey:
            this.key = 'RIGHT';
        break;
      case this.downKey:
            this.key = 'DOWN';
        break;
      case this.leftKey:
            this.key = 'LEFT';
        break;
      default:
        break;
    };
  }

};

  