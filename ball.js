class Ball{

    constructor(x,y,radius){

        var options = {
            frictionAir:0.04,
            density:1.0
        }


        this.body = Bodies.circle(x,y,radius/2,options)
        this.radius = radius;
        World.add(world,this.body);

    }
    
    display(){

        var angle = this.body.angle;
        var pos = this.body.position;
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER)
        ellipse(0,0,this.radius,this.radius);
        pop()
    



    }

}