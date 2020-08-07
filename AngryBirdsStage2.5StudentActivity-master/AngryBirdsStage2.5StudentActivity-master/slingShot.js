class slingShot {
    constructor(bodyA,pointB) {
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.8,
            length : 10
        }
        this.rubberband = Constraint.create(options)
        this.pointB = pointB
        World.add(world,this.rubberband);
    }
    flight(){
        this.rubberband.bodyA = null
    }
    display(){
        var pointA = this.rubberband.bodyA.position
        var pointB = this.pointB
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }

    }
