class roof{
    constructor(x,y,width,height){
    var option={
        isStatic:true,
       
    }
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.body=Bodies.rectangle(x,y,width,height,option);
    World.add(world,this.body);

    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        fill("white");
        rect(0,0,this.width,this.height);
        pop();

    }
}