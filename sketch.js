
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;
var roof1;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 roof1= new roof(width/2,height/4,width/7,20);
 bd=40;
 bobx=width/2;
 boby=height/4 + 500;
 bob1=new Bob(bobx-bd*2,boby,bd);
 bob2=new Bob(bobx-bd,boby,bd);
 bob3=new Bob(bobx,boby,bd);
 bob4=new Bob(bobx+bd,boby,bd);
 bob5=new Bob(bobx+bd*2,boby,bd);

 rope1= new rope(bob1.body,roof1.body,-bd*2,0);
 rope2= new rope(bob2.body,roof1.body,-bd,0);
 rope3= new rope(bob3.body,roof1.body,0,0);
 rope4= new rope(bob4.body,roof1.body,bd,0);
 rope5= new rope(bob5.body,roof1.body,bd*2,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(2300);
	roof1.display();

	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

  

 
}

function keyPressed() {
	if(keyCode===UP_ARROW) {
 Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
 
	}
}
function drawLine(constraint) {
	bp=constraint.bodyA.position;
	rp=constraint.bodyB.position;
	ro=constraint.pointB;
	rx=rp.x+ro.x;
	ry=rp.y+ro.y;
	line (bp.x,bp.y,rx,ry);
}
