
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper_obj,ground_obj;
var dustbin_obj,dustbin_obj2,dustbin_obj3;


function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
  
  paper_obj = new Paper(200,600,50,50);
  dustbin_obj = new Dustbin(515,650,20,100);
  dustbin_obj2 = new Dustbin(600,660,150,20);
  dustbin_obj3 = new Dustbin(680,650,20,100)
  ground_obj = new Ground(400,690,850,40);
   
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  

paper_obj.display();
dustbin_obj.display();
dustbin_obj2.display();
dustbin_obj3.display();
ground_obj.display();

  drawSprites();
 
}

function keyPressed(){

    if (keyCode === UP_ARROW){
    Matter.Body.applyForce(paper_obj.body,paper_obj.body.position,{x:85,y:-100})

}
}
