class slingShot{

constructor(obj1,obj2){

    var options={
        bodyA : obj1,
        bodyB : obj2,
        stiffness : 0.4,
        length : 50
    }

    this.sling = Matter.Constraint.create(options);
    World.add(world,this.sling);
}

display(){
    var pointA=this.sling.bodyA.position;
    var pointB=this.sling.bodyB.position;

    strokeWeight(3);
    line(pointA.x,pointA.y,pointB.x,pointB.y);
}

}