
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
//load the dustbin image	
}

function setup() {
	createCanvas(800, 400);
	engine = Engine.create();
	world = engine.world;

	
	paper1 = new paper(200,300,50,50);
	ground1 = new Ground(width/2,height-20,width,10);
	centre=new Box(width/2,height-40,100,20)
	left=new Box(width/2-50,height-40-40,20,110)
	right=new Box(width/2+50,height-40-40,20,110)

	//Create the Bodies Here.

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
paper1.display()
ground1.display()
left.display()
right.display()
centre.display()
 // drawSprites();
//remove line 37,38,39
//image(dustbinImage,width/2,height-80,200,200) 
}

function keyPressed(){
if(keyCode===UP_ARROW){

Matter.Body.applyForce(paper1.body,paper1.body.postion,{x:85,y:-80})

}





}




