class Box{
    constructor(x,y,width,height)
    {//properties
        var opt = {
            restitution : 0.8
          }
          this.width = width;
          this.height = height;
        this.body = Bodies.rectangle(x,y,width,height,opt);
        World.add(world,this.body);                 
    }
    display()
    {//function
        var pos = this.body.position;
        var angle = this.body.angle;
        push();  //captures the new setting
        translate(pos.x,pos.y); //to change the 0 of the axis to a given x and y position.
        
        rotate(angle);
        rectMode(CENTER);
        fill("orange");
        rect(0,0,this.width,this.height);
        pop();  // restoring the old property
    }
}