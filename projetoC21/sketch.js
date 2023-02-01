let engine;
let world;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,leftside,rightside,ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	
	engine = Engine.create();
	world = engine.world;
	
	ground = new Ground(400,690,800,20);
	leftside = new Ground(550,640,10,60);
	leftside = new Ground(750,640,10,60)
	//Create the Bodies Here.
	var ball_opt = {
		restitution: 0.3,
		friction:0,
		isStatic: false,
		density:1.2
	};
	ball = Bodies.circle(100,10,20,ball_opt);
	World.add(world,ball);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 // drawSprites();
 ground.show();
 rightside.show();
 leftside.show();
 ellipse(ball.position.x,ball.position.y,20);
 Engine.update(engine);
}



