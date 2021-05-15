const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground1,box1,box2,box3,box4,box5;
var stick1,stick2,stick3,stick4;
var pig1,pig2;
var bird1;

function setup() {
  createCanvas(1200,400);

  engine = Engine.create();
  world = engine.world;
  box1 = new box(700,320,50,50);
  box2 = new box(920,320,50,50);
  box3 = new box(700,240,50,50);
  box4 = new box(920,240,50,50);
  box5 = new box(810,160,50,50);
 ground1 = new ground(600,height,1200,20);
 stick1 = new sticks(810,260,300,PI/2);
 stick2 = new sticks(810,180,300,PI/2);
 stick3 = new sticks(800,120,150,PI/7)
 stick4 = new sticks(840,120,150,-PI/7);
 pig1 = new pig(810,350);
 pig2 = new pig(810,210);
 bird1 = new bird(100,100)
 
}

function draw() {
  background(0);
  Engine.update(engine);
  box1.display();
  box2.display();
  box3.display(); 
  box4.display();
  box5.display();
  ground1.display();
  stick1.display();
  stick2.display();
  stick3.display();
  stick4.display();
  pig1.display();
  pig2.display();
  bird1.display();
  //drawSprites();
}