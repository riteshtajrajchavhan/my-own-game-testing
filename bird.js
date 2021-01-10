class Bird {
  constructor(x,y) {
    var options = {
        'restitution':1.2,
        'friction':1.1,
        'density':1.0,
        'frictionAir': 0.001,
        
    }
    this.body = Bodies.rectangle(x, y, 150, 150, options);
   this.image=loadImage("bunny.png")
    this.width = 150;
    this.height = 150;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
  // pos.x=mouseX;
  // pos.y=mouseY;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    fill("blue");
   
    image(this.image,0, 0, this.width, this.height);
    pop();
  }
};
