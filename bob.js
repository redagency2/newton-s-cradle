class Bob {
    constructor(x,y,radius) {
      var options = {
         restitution:1,
         friction:0,
         density:0.8
      }
      this.body = Bodies.circle(x,y,radius/2,options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     // ellipseMode(RADIUS);
      fill("grey");
      ellipse(pos.x, pos.y, this.radius, this.radius);
    }
  };
//write push, translate, rotate and pop if needed