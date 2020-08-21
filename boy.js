class boy extends BaseClass{
    constructor(x,y,height,angle){
      super(x,y,150,height,angle);
      this.image = loadImage("image/boy.png");
      Matter.Body.setAngle(this.body, angle);
    }
  }