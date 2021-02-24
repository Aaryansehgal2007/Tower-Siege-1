class Polygon{
    constructor(x,y,radius){
        var options={
            friction: 0.4,
            restitution: 0.75,
            density: 0.05
        }
        this.radius = radius
        this.x=x;
        this.y=y;
        this.image= loadImage("polygon.png");
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world, this.body);
     }
     display(){
        var pos = this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, this.radius, this.radius, 40,40);
        pop();
     }
    }