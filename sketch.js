const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var Dustbin1, dustbin2, dustbin3;
var paper,ground;
var slingShot;
var wood1;

function preload()
{

}

function setup() {
	
	createCanvas(800, 700);

	
	engine = Engine.create();
	world = engine.world;
	
	paper = new Paper(100, 350,45);
	
	ground = new Ground(400,580,800,20);
	
	wood1 = new Wood(700, 500, 150,150);	
	

	slingShot = new Launcher(paper.body,{x:100,y:350});
	
	
	Engine.run(engine);
	
}


function draw(){
  background("cyan");
 
  Engine.update(engine);
 
  
  paper.display();
  ground.display();
  slingShot.display();
  wood1.display();
  
}
/*function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:360,y:-209});
	   
	 }
}*/
function mouseDragged(){
    Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}