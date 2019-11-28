let Animation =function (frame_set, delay) {
    this.count = 0;
    this.delay;
    this.frame = 0;
    this.frameIndex = 0;
    this.frameSet = frameSet;
}



spriteSheet = {
    frameSets: [[]],
    image: new Image()
}