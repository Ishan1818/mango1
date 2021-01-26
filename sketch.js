
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var ground, boy, tree;
var boyImg, treeImg;
var m4, m5, m1, m2, m3;
var stone;
var sling;
function preload()
{
boyImg=loadImage("boy.png")
treeImg=loadImage("tree.png")	
}

function setup() {
	createCanvas(1500, 800);


	engine = Engine.create();
	world = engine.world;

	ground=new Ground(750, 750, 2000, 100)
    boy=createSprite(200, 650, 20, 20)
boy.addImage(boyImg)
boy.scale=0.1

stone=new Stone(180, 560, 5)

   tree=createSprite(1000, 400, 20, 20)
tree.addImage(treeImg)
tree.scale=0.5

m1=new Mango(900, 340, 15)
m2=new Mango(800, 320, 20)
m3=new Mango(1200, 300, 17)
m4=new Mango(1000, 260, 14)
m5=new Mango(900, 380, 15)

sling=new SlingShot(stone.body, {x:150, y:570})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 ground.display()
 m1.display()
 m2.display()
 m3.display()
 m4.display()
 m5.display()
 stone.display()

 detectcollision(stone, m1)
 detectcollision(stone, m2)
 detectcollision(stone, m3)
 detectcollision(stone, m4)
 detectcollision(stone, m5)

}



function detectcollision(lstone,lmango)
{
   mangoBodyPosition=lmango.body.position
   stoneBodyPosition=lstone.body.position

   var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
   if(distance<=lmango.r+lstone.r)
   {
      Matter.Body.setStatic(lmango.body,false);
   }  
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY})
}
function mouseReleased(){
	sling.fly()
}

function keyPressed(){
	if (keyCode===32)
	{
		Matter.Body.setPosition(stone.body, {x:160, y:570})
		sling.attach(stone.body)
	}
}











