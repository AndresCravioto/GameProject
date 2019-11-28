class Board {
    constructor(shape = 
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,
        1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,
        1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0]
        ) {
        this.shape = shape;
    };

    setMap() {
        gameMap = this.shape;
    }

    drawSmallBoard() {
        gameMap = 
           [1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,
            1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,
            1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,
            1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,
            1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,
            1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,
            1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,
            1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,
            1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,
            0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0];
    }
  };