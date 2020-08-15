class Paper {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.3,
          'friction':1.3,
          'density':1.2,
          'isStatic':false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;

      //Matter.Bodies.circle(x,y,diameter,[options],[maxSides])
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
     strokeWeight(4);
     stroke(0);
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  