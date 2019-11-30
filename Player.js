class Player {
    constructor(xCoord, yCoord, color, index) {
        this.color = color || '#fff';
        this.index = index;
        this.dead = false;
        this.hp = 4;
        this.direction = '';
        this.key = '';
        this.xCoord = xCoord;
        this.yCoord = yCoord;
        this.startX = xCoord;
        this.startY = yCoord;
        this.weapon = new Weapon();

        Player.allInstances.push(this);
    };

    setKey(event, left, up, right, down, attack) {
        switch (event.keyCode) {
            case up:
                this.key = 'UP';
                this.direction = 'UP';
                break;
            case right:
                this.key = 'RIGHT';
                this.direction = 'RIGHT';
            break;
            case down:
                this.key = 'DOWN';
                this.direction = 'DOWN';
            break;
            case left:
                this.key = 'LEFT';
                this.direction = 'LEFT';
            break;
            case attack:
                this.key = 'ATTACK';
            break;
            default:
            break;
        };
    }

    deleteKey() {
        this.key='';
    }

    activateAttack() {
        switch (this.weapon.type) {
            case 'DEFAULT':
                switch (this.direction) {
                    case 'UP':
                        gameMap[(((this.yCoord -1) * mapWidth) + this.xCoord)] = 10;
                        gameMap[(((this.yCoord -2) * mapWidth) + this.xCoord)] = 10;
                    break;
                    case 'DOWN':
                        gameMap[(((this.yCoord +1) * mapWidth) + this.xCoord)] = 10;
                        gameMap[(((this.yCoord +2) * mapWidth) + this.xCoord)] = 10;
                    break;
                    case 'LEFT':
                        if(this.xCoord > 1) {
                            gameMap[(((this.yCoord) * mapWidth) + this.xCoord -1)] = 10;
                            gameMap[(((this.yCoord) * mapWidth) + this.xCoord -2)] = 10;
                        } else if (this.xCoord == 1) {
                            gameMap[(((this.yCoord) * mapWidth) + this.xCoord -1)] = 10;
                        } else {
                        }
                    break;
                    case 'RIGHT':
                        if(this.xCoord == mapWidth -1) {
                        } else if (this.xCoord == mapWidth -2) {
                            gameMap[(((this.yCoord) * mapWidth) + this.xCoord +1)] = 10;
                        } else {
                            gameMap[(((this.yCoord) * mapWidth) + this.xCoord +1)] = 10;
                            gameMap[(((this.yCoord) * mapWidth) + this.xCoord +2)] = 10;
                        }
                    break;
                }
            break;
            case 'BEAM':
                switch (this.direction) {
                    case 'UP':
                        gameMap[(((this.yCoord -1) * mapWidth) + this.xCoord)] = 10;
                        gameMap[(((this.yCoord -2) * mapWidth) + this.xCoord)] = 10;
                        gameMap[(((this.yCoord -3) * mapWidth) + this.xCoord)] = 10;
                        gameMap[(((this.yCoord -4) * mapWidth) + this.xCoord)] = 10;
                        gameMap[(((this.yCoord -5) * mapWidth) + this.xCoord)] = 10;
                    break;
                    case 'DOWN':
                        gameMap[(((this.yCoord +1) * mapWidth) + this.xCoord)] = 10;
                        gameMap[(((this.yCoord +2) * mapWidth) + this.xCoord)] = 10;
                        gameMap[(((this.yCoord +3) * mapWidth) + this.xCoord)] = 10;
                        gameMap[(((this.yCoord +4) * mapWidth) + this.xCoord)] = 10;
                        gameMap[(((this.yCoord +5) * mapWidth) + this.xCoord)] = 10;
                    break;
                    case 'LEFT':
                        if(this.xCoord > 4) {
                            gameMap[(((this.yCoord) * mapWidth) + this.xCoord -1)] = 10;
                            gameMap[(((this.yCoord) * mapWidth) + this.xCoord -2)] = 10;
                            gameMap[(((this.yCoord) * mapWidth) + this.xCoord -3)] = 10;
                            gameMap[(((this.yCoord) * mapWidth) + this.xCoord -4)] = 10;
                            gameMap[(((this.yCoord) * mapWidth) + this.xCoord -5)] = 10;
                        } else if(this.xCoord == 4) {
                            gameMap[(((this.yCoord) * mapWidth) + this.xCoord -1)] = 10;
                            gameMap[(((this.yCoord) * mapWidth) + this.xCoord -2)] = 10;
                            gameMap[(((this.yCoord) * mapWidth) + this.xCoord -3)] = 10;
                            gameMap[(((this.yCoord) * mapWidth) + this.xCoord -4)] = 10;                         
                        } else if(this.xCoord == 3) {
                            gameMap[(((this.yCoord) * mapWidth) + this.xCoord -1)] = 10;
                            gameMap[(((this.yCoord) * mapWidth) + this.xCoord -2)] = 10;
                            gameMap[(((this.yCoord) * mapWidth) + this.xCoord -3)] = 10;
                        } else if(this.xCoord == 2) {
                            gameMap[(((this.yCoord) * mapWidth) + this.xCoord -1)] = 10;
                            gameMap[(((this.yCoord) * mapWidth) + this.xCoord -2)] = 10;
                        } else if (this.xCoord == 1) {
                            gameMap[(((this.yCoord) * mapWidth) + this.xCoord -1)] = 10;
                        } else {
                        }
                    break;
                    case 'RIGHT':
                        if(this.xCoord == mapWidth -1) {
                        } else if (this.xCoord == mapWidth -2) {
                            gameMap[(((this.yCoord) * mapWidth) + this.xCoord +1)] = 10;
                        } else if (this.xCoord == mapWidth -3) {
                            gameMap[(((this.yCoord) * mapWidth) + this.xCoord +1)] = 10;
                            gameMap[(((this.yCoord) * mapWidth) + this.xCoord +2)] = 10;
                        } else if (this.xCoord == mapWidth -4) {
                            gameMap[(((this.yCoord) * mapWidth) + this.xCoord +1)] = 10;
                            gameMap[(((this.yCoord) * mapWidth) + this.xCoord +2)] = 10;
                            gameMap[(((this.yCoord) * mapWidth) + this.xCoord +3)] = 10;
                        } else if (this.xCoord == mapWidth -5) {
                            gameMap[(((this.yCoord) * mapWidth) + this.xCoord +1)] = 10;
                            gameMap[(((this.yCoord) * mapWidth) + this.xCoord +2)] = 10;
                            gameMap[(((this.yCoord) * mapWidth) + this.xCoord +3)] = 10;
                            gameMap[(((this.yCoord) * mapWidth) + this.xCoord +4)] = 10;
                        } else {
                            gameMap[(((this.yCoord) * mapWidth) + this.xCoord +1)] = 10;
                            gameMap[(((this.yCoord) * mapWidth) + this.xCoord +2)] = 10;
                            gameMap[(((this.yCoord) * mapWidth) + this.xCoord +3)] = 10;
                            gameMap[(((this.yCoord) * mapWidth) + this.xCoord +4)] = 10;
                            gameMap[(((this.yCoord) * mapWidth) + this.xCoord +5)] = 10;
                        }
                    break;
                }
            break;
            case 'PILAR OF FLAME':
                switch (this.direction) {
                    case 'UP':
                        if(gameMap[(((this.yCoord -4) * mapWidth) + this.xCoord)] != 0 
                        && gameMap[(((this.yCoord -4) * mapWidth) + this.xCoord)] != 4) {
                            gameMap[(((this.yCoord -4) * mapWidth) + this.xCoord)] = 10;
                        }
                        if(gameMap[(((this.yCoord -5) * mapWidth) + this.xCoord)] != 0
                        && gameMap[(((this.yCoord -5) * mapWidth) + this.xCoord)] != 4) {
                            gameMap[(((this.yCoord -5) * mapWidth) + this.xCoord)] = 10;
                        }
                        if(gameMap[(((this.yCoord -6) * mapWidth) + this.xCoord)] != 0
                        && gameMap[(((this.yCoord -6) * mapWidth) + this.xCoord)] != 4) {
                            gameMap[(((this.yCoord -6) * mapWidth) + this.xCoord)] = 10;
                        }
                        if(gameMap[(((this.yCoord -7) * mapWidth) + this.xCoord)] != 0
                        && gameMap[(((this.yCoord -7) * mapWidth) + this.xCoord)] != 4) {
                            gameMap[(((this.yCoord -7) * mapWidth) + this.xCoord)] = 10;
                        }
                        if(gameMap[(((this.yCoord -8) * mapWidth) + this.xCoord)] != 0
                        && gameMap[(((this.yCoord -8) * mapWidth) + this.xCoord)] != 4) {
                            gameMap[(((this.yCoord -8) * mapWidth) + this.xCoord)] = 10;
                        }

                        if(this.xCoord == 0) {
                            if(gameMap[(((this.yCoord -6) * mapWidth) + this.xCoord +1)] != 0 
                            && gameMap[(((this.yCoord -6) * mapWidth) + this.xCoord +1)] != 4) {
                                gameMap[(((this.yCoord -6) * mapWidth) + this.xCoord +1)] = 10;
                            }
                            if(gameMap[(((this.yCoord -6) * mapWidth) + this.xCoord +2)] != 0
                            && gameMap[(((this.yCoord -6) * mapWidth) + this.xCoord +2)] != 4) {
                                gameMap[(((this.yCoord -6) * mapWidth) + this.xCoord +2)] = 10;
                            }
                            if(gameMap[(((this.yCoord -7) * mapWidth) + this.xCoord +1)] != 0
                            && gameMap[(((this.yCoord -7) * mapWidth) + this.xCoord +1)] != 4) {
                                gameMap[(((this.yCoord -7) * mapWidth) + this.xCoord +1)] = 10;
                            }
                            if(gameMap[(((this.yCoord -7) * mapWidth) + this.xCoord +2)] != 0
                            && gameMap[(((this.yCoord -7) * mapWidth) + this.xCoord +2)] != 4) {
                                gameMap[(((this.yCoord -7) * mapWidth) + this.xCoord +2)] = 10;
                            }
                            if(gameMap[(((this.yCoord -5) * mapWidth) + this.xCoord +1)] != 0
                            && gameMap[(((this.yCoord -5) * mapWidth) + this.xCoord +1)] != 4) {
                                gameMap[(((this.yCoord -5) * mapWidth) + this.xCoord +1)] = 10;
                            }
                            if(gameMap[(((this.yCoord -7) * mapWidth) + this.xCoord +2)] != 0
                            && gameMap[(((this.yCoord -7) * mapWidth) + this.xCoord +2)] != 4) {
                                gameMap[(((this.yCoord -7) * mapWidth) + this.xCoord +2)] = 10;
                            }
                            if(gameMap[(((this.yCoord -4) * mapWidth) + this.xCoord +1)] != 0
                            && gameMap[(((this.yCoord -4) * mapWidth) + this.xCoord +1)] != 4) {
                                gameMap[(((this.yCoord -4) * mapWidth) + this.xCoord +1)] = 10;
                            }
                            if(gameMap[(((this.yCoord -8) * mapWidth) + this.xCoord +1)] != 0
                            && gameMap[(((this.yCoord -8) * mapWidth) + this.xCoord +1)] != 4) {
                                gameMap[(((this.yCoord -8) * mapWidth) + this.xCoord +1)] = 10;
                            }
                        } else if (this.xCoord == 1) {

                            if(gameMap[(((this.yCoord -6) * mapWidth) + this.xCoord -1)] != 0
                            && gameMap[(((this.yCoord -6) * mapWidth) + this.xCoord -1)] != 4) {
                                gameMap[(((this.yCoord -6) * mapWidth) + this.xCoord -1)] = 10;
                            }
                            if(gameMap[(((this.yCoord -7) * mapWidth) + this.xCoord -1)] != 0
                            && gameMap[(((this.yCoord -7) * mapWidth) + this.xCoord -1)] != 4) {
                                gameMap[(((this.yCoord -7) * mapWidth) + this.xCoord -1)] = 10;
                            }
                            if(gameMap[(((this.yCoord -5) * mapWidth) + this.xCoord -1)] != 0
                            && gameMap[(((this.yCoord -5) * mapWidth) + this.xCoord -1)] != 4) {
                                gameMap[(((this.yCoord -5) * mapWidth) + this.xCoord -1)] = 10;
                            }
                            if(gameMap[(((this.yCoord -6) * mapWidth) + this.xCoord +1)] != 0
                            && gameMap[(((this.yCoord -6) * mapWidth) + this.xCoord +1)] != 4) {
                                gameMap[(((this.yCoord -6) * mapWidth) + this.xCoord +1)] = 10;
                            }
                            if(gameMap[(((this.yCoord -6) * mapWidth) + this.xCoord +2)] != 0
                            && gameMap[(((this.yCoord -6) * mapWidth) + this.xCoord +2)] != 4) {
                                gameMap[(((this.yCoord -6) * mapWidth) + this.xCoord +2)] = 10;
                            }
                            if(gameMap[(((this.yCoord -7) * mapWidth) + this.xCoord +1)] != 0
                            && gameMap[(((this.yCoord -7) * mapWidth) + this.xCoord +1)] != 4) {
                                gameMap[(((this.yCoord -7) * mapWidth) + this.xCoord +1)] = 10;
                            }
                            if(gameMap[(((this.yCoord -7) * mapWidth) + this.xCoord +2)] != 0
                            && gameMap[(((this.yCoord -7) * mapWidth) + this.xCoord +2)] != 4) {
                                gameMap[(((this.yCoord -7) * mapWidth) + this.xCoord +2)] = 10;
                            }
                            if(gameMap[(((this.yCoord -5) * mapWidth) + this.xCoord +1)] != 0
                            && gameMap[(((this.yCoord -5) * mapWidth) + this.xCoord +1)] != 4) {
                                gameMap[(((this.yCoord -5) * mapWidth) + this.xCoord +1)] = 10;
                            }
                            if(gameMap[(((this.yCoord -5) * mapWidth) + this.xCoord +2)] != 0
                            && gameMap[(((this.yCoord -5) * mapWidth) + this.xCoord +2)] != 4) {
                                gameMap[(((this.yCoord -5) * mapWidth) + this.xCoord +2)] = 10;
                            }
                            if(gameMap[(((this.yCoord -4) * mapWidth) + this.xCoord +1)] != 0
                            && gameMap[(((this.yCoord -4) * mapWidth) + this.xCoord +1)] != 4) {
                                gameMap[(((this.yCoord -4) * mapWidth) + this.xCoord +1)] = 10;
                            }
                            if(gameMap[(((this.yCoord -8) * mapWidth) + this.xCoord +1)] != 0
                            && gameMap[(((this.yCoord -8) * mapWidth) + this.xCoord +1)] != 4) {
                                gameMap[(((this.yCoord -8) * mapWidth) + this.xCoord +1)] = 10;
                            }
                            if(gameMap[(((this.yCoord -4) * mapWidth) + this.xCoord -1)] != 0
                            && gameMap[(((this.yCoord -4) * mapWidth) + this.xCoord -1)] != 4) {
                                gameMap[(((this.yCoord -4) * mapWidth) + this.xCoord -1)] = 10;
                            }
                            if(gameMap[(((this.yCoord -8) * mapWidth) + this.xCoord -1)] != 0
                            && gameMap[(((this.yCoord -8) * mapWidth) + this.xCoord -1)] != 4) {
                                gameMap[(((this.yCoord -8) * mapWidth) + this.xCoord -1)] = 10;
                            }
                        } else if (this.xCoord == mapWidth -1) {
                            if(gameMap[(((this.yCoord -6) * mapWidth) + this.xCoord -1)] != 0
                            && gameMap[(((this.yCoord -6) * mapWidth) + this.xCoord -1)] != 4) {
                                gameMap[(((this.yCoord -6) * mapWidth) + this.xCoord -1)] = 10;
                            }
                            if(gameMap[(((this.yCoord -6) * mapWidth) + this.xCoord -2)] != 0
                            && gameMap[(((this.yCoord -6) * mapWidth) + this.xCoord -2)] != 4) {
                                gameMap[(((this.yCoord -6) * mapWidth) + this.xCoord -2)] = 10;
                            }

                            if(gameMap[(((this.yCoord -5) * mapWidth) + this.xCoord -1)] != 0
                            && gameMap[(((this.yCoord -5) * mapWidth) + this.xCoord -1)] != 4) {
                                gameMap[(((this.yCoord -5) * mapWidth) + this.xCoord -1)] = 10;
                            }
                            if(gameMap[(((this.yCoord -5) * mapWidth) + this.xCoord -2)] != 0
                            && gameMap[(((this.yCoord -5) * mapWidth) + this.xCoord -2)] != 4) {
                                gameMap[(((this.yCoord -5) * mapWidth) + this.xCoord -2)] = 10;
                            }

                            if(gameMap[(((this.yCoord -7) * mapWidth) + this.xCoord -1)] != 0
                            && gameMap[(((this.yCoord -7) * mapWidth) + this.xCoord -1)] != 4) {
                                gameMap[(((this.yCoord -7) * mapWidth) + this.xCoord -1)] = 10;
                            }
                            if(gameMap[(((this.yCoord -7) * mapWidth) + this.xCoord -2)] != 0
                            && gameMap[(((this.yCoord -7) * mapWidth) + this.xCoord -2)] != 4) {
                                gameMap[(((this.yCoord -7) * mapWidth) + this.xCoord -2)] = 10;
                            }

                            if(gameMap[(((this.yCoord -4) * mapWidth) + this.xCoord -1)] != 0
                            && gameMap[(((this.yCoord -4) * mapWidth) + this.xCoord -1)] != 4) {
                                gameMap[(((this.yCoord -4) * mapWidth) + this.xCoord -1)] = 10;
                            }

                            if(gameMap[(((this.yCoord -8) * mapWidth) + this.xCoord -1)] != 0
                            && gameMap[(((this.yCoord -8) * mapWidth) + this.xCoord -1)] != 4) {
                                gameMap[(((this.yCoord -8) * mapWidth) + this.xCoord -1)] = 10;
                            }
                        } else if (this.xCoord == mapWidth -2) {
                            if(gameMap[(((this.yCoord -6) * mapWidth) + this.xCoord -1)] != 0
                            && gameMap[(((this.yCoord -6) * mapWidth) + this.xCoord -1)] != 4) {
                                gameMap[(((this.yCoord -6) * mapWidth) + this.xCoord -1)] = 10;
                            }
                            if(gameMap[(((this.yCoord -6) * mapWidth) + this.xCoord -2)] != 0
                            && gameMap[(((this.yCoord -6) * mapWidth) + this.xCoord -2)] != 4) {
                                gameMap[(((this.yCoord -6) * mapWidth) + this.xCoord -2)] = 10;
                            }
                            if(gameMap[(((this.yCoord -6) * mapWidth) + this.xCoord +1)] != 0
                            && gameMap[(((this.yCoord -6) * mapWidth) + this.xCoord +1)] != 4) {
                                gameMap[(((this.yCoord -6) * mapWidth) + this.xCoord +1)] = 10;
                            }

                            if(gameMap[(((this.yCoord -5) * mapWidth) + this.xCoord -1)] != 0
                            && gameMap[(((this.yCoord -5) * mapWidth) + this.xCoord -1)] != 4) {
                                gameMap[(((this.yCoord -5) * mapWidth) + this.xCoord -1)] = 10;
                            }
                            if(gameMap[(((this.yCoord -5) * mapWidth) + this.xCoord -2)] != 0
                            && gameMap[(((this.yCoord -5) * mapWidth) + this.xCoord -2)] != 4) {
                                gameMap[(((this.yCoord -5) * mapWidth) + this.xCoord -2)] = 10;
                            }
                            if(gameMap[(((this.yCoord -5) * mapWidth) + this.xCoord +1)] != 0
                            && gameMap[(((this.yCoord -5) * mapWidth) + this.xCoord +1)] != 4) {
                                gameMap[(((this.yCoord -5) * mapWidth) + this.xCoord +1)] = 10;
                            }

                            if(gameMap[(((this.yCoord -7) * mapWidth) + this.xCoord -1)] != 0
                            && gameMap[(((this.yCoord -7) * mapWidth) + this.xCoord -1)] != 4) {
                                gameMap[(((this.yCoord -7) * mapWidth) + this.xCoord -1)] = 10;
                            }
                            if(gameMap[(((this.yCoord -7) * mapWidth) + this.xCoord -2)] != 0
                            && gameMap[(((this.yCoord -7) * mapWidth) + this.xCoord -2)] != 4) {
                                gameMap[(((this.yCoord -7) * mapWidth) + this.xCoord -2)] = 10;
                            }
                            if(gameMap[(((this.yCoord -7) * mapWidth) + this.xCoord +1)] != 0
                            && gameMap[(((this.yCoord -7) * mapWidth) + this.xCoord +1)] != 4) {
                                gameMap[(((this.yCoord -7) * mapWidth) + this.xCoord +1)] = 10;
                            }

                            if(gameMap[(((this.yCoord -4) * mapWidth) + this.xCoord +1)] != 0
                            && gameMap[(((this.yCoord -4) * mapWidth) + this.xCoord +1)] != 4) {
                                gameMap[(((this.yCoord -4) * mapWidth) + this.xCoord +1)] = 10;
                            }
                            if(gameMap[(((this.yCoord -4) * mapWidth) + this.xCoord -1)] != 0
                            && gameMap[(((this.yCoord -4) * mapWidth) + this.xCoord -1)] != 4) {
                                gameMap[(((this.yCoord -4) * mapWidth) + this.xCoord -1)] = 10;
                            }

                            if(gameMap[(((this.yCoord -8) * mapWidth) + this.xCoord +1)] != 0
                            && gameMap[(((this.yCoord -8) * mapWidth) + this.xCoord +1)] != 4) {
                                gameMap[(((this.yCoord -8) * mapWidth) + this.xCoord +1)] = 10;
                            }
                            if(gameMap[(((this.yCoord -8) * mapWidth) + this.xCoord -1)] != 0
                            && gameMap[(((this.yCoord -8) * mapWidth) + this.xCoord -1)] != 4) {
                                gameMap[(((this.yCoord -8) * mapWidth) + this.xCoord -1)] = 10;
                            }
                        } else {
                            if(gameMap[(((this.yCoord -6) * mapWidth) + this.xCoord -1)] != 0
                            && gameMap[(((this.yCoord -6) * mapWidth) + this.xCoord -1)] != 4) {
                                gameMap[(((this.yCoord -6) * mapWidth) + this.xCoord -1)] = 10;
                            }
                            if(gameMap[(((this.yCoord -6) * mapWidth) + this.xCoord -2)] != 0
                            && gameMap[(((this.yCoord -6) * mapWidth) + this.xCoord -2)] != 4) {
                                gameMap[(((this.yCoord -6) * mapWidth) + this.xCoord -2)] = 10;
                            }

                            if(gameMap[(((this.yCoord -6) * mapWidth) + this.xCoord +1)] != 0
                            && gameMap[(((this.yCoord -6) * mapWidth) + this.xCoord +1)] != 4) {
                                gameMap[(((this.yCoord -6) * mapWidth) + this.xCoord +1)] = 10;
                            }
                            if(gameMap[(((this.yCoord -6) * mapWidth) + this.xCoord +2)] != 0
                            && gameMap[(((this.yCoord -6) * mapWidth) + this.xCoord +2)] != 4) {
                                gameMap[(((this.yCoord -6) * mapWidth) + this.xCoord +2)] = 10;
                            }

                            if(gameMap[(((this.yCoord -7) * mapWidth) + this.xCoord -1)] != 0
                            && gameMap[(((this.yCoord -7) * mapWidth) + this.xCoord -1)] != 4) {
                                gameMap[(((this.yCoord -7) * mapWidth) + this.xCoord -1)] = 10;
                            }
                            if(gameMap[(((this.yCoord -7) * mapWidth) + this.xCoord -2)] != 0
                            && gameMap[(((this.yCoord -7) * mapWidth) + this.xCoord -2)] != 4) {
                                gameMap[(((this.yCoord -7) * mapWidth) + this.xCoord -2)] = 10;
                            }

                            if(gameMap[(((this.yCoord -7) * mapWidth) + this.xCoord +1)] != 0
                            && gameMap[(((this.yCoord -7) * mapWidth) + this.xCoord +1)] != 4) {
                                gameMap[(((this.yCoord -7) * mapWidth) + this.xCoord +1)] = 10;
                            }
                            if(gameMap[(((this.yCoord -7) * mapWidth) + this.xCoord +2)] != 0
                            && gameMap[(((this.yCoord -7) * mapWidth) + this.xCoord +2)] != 4) {
                                gameMap[(((this.yCoord -7) * mapWidth) + this.xCoord +2)] = 10;
                            }

                            if(gameMap[(((this.yCoord -5) * mapWidth) + this.xCoord -1)] != 0
                            && gameMap[(((this.yCoord -5) * mapWidth) + this.xCoord -1)] != 4) {
                                gameMap[(((this.yCoord -5) * mapWidth) + this.xCoord -1)] = 10;
                            }
                            if(gameMap[(((this.yCoord -5) * mapWidth) + this.xCoord -2)] != 0
                            && gameMap[(((this.yCoord -5) * mapWidth) + this.xCoord -2)] != 4) {
                                gameMap[(((this.yCoord -5) * mapWidth) + this.xCoord -2)] = 10;
                            }

                            if(gameMap[(((this.yCoord -5) * mapWidth) + this.xCoord +1)] != 0
                            && gameMap[(((this.yCoord -5) * mapWidth) + this.xCoord +1)] != 4) {
                                gameMap[(((this.yCoord -5) * mapWidth) + this.xCoord +1)] = 10;
                            }
                            if(gameMap[(((this.yCoord -5) * mapWidth) + this.xCoord +2)] != 0
                            && gameMap[(((this.yCoord -5) * mapWidth) + this.xCoord +2)] != 4) {
                                gameMap[(((this.yCoord -5) * mapWidth) + this.xCoord +2)] = 10;
                            }

                            if(gameMap[(((this.yCoord -4) * mapWidth) + this.xCoord +1)] != 0
                            && gameMap[(((this.yCoord -4) * mapWidth) + this.xCoord +1)] != 4) {
                                gameMap[(((this.yCoord -4) * mapWidth) + this.xCoord +1)] = 10;
                            }
                            if(gameMap[(((this.yCoord -4) * mapWidth) + this.xCoord -1)] != 0
                            && gameMap[(((this.yCoord -4) * mapWidth) + this.xCoord -1)] != 4) {
                                gameMap[(((this.yCoord -4) * mapWidth) + this.xCoord -1)] = 10;
                            }

                            if(gameMap[(((this.yCoord -8) * mapWidth) + this.xCoord +1)] != 0
                            && gameMap[(((this.yCoord -8) * mapWidth) + this.xCoord +1)] != 4) {
                                gameMap[(((this.yCoord -8) * mapWidth) + this.xCoord +1)] = 10;
                            }
                            if(gameMap[(((this.yCoord -8) * mapWidth) + this.xCoord -1)] != 0
                            && gameMap[(((this.yCoord -8) * mapWidth) + this.xCoord -1)] != 4) {
                                gameMap[(((this.yCoord -8) * mapWidth) + this.xCoord -1)] = 10;
                            }
                        }
                    break;
                    case 'DOWN':
                        gameMap[(((this.yCoord +4) * mapWidth) + this.xCoord)] = 10;
                        gameMap[(((this.yCoord +5) * mapWidth) + this.xCoord)] = 10;
                        gameMap[(((this.yCoord +6) * mapWidth) + this.xCoord)] = 10;
                        gameMap[(((this.yCoord +7) * mapWidth) + this.xCoord)] = 10;
                        gameMap[(((this.yCoord +8) * mapWidth) + this.xCoord)] = 10;

                        if(this.xCoord == 0) {
                            gameMap[(((this.yCoord +6) * mapWidth) + this.xCoord +1)] = 10;
                            gameMap[(((this.yCoord +6) * mapWidth) + this.xCoord +2)] = 10;

                            gameMap[(((this.yCoord +7) * mapWidth) + this.xCoord +1)] = 10;
                            gameMap[(((this.yCoord +7) * mapWidth) + this.xCoord +2)] = 10;

                            gameMap[(((this.yCoord +5) * mapWidth) + this.xCoord +1)] = 10;
                            gameMap[(((this.yCoord +5) * mapWidth) + this.xCoord +2)] = 10;

                            gameMap[(((this.yCoord +4) * mapWidth) + this.xCoord +1)] = 10;

                            gameMap[(((this.yCoord +8) * mapWidth) + this.xCoord +1)] = 10;

                        } else if (this.xCoord == 1) {
                            gameMap[(((this.yCoord +6) * mapWidth) + this.xCoord -1)] = 10;
                            gameMap[(((this.yCoord +7) * mapWidth) + this.xCoord -1)] = 10;
                            gameMap[(((this.yCoord +5) * mapWidth) + this.xCoord -1)] = 10;

                            gameMap[(((this.yCoord +6) * mapWidth) + this.xCoord +1)] = 10;
                            gameMap[(((this.yCoord +6) * mapWidth) + this.xCoord +2)] = 10;

                            gameMap[(((this.yCoord +7) * mapWidth) + this.xCoord +1)] = 10;
                            gameMap[(((this.yCoord +7) * mapWidth) + this.xCoord +2)] = 10;

                            gameMap[(((this.yCoord +5) * mapWidth) + this.xCoord +1)] = 10;
                            gameMap[(((this.yCoord +5) * mapWidth) + this.xCoord +2)] = 10;

                            gameMap[(((this.yCoord +4) * mapWidth) + this.xCoord +1)] = 10;

                            gameMap[(((this.yCoord +8) * mapWidth) + this.xCoord +1)] = 10;

                            gameMap[(((this.yCoord +4) * mapWidth) + this.xCoord -1)] = 10;

                            gameMap[(((this.yCoord +8) * mapWidth) + this.xCoord -1)] = 10;
                            
                        } else if (this.xCoord == mapWidth -1) {
                            gameMap[(((this.yCoord +6) * mapWidth) + this.xCoord -1)] = 10;
                            gameMap[(((this.yCoord +6) * mapWidth) + this.xCoord -2)] = 10;

                            gameMap[(((this.yCoord +5) * mapWidth) + this.xCoord -1)] = 10;
                            gameMap[(((this.yCoord +5) * mapWidth) + this.xCoord -2)] = 10;

                            gameMap[(((this.yCoord +7) * mapWidth) + this.xCoord -1)] = 10;
                            gameMap[(((this.yCoord +7) * mapWidth) + this.xCoord -2)] = 10;

                            gameMap[(((this.yCoord +4) * mapWidth) + this.xCoord -1)] = 10;

                            gameMap[(((this.yCoord +8) * mapWidth) + this.xCoord -1)] = 10;
                        } else if (this.xCoord == mapWidth -2) {
                            gameMap[(((this.yCoord +6) * mapWidth) + this.xCoord -1)] = 10;
                            gameMap[(((this.yCoord +6) * mapWidth) + this.xCoord -2)] = 10;

                            gameMap[(((this.yCoord +6) * mapWidth) + this.xCoord +1)] = 10;

                            gameMap[(((this.yCoord +5) * mapWidth) + this.xCoord -1)] = 10;
                            gameMap[(((this.yCoord +5) * mapWidth) + this.xCoord -2)] = 10;
                            gameMap[(((this.yCoord +5) * mapWidth) + this.xCoord +1)] = 10;

                            gameMap[(((this.yCoord +7) * mapWidth) + this.xCoord -1)] = 10;
                            gameMap[(((this.yCoord +7) * mapWidth) + this.xCoord -2)] = 10;
                            gameMap[(((this.yCoord +7) * mapWidth) + this.xCoord +1)] = 10;

                            gameMap[(((this.yCoord +4) * mapWidth) + this.xCoord +1)] = 10;

                            gameMap[(((this.yCoord +8) * mapWidth) + this.xCoord +1)] = 10;

                            gameMap[(((this.yCoord +4) * mapWidth) + this.xCoord -1)] = 10;

                            gameMap[(((this.yCoord +8) * mapWidth) + this.xCoord -1)] = 10;
                        } else {
                            gameMap[(((this.yCoord +6) * mapWidth) + this.xCoord -1)] = 10;
                            gameMap[(((this.yCoord +6) * mapWidth) + this.xCoord -2)] = 10;

                            gameMap[(((this.yCoord +6) * mapWidth) + this.xCoord +1)] = 10;
                            gameMap[(((this.yCoord +6) * mapWidth) + this.xCoord +2)] = 10;

                            gameMap[(((this.yCoord +7) * mapWidth) + this.xCoord +1)] = 10;
                            gameMap[(((this.yCoord +7) * mapWidth) + this.xCoord +2)] = 10;

                            gameMap[(((this.yCoord +5) * mapWidth) + this.xCoord +1)] = 10;
                            gameMap[(((this.yCoord +5) * mapWidth) + this.xCoord +2)] = 10;

                            gameMap[(((this.yCoord +7) * mapWidth) + this.xCoord -1)] = 10;
                            gameMap[(((this.yCoord +7) * mapWidth) + this.xCoord -2)] = 10;

                            gameMap[(((this.yCoord +5) * mapWidth) + this.xCoord -1)] = 10;
                            gameMap[(((this.yCoord +5) * mapWidth) + this.xCoord -2)] = 10;


                            gameMap[(((this.yCoord +4) * mapWidth) + this.xCoord +1)] = 10;

                            gameMap[(((this.yCoord +8) * mapWidth) + this.xCoord +1)] = 10;

                            gameMap[(((this.yCoord +4) * mapWidth) + this.xCoord -1)] = 10;

                            gameMap[(((this.yCoord +8) * mapWidth) + this.xCoord -1)] = 10;
                        }
                    break;
                    case 'LEFT':
                        if(this.xCoord >= 8) {
                            gameMap[(((this.yCoord -1) * mapWidth) + this.xCoord -4)] = 10;
                            gameMap[(((this.yCoord) * mapWidth) + this.xCoord -4)] = 10;
                            gameMap[(((this.yCoord +1) * mapWidth) + this.xCoord -4)] = 10;  
                            
                            gameMap[(((this.yCoord -2) * mapWidth) + this.xCoord -5)] = 10;
                            gameMap[(((this.yCoord -1) * mapWidth) + this.xCoord -5)] = 10;
                            gameMap[(((this.yCoord) * mapWidth) + this.xCoord -5)] = 10;
                            gameMap[(((this.yCoord +1) * mapWidth) + this.xCoord -5)] = 10;
                            gameMap[(((this.yCoord +2) * mapWidth) + this.xCoord -5)] = 10;

                            gameMap[(((this.yCoord -2) * mapWidth) + this.xCoord -6)] = 10;
                            gameMap[(((this.yCoord -1) * mapWidth) + this.xCoord -6)] = 10;
                            gameMap[(((this.yCoord) * mapWidth) + this.xCoord -6)] = 10;
                            gameMap[(((this.yCoord +1) * mapWidth) + this.xCoord -6)] = 10;
                            gameMap[(((this.yCoord +2) * mapWidth) + this.xCoord -6)] = 10;

                            gameMap[(((this.yCoord -2) * mapWidth) + this.xCoord -7)] = 10;
                            gameMap[(((this.yCoord -1) * mapWidth) + this.xCoord -7)] = 10;
                            gameMap[(((this.yCoord) * mapWidth) + this.xCoord -7)] = 10;
                            gameMap[(((this.yCoord +1) * mapWidth) + this.xCoord -7)] = 10;
                            gameMap[(((this.yCoord +2) * mapWidth) + this.xCoord -7)] = 10;

                            gameMap[(((this.yCoord -1) * mapWidth) + this.xCoord -8)] = 10;
                            gameMap[(((this.yCoord) * mapWidth) + this.xCoord -8)] = 10;
                            gameMap[(((this.yCoord +1) * mapWidth) + this.xCoord -8)] = 10; 

                        } else if(this.xCoord == 7) {
                            gameMap[(((this.yCoord -1) * mapWidth) + this.xCoord -4)] = 10;
                            gameMap[(((this.yCoord) * mapWidth) + this.xCoord -4)] = 10;
                            gameMap[(((this.yCoord +1) * mapWidth) + this.xCoord -4)] = 10;  
                            
                            gameMap[(((this.yCoord -2) * mapWidth) + this.xCoord -5)] = 10;
                            gameMap[(((this.yCoord -1) * mapWidth) + this.xCoord -5)] = 10;
                            gameMap[(((this.yCoord) * mapWidth) + this.xCoord -5)] = 10;
                            gameMap[(((this.yCoord +1) * mapWidth) + this.xCoord -5)] = 10;
                            gameMap[(((this.yCoord +2) * mapWidth) + this.xCoord -5)] = 10;

                            gameMap[(((this.yCoord -2) * mapWidth) + this.xCoord -6)] = 10;
                            gameMap[(((this.yCoord -1) * mapWidth) + this.xCoord -6)] = 10;
                            gameMap[(((this.yCoord) * mapWidth) + this.xCoord -6)] = 10;
                            gameMap[(((this.yCoord +1) * mapWidth) + this.xCoord -6)] = 10;
                            gameMap[(((this.yCoord +2) * mapWidth) + this.xCoord -6)] = 10;

                            gameMap[(((this.yCoord -2) * mapWidth) + this.xCoord -7)] = 10;
                            gameMap[(((this.yCoord -1) * mapWidth) + this.xCoord -7)] = 10;
                            gameMap[(((this.yCoord) * mapWidth) + this.xCoord -7)] = 10;
                            gameMap[(((this.yCoord +1) * mapWidth) + this.xCoord -7)] = 10;
                            gameMap[(((this.yCoord +2) * mapWidth) + this.xCoord -7)] = 10;
                            
                        } else if(this.xCoord == 6) {
                            gameMap[(((this.yCoord -1) * mapWidth) + this.xCoord -4)] = 10;
                            gameMap[(((this.yCoord) * mapWidth) + this.xCoord -4)] = 10;
                            gameMap[(((this.yCoord +1) * mapWidth) + this.xCoord -4)] = 10;  
                            
                            gameMap[(((this.yCoord -2) * mapWidth) + this.xCoord -5)] = 10;
                            gameMap[(((this.yCoord -1) * mapWidth) + this.xCoord -5)] = 10;
                            gameMap[(((this.yCoord) * mapWidth) + this.xCoord -5)] = 10;
                            gameMap[(((this.yCoord +1) * mapWidth) + this.xCoord -5)] = 10;
                            gameMap[(((this.yCoord +2) * mapWidth) + this.xCoord -5)] = 10;

                            gameMap[(((this.yCoord -2) * mapWidth) + this.xCoord -6)] = 10;
                            gameMap[(((this.yCoord -1) * mapWidth) + this.xCoord -6)] = 10;
                            gameMap[(((this.yCoord) * mapWidth) + this.xCoord -6)] = 10;
                            gameMap[(((this.yCoord +1) * mapWidth) + this.xCoord -6)] = 10;
                            gameMap[(((this.yCoord +2) * mapWidth) + this.xCoord -6)] = 10;
                            
                        } else if(this.xCoord == 5) {
                            gameMap[(((this.yCoord -1) * mapWidth) + this.xCoord -4)] = 10;
                            gameMap[(((this.yCoord) * mapWidth) + this.xCoord -4)] = 10;
                            gameMap[(((this.yCoord +1) * mapWidth) + this.xCoord -4)] = 10;  
                            
                            gameMap[(((this.yCoord -2) * mapWidth) + this.xCoord -5)] = 10;
                            gameMap[(((this.yCoord -1) * mapWidth) + this.xCoord -5)] = 10;
                            gameMap[(((this.yCoord) * mapWidth) + this.xCoord -5)] = 10;
                            gameMap[(((this.yCoord +1) * mapWidth) + this.xCoord -5)] = 10;
                            gameMap[(((this.yCoord +2) * mapWidth) + this.xCoord -5)] = 10;
                            
                        } else if(this.xCoord == 4) {
                            gameMap[(((this.yCoord -1) * mapWidth) + this.xCoord -4)] = 10;
                            gameMap[(((this.yCoord) * mapWidth) + this.xCoord -4)] = 10;
                            gameMap[(((this.yCoord +1) * mapWidth) + this.xCoord -4)] = 10;                       
                        } else {
                        }
                    break;
                    case 'RIGHT':
                        if(this.xCoord == mapWidth -7) {
                            gameMap[(((this.yCoord -1) * mapWidth) + this.xCoord +3)] = 10;
                            gameMap[(((this.yCoord) * mapWidth) + this.xCoord +3)] = 10;
                            gameMap[(((this.yCoord +1) * mapWidth) + this.xCoord +3)] = 10; 
                            
                            gameMap[(((this.yCoord -2) * mapWidth) + this.xCoord +4)] = 10;
                            gameMap[(((this.yCoord -1) * mapWidth) + this.xCoord +4)] = 10;
                            gameMap[(((this.yCoord) * mapWidth) + this.xCoord +4)] = 10;
                            gameMap[(((this.yCoord +1) * mapWidth) + this.xCoord +4)] = 10;
                            gameMap[(((this.yCoord +2) * mapWidth) + this.xCoord +4)] = 10;  

                            gameMap[(((this.yCoord -2) * mapWidth) + this.xCoord +5)] = 10;
                            gameMap[(((this.yCoord -1) * mapWidth) + this.xCoord +5)] = 10;
                            gameMap[(((this.yCoord) * mapWidth) + this.xCoord +5)] = 10;
                            gameMap[(((this.yCoord +1) * mapWidth) + this.xCoord +5)] = 10;
                            gameMap[(((this.yCoord +2) * mapWidth) + this.xCoord +5)] = 10;
                            
                            gameMap[(((this.yCoord -2) * mapWidth) + this.xCoord +6)] = 10;
                            gameMap[(((this.yCoord -1) * mapWidth) + this.xCoord +6)] = 10;
                            gameMap[(((this.yCoord) * mapWidth) + this.xCoord +6)] = 10;
                            gameMap[(((this.yCoord +1) * mapWidth) + this.xCoord +6)] = 10;
                            gameMap[(((this.yCoord +2) * mapWidth) + this.xCoord +6)] = 10;
                        } else if(this.xCoord == mapWidth -6) {
                            gameMap[(((this.yCoord -1) * mapWidth) + this.xCoord +3)] = 10;
                            gameMap[(((this.yCoord) * mapWidth) + this.xCoord +3)] = 10;
                            gameMap[(((this.yCoord +1) * mapWidth) + this.xCoord +3)] = 10; 
                            
                            gameMap[(((this.yCoord -2) * mapWidth) + this.xCoord +4)] = 10;
                            gameMap[(((this.yCoord -1) * mapWidth) + this.xCoord +4)] = 10;
                            gameMap[(((this.yCoord) * mapWidth) + this.xCoord +4)] = 10;
                            gameMap[(((this.yCoord +1) * mapWidth) + this.xCoord +4)] = 10;
                            gameMap[(((this.yCoord +2) * mapWidth) + this.xCoord +4)] = 10;  

                            gameMap[(((this.yCoord -2) * mapWidth) + this.xCoord +5)] = 10;
                            gameMap[(((this.yCoord -1) * mapWidth) + this.xCoord +5)] = 10;
                            gameMap[(((this.yCoord) * mapWidth) + this.xCoord +5)] = 10;
                            gameMap[(((this.yCoord +1) * mapWidth) + this.xCoord +5)] = 10;
                            gameMap[(((this.yCoord +2) * mapWidth) + this.xCoord +5)] = 10;
                        } else if(this.xCoord == mapWidth -5) {
                            gameMap[(((this.yCoord -1) * mapWidth) + this.xCoord +3)] = 10;
                            gameMap[(((this.yCoord) * mapWidth) + this.xCoord +3)] = 10;
                            gameMap[(((this.yCoord +1) * mapWidth) + this.xCoord +3)] = 10; 
                            
                            gameMap[(((this.yCoord -2) * mapWidth) + this.xCoord +4)] = 10;
                            gameMap[(((this.yCoord -1) * mapWidth) + this.xCoord +4)] = 10;
                            gameMap[(((this.yCoord) * mapWidth) + this.xCoord +4)] = 10;
                            gameMap[(((this.yCoord +1) * mapWidth) + this.xCoord +4)] = 10;
                            gameMap[(((this.yCoord +2) * mapWidth) + this.xCoord +4)] = 10;                           
                        } else if(this.xCoord == mapWidth -4) {
                            gameMap[(((this.yCoord -1) * mapWidth) + this.xCoord +3)] = 10;
                            gameMap[(((this.yCoord) * mapWidth) + this.xCoord +3)] = 10;
                            gameMap[(((this.yCoord +1) * mapWidth) + this.xCoord +3)] = 10;                       
                        } else {
                            gameMap[(((this.yCoord -1) * mapWidth) + this.xCoord +3)] = 10;
                            gameMap[(((this.yCoord) * mapWidth) + this.xCoord +3)] = 10;
                            gameMap[(((this.yCoord +1) * mapWidth) + this.xCoord +3)] = 10; 
                            
                            gameMap[(((this.yCoord -2) * mapWidth) + this.xCoord +4)] = 10;
                            gameMap[(((this.yCoord -1) * mapWidth) + this.xCoord +4)] = 10;
                            gameMap[(((this.yCoord) * mapWidth) + this.xCoord +4)] = 10;
                            gameMap[(((this.yCoord +1) * mapWidth) + this.xCoord +4)] = 10;
                            gameMap[(((this.yCoord +2) * mapWidth) + this.xCoord +4)] = 10;  

                            gameMap[(((this.yCoord -2) * mapWidth) + this.xCoord +5)] = 10;
                            gameMap[(((this.yCoord -1) * mapWidth) + this.xCoord +5)] = 10;
                            gameMap[(((this.yCoord) * mapWidth) + this.xCoord +5)] = 10;
                            gameMap[(((this.yCoord +1) * mapWidth) + this.xCoord +5)] = 10;
                            gameMap[(((this.yCoord +2) * mapWidth) + this.xCoord +5)] = 10;
                            
                            gameMap[(((this.yCoord -2) * mapWidth) + this.xCoord +6)] = 10;
                            gameMap[(((this.yCoord -1) * mapWidth) + this.xCoord +6)] = 10;
                            gameMap[(((this.yCoord) * mapWidth) + this.xCoord +6)] = 10;
                            gameMap[(((this.yCoord +1) * mapWidth) + this.xCoord +6)] = 10;
                            gameMap[(((this.yCoord +2) * mapWidth) + this.xCoord +6)] = 10;

                            gameMap[(((this.yCoord -1) * mapWidth) + this.xCoord +7)] = 10;
                            gameMap[(((this.yCoord) * mapWidth) + this.xCoord +7)] = 10;
                            gameMap[(((this.yCoord +1) * mapWidth) + this.xCoord +7)] = 10;
                        }
                    break;
                }
            break;
        }
    }

    move() {
        if (!this.dead) {
            if (this.key === "LEFT" && gameMap[(((this.yCoord) * mapWidth) + this.xCoord -1 )] != 0 && this.xCoord -1 > -1) this.xCoord -= 1;
            if (this.key === "UP" && gameMap[(((this.yCoord -1) * mapWidth) + this.xCoord)] != 0 && this.yCoord -1 > -1) this.yCoord -= 1;
            if (this.key === "RIGHT" && gameMap[(((this.yCoord) * mapWidth) + this.xCoord +1 )] != 0 && this.xCoord +1 < mapWidth) this.xCoord += 1;
            if (this.key === "DOWN" && gameMap[(((this.yCoord +1) * mapWidth) + this.xCoord)] != 0 && this.yCoord +1 < mapHeight) this.yCoord += 1;
        }
        this.key = 'USED'
    }

    action() {
        if(this.key != 'ATTACK' && this.key) {
            this.move();
        }

        if(this.key === 'ATTACK') {
            this.activateAttack();
        }
    }
    
    setAttack(attack) {
        this.weapon = weapon;
    }

    changeHp(value) {
        this.hp = this.hp + value;
    }

    die() {
        this.dead = true;
        this.xCoord = -10000;
        this.yCoord = -10000;
        Player.allInstances;
    }
};
