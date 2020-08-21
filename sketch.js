const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var tree1, mango1;
var stone1, boy1;
var ground;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    tree1 = new tree(700,320,70,70);
    boy1 = new boy(110,260,300, PI/2);
	//mango1 = new mangoes(200,300,40,50);
    stone1 = new stone(100,100);
    chain = new Chain(stone1.body,{x:60,y:260});
}

function draw(){
    background(250,250,250);
    Engine.update(engine);
    strokeWeight(4);
    tree1.display();
    ground.display();
    //mango1.display();
	boy1.display();
	
    stone1.display();
     chain.display();    
}
function mouseDragged(){
   Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
   chain.releas();
}
function keyPressed(){
	if(keyCode === 32){
		matter.Body.setPosition(stone1.body,{x:235,y:420});

	}
}

function detectCollision(){
	mango1.Body.Position = lmango1.body.Position;
}


