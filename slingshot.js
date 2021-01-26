class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.1,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);

        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(body){
       this.sling.bodyA = body;


    }

    display()
   {
      if(this.sling.bodyA)
      {
      var p1=this.sling.bodyAposition;
      var p2=this.sling.pointB;
      push()
      strokeWeight(5);
     // line(p1.x,p1.y,p2.x,p2.y);
      pop();
      }
   }
    
}