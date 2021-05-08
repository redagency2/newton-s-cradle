class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
        var options= {
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:offsetX,y:offsetY}

        }
        this.offsetX= offsetX;
        this.offsetY = offsetY;
        this.body = Constraint.create(options);
        World.add(world,this.body)
    }
    display(){
        var pointA = this.body.bodyA.position;
        var pointB = this.body.bodyB.position;
        var ancor1Y = pointA.y
        var ancor1X = pointA.x 
        var ancor2Y = pointB.y + this.offsetY
        var ancor2X = pointB.x+ this.offsetX
        line(ancor1X,ancor1Y,ancor2X,ancor2Y)
    }
}