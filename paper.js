class Paper {
    constructor(x, y,r) {
      var options = {
          'restitution':0.3,
          'friction':0.6,
          'density':1.2,
          'isStatic':false
      } 
     
      this.x = x;
      this.y = y;
      this.r = r;

      this.body = Bodies.circle(this.x,this.y,this.r/2,options);
      World.add(world, this.body);
    }
    display(){
      var paperpos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(paperpos.x, paperpos.y);
      rectMode(CENTER);
     strokeWeight(4);
     stroke(0);
      fill(255);
      ellipse(0, 0, this.r, this.r);
      pop();
    }
  };
  