
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(900, 800);


	engine = Engine.create();
	world = engine.world;

	var ball_options ={
     restitution : 0.3,
	 friction : 0,
	 density : 1.2

	}

	//Create the Bodies Here.
	ball = ball.Matter.Bodies.circle(50,20,10,10,ball_options),
	World.add(world,ball);


	Engine.run(engine);
  
}
function keyPressed() {
 if (keyCode ===UP_ARROW){
	 Matter.Body.applyForce(ball:0:0)
 }
}

 display(){
 groundObj=new ground(width/2,670,width,20);
 leftSide = new ground (1100,600,20,120);
 }
function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
 groundObj.display();

}



