var engine, world;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground1,ground2,ground3;
var polygon,slingshot;
var block1,block2,block3,block4,block5block6,block7,block8,block9,block10,
    block11,block12,block13,block14,block15,block16,block17,block18,block19
    ,block20,block21,block22,block23,block24,block25;

function preload() {
    
}

function setup() {
    createCanvas(1500,900)
    engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground1=new Ground(700,600,500,10)
  ground2=new Ground(1100,300,350,10)
  ground3=new Ground(1500,900,10000,50)

  polygon=new Polygon(50,200,20);
  slingshot=new Slingshot(polygon.body,{x:100,y:200});
  
  block1 = new Block(550,575,70,70);
  block2 = new Block(600,575,70,70);
  block3 = new Block(650,575,70,70);
  block4 = new Block(700,575,70,70);
  block5 = new Block(750,575,70,70);
  block6 = new Block(800,575,70,70);
  block7 = new Block(850,575,70,70);
  block8 = new Block(600,500,70,70);
  block9 = new Block(650,500,70,70);
  block10 = new Block(700,500,70,70);
  block11 = new Block(750,500,70,70);
  block12 = new Block(800,500,70,70);
  block13 = new Block(650,475,70,70);
  block14 = new Block(700,475,70,70);
  block15 = new Block(750,475,70,70);
  block16 = new Block(700,400,70,70);
  block17 = new Block(1000,275,70,70);
  block18 = new Block(1050,275,70,70);
  block19 = new Block(1100,275,70,70);
  block20 = new Block(1150,275,70,70);
  block21 = new Block(1200,275,70,70);
  block22 = new Block(1050,200,70,70);
  block23 = new Block(1100,200,70,70);
  block24 = new Block(1150,200,70,70);
  block25 = new Block(1100,125,70,70);

}

function draw() {
    background(846,18,756)
    Engine.update(engine);

    ground1.display()
    ground2.display()
    ground3.display()

    slingshot.display()
    polygon.display()
    

    block1.display()
    block2.display()
    block3.display()
    block4.display()
    block5.display()
    block6.display()
    block7.display()
    block8.display()
    block9.display()
    block10.display()
    block11.display()
    block12.display()
    block13.display()
    block14.display()
    block15.display()
    block16.display()
    block17.display()
    block18.display()
    block19.display()
    block20.display()
    block21.display()
    block22.display()
    block23.display()
    block24.display()
    block25.display()

}

function mouseDrraged() {
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    slingshot.fly();
  }