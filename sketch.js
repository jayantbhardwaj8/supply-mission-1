var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,helicopterBody;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3;
function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

   
	
	

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.8, isStatic:true});
	World.add(world, packageBody);
	
helicopterBody = Bodies.rectangle(width/2,200,10,10,{isStatic:true});
World.add(world,helicopterBody);
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 box1 = new Box(250 ,630,20,100);
	 box2 = new Box(460,640,20,100);
	 box3  = new Box(350,650,200,20);


	 


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;

  helicopterSprite.x = helicopterBody.position.x;
  helicopterSprite.y = helicopterBody.position.y;
  

  if(keyDown(DOWN_ARROW)){
	Matter.Body.setStatic(packageBody,false);
	}
	/*if(keyDown(UP_ARROW))
{ Matter.Body.setStatic(helicopterBody,false);
	helicopterBody.position.x = packageBody.position.x;
	//helicopterBody.position.x = helicopterBody.position.x+5;
	helicopterBody.velocityX = +2;
	//helicopterBody.velocityY = 0;
}*/

  box1.display();
  box2.display();
  box3.display();



  drawSprites();
 
}



