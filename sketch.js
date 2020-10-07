const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground, binSide1, binSide2, binSide3;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//paper = new Paper(400, 350, 30, PI/3);
	paper = new Paper(150,270,20);
	ground = new Ground(400,690,800,30);
	binSide1 = new BinSide1(650,620,20,100);
	binSide2 = new BinSide2(480,620,20,100);
	binSide3 = new BinSide3(565,665,150,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);  

  paper.display();
  ground.display();
  binSide1.display();
  binSide2.display();
  binSide3.display();

}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Body.applyForce(paper.body, paper.body.position,{x:58,y:-40});
	}

}



