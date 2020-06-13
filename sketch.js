var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody, ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var ball1;
var net1, net2, net3, 
net4, net5, net6, 
net7, net8;

var ground1;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	ground1 = new Ground(width/2, 680, width, 20);

	net1 = new net(1300, 620, 100, 100);

	net2 = new net(700, 560, 100, 100);

	net3 = new net(1020, 360, 100, 100);

	net4 = new net(220, 160, 100, 100);

    net5 = new net(400, 360, 100, 100);

	net6 = new net(700, 260, 100, 100);
	
	net7 = new net(1200, 160, 100, 100);
	
	net8 = new net(1400, 400, 100, 100);

	ball1 = new ball(530, 595, 20);


	var render = Render.create({
		element: document.body,
		Engine: engine, 
		options:{
			width: 1200,
			height: 700,
			wireframes: false
		}
	});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  ground1.display();
  net1.display();

  net2.display();
 
  net3.display();
 
  net4.display();

  net5.display();
 
  net6.display();
 
  net7.display();
 
  net8.display();
 
  ball1.display();

  drawSprites();
 
}

function keyPressed() {
	if(keyCode === RIGHT_ARROW) {
		Matter.Body.applyForce(ball1.body, ball1.body.position, {x: 20, y:-20});
	}

	if(keyCode === LEFT_ARROW) {
		Matter.Body.applyForce(ball1.body, ball1.body.position, {x: -20, y:-20});
	}
  
}