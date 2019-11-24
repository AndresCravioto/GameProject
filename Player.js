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

};
