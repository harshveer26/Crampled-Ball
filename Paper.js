class Paper {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.8,
          'friction':0.5,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      //Body.setAngle(this.body, radius);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill("yellow");
      stroke("black");
      strokeWeight(3);
      ellipse(0, 0, this.radius, this.radius);
      pop();
    }
  };