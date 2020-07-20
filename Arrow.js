class Arrow
{
    constructor(x, y)
    {
        
        var options = 
        {
            angularSpeed: 3,
            restitution:0.3
        }
        
        this.body = Bodies.rectangle(x, y, 130, 10, options);
        this.x = x;
        this.y = y;
        World.add(world, this.body);
    }

    display()
    {
        //var pos = this.body.position;
        push();
        //translate(pos.x, pos.y);
        //rotate(angle);
        //this.x = mouseX;
        //this.y = mouseY;
        strokeWeight(2);
        stroke(255, 0, 0);
        fill(255, 255, 0);
        rectMode(CENTER);
        rect(this.x, this.y, 100, 5);
        pop();
    }
}