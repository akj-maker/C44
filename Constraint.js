class Connect
{
    constructor(pointA, bodyB)
    {
        var options =
        {
            pointA: pointA,
            bodyB: bodyB,
            stiffness: 0.05,
            length: 1
        }

        this.bow = Constraint.create(options);
        this.pointA = pointA;
        this.bodyB = bodyB;
        World.add(world, this.bow);
    }

    fly()
    {
        this.bow.pointA = null;
    }

    display()
    {
        if(this.bow.pointA)
        {
            var pointA = this.pointA;
            var pointB = this.bow.bodyB.position;
            //push();
            strokeWeight(3);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            //pop();
        }
    }
}

