
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var body;

var bow;
var t1, t2, t3;
//var targets = [t1, t2, t3];

var constraint;

var backgroundImg;
var arrow;

function setup() 
{
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;

  t1 = new Target(windowWidth - 200, windowHeight/2);
  t2 = new Target(windowWidth - 300, windowHeight/4);
  t3 = new Target(windowWidth - 300, 3*(windowHeight)/4);

  arrow = new Arrow(200, windowHeight/2);
  body = new Body(200 + 130/2, windowHeight/2 - 35, 10, 80);
  constraint = new Connect({x: 130, y: windowHeight/2}, arrow.body);
}

function draw() 
{
  Engine.update(engine);
  background(210);
  t1.display();
  t2.display();
  t3.display();

  arrow.display();
  body.display();
  constraint.display();
}

function mouseDragged()
{
  Matter.Body.setPosition(arrow.body, {x: mouseX, y: mouseY});
}

function mouseReleased()
{
  constraint.fly();
}