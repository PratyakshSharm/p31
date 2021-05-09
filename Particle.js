class Particle {
    
    constructor(x,y,r){
        this.x=x
       this.y=y
       this.r= r

        var options={
            friction:0.4,
            density:1,
            restitution:0.3
        }


        this.body=Bodies.circle(x,y,this.r,options)
        this.color = color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);




    }
    
    display(){

        fill(this.color)
        
        ellipseMode(CENTER)
        ellipse(this.body.position.x,this.body.position.y,this.r*2,this.r*2);
    }



}